import BirthChart from "./BirthChart.js";
// import BirthChartList from "./BirthChartList.js";
import AstrologyBingoGameController from "./AstrologyBingoGameController.js";

const { planets } = BirthChart;

// Components
const noContentDisplay = document.createElement("p");
noContentDisplay.textContent = "No players yet...";

// Modals

const modalElem = document.querySelector(".modal");
const modalContentArea = modalElem.querySelector(".modal-content");
const options = {};
const modalInstance = M.Modal.init(modalElem, options);

// Create application instance

const game = new AstrologyBingoGameController();
console.log("game", game);

const listNode = document.getElementById("birthchart-list-container");
console.log("listNode", listNode);

const htmlRender = (mount, players) => {
  mount.innerHTML = "";
  if (!players.length) {
    mount.append(noContentDisplay.cloneNode(true));
    return;
  }
  console.log("players", players);
  const list = document.createElement("ol");
  list.id = "birthchart-list";
  list.classList.add("list-group", "birthchart-list");
  for (const player of players) {
    // Create the item for each player
    const { name, value = 7, img, _id: id } = player;
    const li = document.createElement("li");
    li.classList.add("list-group-item");
    const title = document.createElement("h2");
    title.textContent = name;
    title.classList.add("owner");
    li.append(title);

    // Progress Bar
    // const progress = document.createElement("progress");
    // progress.setAttribute("max", planets.length);
    // progress.setAttribute("value", value);
    // li.append(progress);

    // Icons display
    const iconsDisplay = document.createElement("ul");
    iconsDisplay.classList.add("icons-list");
    for (const planet of planets) {
      const iconListItem = document.createElement("li");
      iconListItem.classList.add("icon-item");
      const { icon: path } = player[planet];
      const icon = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "svg"
      );
      icon.setAttribute("viewBox", "0 0 250 250");
      icon.setAttribute("width", "50");
      icon.classList.add("sign", "icon", "chart");
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
      "delete-chart"
    );
    delbtn.addEventListener("click", (e) => {
      birthChartList.deleteBirthChart(id);
      birthChartList.render(listNode, htmlRender);
    });
    controls.append(delbtn);

    // View Chart Button
    const viewChartBtn = document.createElement("button");
    viewChartBtn.textContent = "View Chart";
    viewChartBtn.classList.add(
      "waves-effect",
      "waves-light",
      "btn",
      "view-chart"
    );
    viewChartBtn.addEventListener("click", (e) => {
      console.log("player", player);
      // modalContentArea.innerHTML = player.img;
      // modalInstance.open();
    });
    controls.append(viewChartBtn);

    li.append(controls);
    list.append(li);
  }
  mount.append(list);
};
game.render(listNode, htmlRender);
