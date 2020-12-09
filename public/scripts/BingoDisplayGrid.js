import BirthChart from "./BirthChart.js";
import AstrologyBingoGameController from "./AstrologyBingoGameController.js";
import { isElement } from "./utilities.js";

/****************************************************************************
 * A component that constructs the visual grid (both public and admin views)
 * Basic (grid with items); Admin (lineguides and call button)
 ***************************************************************************/

class BingoDisplayGrid {
  constructor({
    game,
    domNodes: { gridArea, controls, phraseDisplay },
    classes: {
      calledClass = "called",
      hoveringClass = "hover",
      lastCalledClass = "lastCalled",
      ...supplemental
    },
    options = {},
  }) {
    this.game = game;
    this.gridArea = gridArea;
    this.controls = controls;
    this.phraseDisplay = phraseDisplay;
    this.classes = {
      calledClass,
      hoveringClass,
      lastCalledClass,
      ...supplemental,
    };
    this.options = options;

    // Connection opened
    const { socket, alreadyCalled, reset } = this.game;
    socket.addEventListener("open", () => {
      console.log("open from the grid");
    });

    // Listen for messages
    socket.addEventListener("message", (event) => {
      console.log("message from the grid", event.data);
      const evt = JSON.parse(event.data);
      console.log("evt", evt);
      switch (evt.type) {
        case "reset":
          reset(this.resetUI.bind(this));
          break;
        case "call":
          this.markCalled({ alreadyCalled: alreadyCalled });
          break;
        default:
          console.log(`received a ${event.data.type}`);
      }
    });

    // Listen for errors
    socket.addEventListener("error", (err) => {
      console.log("error from the grid", err);
    });
  }

  addControls() {
    const button = document.createElement("button");
    button.classList.add("btn", "danger");
    button.textContent = "Reset game";
    button.addEventListener("click", (e) => {
      this.game.reset(this.resetUI.bind(this));
      this.game.socket.send(JSON.stringify({ type: "reset" }));
    });
    this.controls.append(button);
  }

  clearPhrase() {
    this.phraseDisplay.innerHTML = "";
  }

  resetUI() {
    this.clearCalled();
    this.clearPhrase();
  }

  render(overrides = {}) {
    const defaults = {
      features: {
        controls: false,
        hoverguides: false,
      },
    };

    const settings = { ...defaults, ...this.options, ...overrides };

    // So you can provide an override from outside the class
    if (typeof settings.renderFn === "function") {
      renderFn();
      return;
    }

    // Create the table parts
    const table = document.createElement("table");
    table.classList.add("call-table");
    table.id = "call-table";
    const thead = document.createElement("thead");
    const tr = document.createElement("tr");
    const td = document.createElement("td");
    td.id = "blank-cell";


    tr.append(td);

    // Now insert one <th> per planet
    for (const planet of BirthChart.planets) {
      const th = document.createElement("th");
      th.textContent = planet;
      th.dataset.planet = planet;
      th.classList.add(planet);
      th.setAttribute("scope", "col");
      tr.append(th);
    }

    tr.append(td.cloneNode());

    thead.append(tr);
    table.append(thead);

    // Now do the rows (Nested loops is OK here because very small data set)
    const tbody = document.createElement("tbody");
    for (const sign of BirthChart.signs) {
      const row = document.createElement("tr");
      const rowHeader = document.createElement("th");
      rowHeader.textContent = sign;
      rowHeader.dataset.sign = sign;
      rowHeader.classList.add(sign);
      row.append(rowHeader);
      for (const planet of BirthChart.planets) {
        const cell = document.createElement("td");
        cell.dataset.planet = planet;
        cell.dataset.sign = sign;
        cell.classList.add(planet, sign);
        cell.textContent = "";
        row.append(cell);
      }
      row.append(rowHeader.cloneNode(true));
      tbody.append(row);
    }
    table.append(tbody);

    const tfoot = document.createElement('tfoot');
    tfoot.append(tr.cloneNode(true))
    table.append(tfoot);

    if (settings.features.controls) {
      // Put the call button in
      const callButton = document.createElement("button");
      callButton.textContent = "call";
      callButton.id = "call";
      callButton.classList.add("btn", "new-call");

      callButton.addEventListener("click", () => {
        this.game.pick(this.markCalled.bind(this));
        // this.game.socket.send(JSON.stringify({ type: 'call'}));
      });
      td.append(callButton);
    }

    this.gridArea.innerHTML = "";
    this.gridArea.append(table);

    if (settings.features.controls) {
      this.addControls();
    }

    if (settings.features.hoverguides) {
      this.setUpHoverGuides();
    }
    this.markCalled({ alreadyCalled: this.game.alreadyCalled });
  }

  setUpHoverGuides(
    grid = this.gridArea,
    hoverClass = this.classes.hoveringClass
  ) {
    if (!isElement(grid)) {
      throw new Error(
        `You must provide a DOM node to insert the grid in. Received ${grid}`
      );
    }

    grid.addEventListener("mouseover", (e) => {
      const oldEls = document.querySelectorAll(`.${hoverClass}`);
      for (const el of oldEls) {
        el.classList.remove(hoverClass);
      }
      if (e.target?.matches("td:not(#blank-cell)")) {
        const {
          dataset: { planet, sign },
        } = e.target;
        // console.log("p", planet, "s", sign);

        const planetCells = document.querySelectorAll(`.${planet}`);
        for (const cell of planetCells) {
          cell.classList.add(hoverClass);
        }

        const signCells = document.querySelectorAll(`.${sign}`);
        for (const cell of signCells) {
          cell.classList.add(hoverClass);
        }
      }
    });
  }

  markCalled(gameData) {
    if (gameData == null) {
      throw new Error(
        `Expected an game data in BingoGridDisplay.markCalled; instead received ${gameData} (type: ${typeof gameData})`
      );
    }
    const { alreadyCalled: called } = gameData;
    if (!called.length) {
      return;
    }
    const { gridArea: grid } = this;
    const { calledClass, lastCalledClass } = this.classes;
    const lastPick = grid.querySelector(`.${lastCalledClass}`);
    if (lastPick) {
      lastPick.classList.remove(lastCalledClass);
    }
    for (const [i, { planet, sign, callPosition }] of called.entries()) {
      const item = grid.querySelector(`.${planet}.${sign}`);
      item.textContent = callPosition;
      item.classList.add(calledClass);
      if (i === called.length - 1) {
        item.classList.add(lastCalledClass);
      }
    }
    const phrase = document.createElement("p");
    const { planet, sign } = called[called.length - 1];
    phrase.textContent =
      AstrologyBingoGameController.catchPhraseDict[planet][sign];
    this.phraseDisplay.innerHTML = "";
    this.phraseDisplay.append(phrase);
  }

  clearCalled(grid = this.gridArea) {
    const { calledClass, lastCalledClass } = this.classes;
    const markedSquares = grid.querySelectorAll(`.${calledClass}`);
    for (const square of markedSquares) {
      square.classList.remove(calledClass, lastCalledClass);
      square.innerHTML = "";
    }
  }
}

export default BingoDisplayGrid;
