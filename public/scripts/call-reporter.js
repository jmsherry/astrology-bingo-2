import AstrologyBingoGameController from "./AstrologyBingoGameController.js";
import BingoDisplayGrid from "./BingoDisplayGrid.js";

const grid = new BingoDisplayGrid({
  game: new AstrologyBingoGameController(),
  domNodes: {
    gridArea: document.getElementById("grid-container"),
    controls: document.getElementById("controls"),
    phraseDisplay: document.getElementById("phrase"),
    // upperControls: document.getElementById("upperControls"),
  },
  classes: {
    calledClass: "called",
    hoveringClass: "hover",
    lastCalledClass: "lastCalled",
  },
});

grid.render();
