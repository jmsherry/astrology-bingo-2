import AstrologyBingoGameController from "./classes/AstrologyBingoGameController.js";
import CurrentCall from "./components/CurrentCall.js";

/****************************************************************
 * The DOM script for the public grid page
 ****************************************************************/

const call = new CurrentCall({
  game: new AstrologyBingoGameController(),
  domNodes: {
    callDisplay: document.getElementById("call-container"),
  },
});

call.render();
