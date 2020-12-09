import AstrologyBingoGameController from "./AstrologyBingoGameController.js";
import PlayerListDisplay from './PlayerListDisplay.js';

/****************************************************************
 * The DOM script for the player list
 ****************************************************************/

const game = new AstrologyBingoGameController();
console.log("game", game);

const mountNode = document.getElementById("birthchart-list-container");
console.log("mountNode", mountNode);

const playerListDisplay = new PlayerListDisplay({ game, mountNode})

playerListDisplay.render();
