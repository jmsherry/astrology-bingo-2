import AstrologyBingoGameController from "./AstrologyBingoGameController.js";
import BingoDisplayGrid from "./BingoDisplayGrid.js";

/****************************************************************
 * The DOM script for the ADMIN grid page (w/ call button, etc.)
 ****************************************************************/

const game = new AstrologyBingoGameController();
const grid = new BingoDisplayGrid({
  game,
  domNodes: {
    gridArea: document.getElementById("grid-container"),
    controls: document.getElementById("upperControls"),
    phraseDisplay: document.getElementById("phrase"),
    // upperControls: document.getElementById("upperControls"),
  },
  classes: {
    calledClass: "called",
    hoveringClass: "hover",
    lastCalledClass: "lastCalled",
  },
  options: {
    features: {
      controls: true,
      hoverguides: true,
    },
  },
});

grid.render();
