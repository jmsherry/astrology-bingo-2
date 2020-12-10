import BirthChart from "../classes/BirthChart.js";
import AstrologyBingoGameController from "../classes/AstrologyBingoGameController.js";
import { isElement } from "../utilities.js";

const { planets } = BirthChart;

// /****************************************************************
//  * Player list Component
//  ****************************************************************/

class PlayerListDisplay {
  constructor({ game, domNodes: { mountNode, controls }, options = {} }) {
    if (!(game instanceof AstrologyBingoGameController)) {
      throw new Error(
        `PlayerList needs a an AstrologyBingoGameController; instead received: ${game} (type: ${typeof game}, class: ${
          game?.__proto__?.constructor
        })`,
      );
    }
    this.game = game;

    if (!isElement(mountNode)) {
      throw new Error(
        `PlayerList needs an element to mount into; instead received: ${mountNode} (type: ${typeof mountNode}, class: ${
          mountNode?.__proto__?.constructor
        })`,
      );
    }
    this.mountNode = mountNode;
    this.controls = controls;

    const defaults = {
      showPickedTime: 5000,
      modalOpacity: 0.8,
      showControls: true,
      sorted: false,
      showingResults: false,
    };
    this.options = { ...defaults, ...options };

    // Connection opened
    const { socket, alreadyCalled, reset } = this.game;
    socket.addEventListener("open", () => {
      // console.log("open from the grid");
    });

    // Listen for messages
    socket.addEventListener("message", (event) => {
      // console.log("message from the grid", event.data);
      const evt = JSON.parse(event.data);
      // console.log("evt", evt);
      switch (evt.type) {
        case "updated-state":
          if (evt.controllerId === this.game._id) {
            this.render();
          }
          break;
        default:
          console.log(`received a ${event.data.type}`);
      }
    });

    // Listen for errors
    socket.addEventListener("error", (err) => {
      // console.log("error from the grid", err);
    });

    let modalElem = document.getElementById("pick-modal");

    if (!modalElem) {
      modalElem = document.createElement("div");
      modalElem.classList.add("modal", "pick-modal");
      modalElem.id = "pick-modal";
      modalElem.innerHTML = `
            <div class="modal-footer">
              <a href="#!" class="modal-close waves-effect waves-green btn-flat">Close</a>
            </div>
            <div class="modal-content"></div>
            `;
      document.body.append(modalElem);
    }
    const modalOptions = {
      opacity: this.options.modalOpacity,
    };
    // // console.log("sdfsdfsdfsd", M.Modal.init(modalElem, modalOptions));
    this.modal = M.Modal.init(modalElem, modalOptions);
  }

  render({ mountNode = null, renderFn, options = {}, data } = {}) {
    if (!mountNode) {
      mountNode = this.mountNode;
    }
    mountNode.innerHTML = "";
    if (renderFn && typeof renderFn === "function") {
      mountNode.innerHTML = renderFn(this.game);
      return;
    }

    const localOptions = { ...this.options, ...options };

    if (localOptions.showControls) {
      if (!this.controls) {
        const controls = document.createElement("div");
        controls.id = "controls";
        controls.classList.add("controls");
        this.controls = controls;
      }
      if (!this.controls.querySelector("#showResults")) {
        const showResults = document.createElement("button");
        showResults.classList.add("waves-effect", "waves-light", "btn");
        showResults.id = "showResults";
        showResults.textContent = "Show Results";
        showResults.addEventListener("click", () => {
          this.options.showingResults = !this.options.showingResults;
          showResults.textContent = this.options.showingResults
            ? "Hide Results"
            : "Show Results";
          this.toggleResultVisibility();
        });
        this.controls.append(showResults);
      }
      mountNode.append(this.controls);
    }

    const {
      game: { players },
      // game,
    } = this;
    if (!players.length) {
      mountNode.innerHTML = "<p>No players yet...</p>";
    } else {
      const list = document.createElement("ol");
      list.classList.add("list-group");
      console.table(this.game.alreadyCalled);
      for (const player of data || players) {
        console.table(player, ["sign", "value"]);
        const { name, value = 7, img, _id: id } = player;
        const li = document.createElement("li");
        li.classList.add("list-group-item");
        const title = document.createElement("h2");
        title.textContent = name;
        title.classList.add("owner");
        li.append(title);

        // Icons display
        const iconsDisplay = document.createElement("ul");
        iconsDisplay.classList.add("icons-list");
        for (const planet of planets) {
          const iconListItem = document.createElement("li");
          iconListItem.classList.add(
            "icon-item",
            `icon-${planet.toLowerCase()}`,
          );
          const { icon: path, called } = player[planet];
          const icon = document.createElementNS(
            "http://www.w3.org/2000/svg",
            "svg",
          );
          icon.setAttribute("viewBox", "0 0 300 300");
          icon.setAttribute("width", "50");
          icon.classList.add("sign", "icon", "chart");
          if (called && this.options.showingResults) {
            iconListItem.classList.add("called"); // to mark as called
          }
          icon.innerHTML = path;
          iconListItem.append(icon);
          iconsDisplay.append(iconListItem);
        }
        li.append(iconsDisplay);

        const controls = document.createElement("div");
        controls.classList.add("cip-controls");

        // Delete Button
        const delbtn = document.createElement("button");
        delbtn.textContent = "Delete";
        delbtn.classList.add(
          "waves-effect",
          "waves-light",
          "btn",
          "red",
          "delete-chart",
        );
        delbtn.addEventListener("click", (e) => {
          this.game.removePlayer(player);
          this.render();
        });
        controls.append(delbtn);

        // View Chart Button
        const viewChartBtn = document.createElement("button");
        viewChartBtn.textContent = "View Chart";
        viewChartBtn.classList.add(
          "waves-effect",
          "waves-light",
          "btn",
          "view-chart",
        );
        viewChartBtn.addEventListener("click", (e) => {
          // console.log("player", player);
          const contentDiv = this.modal.el.querySelector(".modal-content");
          contentDiv.innerHTML = "";
          const heading = document.createElement("h2");
          heading.classList.add("chart-heading");
          heading.textContent = `${player.ownerName}`;
          contentDiv.append(heading);
          contentDiv.append(player.generateChartImage());
          this.modal.open();
        });
        controls.append(viewChartBtn);

        li.append(controls);
        list.append(li);
      }

      mountNode.append(list);
    }
  }

  toggleResultVisibility() {
    // console.log("toggleResultVisibility");
    let arg = undefined;
    if (this.options.showingResults) {
      const sorted = this.game.players.sort((p1, p2) => {
        return p1.score - p2.score;
      });
      arg = { data: sorted };
    }
    this.render(arg);
  }
}

export default PlayerListDisplay;

// import BirthChart from "./BirthChart.js";
// // import BirthChartList from "./BirthChartList.js";
// import AstrologyBingoGameController from "./AstrologyBingoGameController.js";

// const { planets } = BirthChart;

// // Components
// const noContentDisplay = document.createElement("p");
// noContentDisplay.textContent = "No players yet...";

// // Modals

// // Create application instance

// const game = new AstrologyBingoGameController();
// // console.log("game", game);

// const listNode = document.getElementById("birthchart-list-container");
// // console.log("listNode", listNode);

// const htmlRender = (mount, players) => {
//   mount.innerHTML = "";
//   if (!players.length) {
//     mount.append(noContentDisplay.cloneNode(true));
//     return;
//   }
//   // console.log("players", players);
//   const list = document.createElement("ol");
//   list.id = "birthchart-list";
//   list.classList.add("list-group", "birthchart-list");
//   for (const player of players) {
//     // Create the item for each player
//     const { name, value = 7, img, _id: id } = player;
//     const li = document.createElement("li");
//     li.classList.add("list-group-item");
//     const title = document.createElement("h2");
//     title.textContent = name;
//     title.classList.add("owner");
//     li.append(title);

//     // Progress Bar
//     // const progress = document.createElement("progress");
//     // progress.setAttribute("max", planets.length);
//     // progress.setAttribute("value", value);
//     // li.append(progress);

//     // Icons display
//     const iconsDisplay = document.createElement("ul");
//     iconsDisplay.classList.add("icons-list");
//     for (const planet of planets) {
//       const iconListItem = document.createElement("li");
//       iconListItem.classList.add("icon-item");
//       const { icon: path } = player[planet];
//       const icon = document.createElementNS(
//         "http://www.w3.org/2000/svg",
//         "svg"
//       );
//       icon.setAttribute("viewBox", "0 0 250 250");
//       icon.setAttribute("width", "50");
//       icon.classList.add("sign", "icon", "chart");
//       icon.innerHTML = path;
//       iconListItem.append(icon);
//       iconsDisplay.append(iconListItem);
//     }
//     li.append(iconsDisplay);

//     const controls = document.createElement("div");
//     controls.classList.add("cip-controls");

//     // Delete Button
//     const delbtn = document.createElement("button");
//     delbtn.textContent = "Delete";
//     delbtn.classList.add(
//       "waves-effect",
//       "waves-light",
//       "btn",
//       "red",
//       "delete-chart"
//     );
//     delbtn.addEventListener("click", (e) => {
//       // implement delete/hide
//     });
//     controls.append(delbtn);

//     // View Chart Button
//     const viewChartBtn = document.createElement("button");
//     viewChartBtn.textContent = "View Chart";
//     viewChartBtn.classList.add(
//       "waves-effect",
//       "waves-light",
//       "btn",
//       "view-chart"
//     );
//     viewChartBtn.addEventListener("click", (e) => {
//       // console.log("player", player);
//       // modalContentArea.innerHTML = player.img;
//       // modalInstance.open();
//     });
//     controls.append(viewChartBtn);

//     li.append(controls);
//     list.append(li);
//   }
//   mount.append(list);
// };
// game.render(listNode, htmlRender);
