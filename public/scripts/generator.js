import {
  zodiacSymbols,
  planets,
  getRandomPlanet,
  getRandomSign,
  isElement,
  catchPhraseDict,
  connectToWebSocket
} from "./utilities.js";

const calledClass = "called";
const hoveringClass = "hover";
const lastCalledClass = "lastCalled";

let potentialCallList = [];
let alreadyCalled = [];

  
const socket = connectToWebSocket();

const gridArea = document.getElementById("grid-section");

function addControls(area = gridArea) {
  const button = document.createElement("button");
  button.classList.add("btn", "danger");
  button.textContent = "Reset game";
  button.addEventListener("click", (e) => {
    clearState(clearCalled);
    socket.send('reset');
  });
  const controls = document.createElement("div");
  controls.classList.add("controls");
  controls.append(button);
  area.before(controls);
}

function renderGrid(mountNode = gridArea) {
  if (!isElement(mountNode)) {
    throw new Error(
      `You must provide a DOM node to insert the grid in. Received ${mountNode}`
    );
  }

  // Create the table parts
  const table = document.createElement("table");
  table.classList.add("call-table");
  table.id = "call-table";
  const thead = document.createElement("thead");
  const tr = document.createElement("tr");
  const td = document.createElement("td");
  td.id = "call-cell";

  // Put the call button in
  const callButton = document.createElement("button");
  callButton.textContent = "call";
  callButton.id = "call";
  callButton.classList.add("btn", "new-call");

  callButton.addEventListener("click", pick);
  td.append(callButton);
  tr.append(td);

  // Now insert one <th> per planet
  for (const planet of planets) {
    const th = document.createElement("th");
    th.textContent = planet;
    th.dataset.planet = planet;
    th.classList.add(planet);
    th.setAttribute("scope", "col");
    tr.append(th);
  }

  thead.append(tr);
  table.append(thead);

  // Now do the rows (Nested loops is OK here because very small data set)
  const tbody = document.createElement("tbody");
  for (const sign of zodiacSymbols) {
    const row = document.createElement("tr");
    const rowHeader = document.createElement("th");
    rowHeader.textContent = sign;
    rowHeader.dataset.sign = sign;
    rowHeader.classList.add(sign);
    row.append(rowHeader);
    for (const planet of planets) {
      const cell = document.createElement("td");
      cell.dataset.planet = planet;
      cell.dataset.sign = sign;
      cell.classList.add(planet, sign);
      cell.textContent = "";
      row.append(cell);

      potentialCallList.push({ planet, sign });
    }
    tbody.append(row);
  }
  table.append(tbody);

  mountNode.innerHTML = "";
  mountNode.append(table);
}

function setUpHoverGuides(grid = gridArea, hoverClass = hoveringClass) {
  if (!isElement(grid)) {
    throw new Error(
      `You must provide a DOM node to insert the grid in. Received ${mountNode}`
    );
  }

  grid.addEventListener("mouseover", (e) => {
    const oldEls = document.querySelectorAll(`.${hoverClass}`);
    for (const el of oldEls) {
      el.classList.remove(hoverClass);
    }
    if (e.target?.matches("td:not(#call-cell)")) {
      const {
        dataset: { planet, sign },
      } = e.target;
      console.log("p", planet, "s", sign);

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

function pick() {
  const planetPicked = getRandomPlanet();
  const signPicked = getRandomSign();
  console.log("p", planetPicked, "s", signPicked);
  console.log("potentalCallList", potentialCallList);

  // Find the object
  const pickedItemIndex = potentialCallList.findIndex(
    ({ sign, planet }) => sign === signPicked && planet === planetPicked
  );

  // move from 'potentialCallList' to 'alreadyCalled'
  const pickedItem = potentialCallList.splice(pickedItemIndex, 1)[0];
  pickedItem.callPosition = alreadyCalled.length + 1;
  alreadyCalled.push(pickedItem);

  // Mark the board
  markCalled();

  // Send to other page
  socket.send(JSON.stringify(pickedItem));

  // Save in case you change page
  localStorage.setItem("potentials", JSON.stringify(potentialCallList));
  localStorage.setItem("called", JSON.stringify(alreadyCalled));
}

function markCalled(called = alreadyCalled, grid = gridArea) {
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
}

function clearCalled(grid = gridArea) {
  const markedSquares = grid.querySelectorAll(`.${calledClass}`);
  for (const square of markedSquares) {
    square.classList.remove(calledClass, lastCalledClass);
    square.innerHTML = "";
  }
}

// Re-populate the arrays from localStorage
function loadState() {
  const potentialsRecord = localStorage.getItem("potentials");
  console.log("pppp", potentialsRecord);
  if (potentialsRecord) {
    potentialCallList = JSON.parse(potentialsRecord);
  }
  const calledRecord = localStorage.getItem("called");
  if (calledRecord) {
    alreadyCalled = JSON.parse(calledRecord);
  }
}

function clearState(callback) {
  for (const item of alreadyCalled) {
    console.log('before', item)
    delete item.callPosition;
    console.log('after', item);
  }
  potentialCallList = [...potentialCallList, ...alreadyCalled];
  alreadyCalled = [];
  localStorage.setItem("potentials", JSON.stringify(potentialCallList));
  localStorage.setItem("called", JSON.stringify(alreadyCalled));
  if (callback && typeof callback === "function") {
    callback();
  }
}

// Running order
loadState();
renderGrid();
markCalled();
setUpHoverGuides();
addControls();
