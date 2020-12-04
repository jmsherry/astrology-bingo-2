// import BirthChart from './BirthChart.js';
import BirthChartList from "./BirthChartList.js";
import { planets } from "./utilities.js";

// Modals

const modalElem = document.querySelector(".modal");
const modalContentArea = modalElem.querySelector(".modal-content");
const options = {};
const modalInstance = M.Modal.init(modalElem, options);

// Create application instance

const birthChartList = new BirthChartList();
console.log("birthChartList", birthChartList);

const listNode = document.getElementById("birthchart-list-container");
console.log("listNode", listNode);
birthChartList.render(listNode, (mount, players) => {
  if (!players.length) {
    listNode.innerHTML = "<p>No players yet...</p>";
    return;
  }
  console.log("players", players);
  const list = document.createElement("ol");
  list.id = "birthchart-list";
  list.classList.add("list-group", "birthchart-list");
  for (const player of players) {
    // Create the item for each player
    const { name, value = 7, img, _id:id } = player;
    const li = document.createElement("li");
    li.classList.add("list-group-item");
    const title = document.createElement("h2");
    title.textContent = name;
    li.append(title);

    // Progress Bar
    const progress = document.createElement("progress");
    progress.setAttribute("max", planets.length);
    progress.setAttribute("value", value);
    li.append(progress);

    // Icons display
    const iconsDisplay = document.createElement('ul');
    iconsDisplay.classList.add('icons-list');
    for(const planet of planets) {
      const iconListItem = document.createElement('li');
      const planetTitle = document.createElement('h3');
      planetTitle.textContent = planet;
      iconListItem.append(planetTitle);
      const {sign, icon} = player[planet];
      const p = document.createElement('p');
      p.textContent = sign;
      iconListItem.append(p);
      iconListItem.append(icon);
    }
    li.append(iconsDisplay);

    // View Chart Button
    const viewChartBtn = document.createElement("button");
    viewChartBtn.textContent = "View Chart";
    viewChartBtn.addEventListener("click", (e) => {
      modalContentArea.innerHTML = img;
      modalInstance.open();
    });
    li.append(viewChartBtn);

    // Delete Button
    const delbtn = document.createElement("button");
    delbtn.textContent = "Delete";
    delbtn.addEventListener("click", (e) => {
      birthChartList.deleteBirthChart(id)
      li.remove();
    });
    li.append(delbtn);


    list.append(li);
  }
  mount.append(list);
});
