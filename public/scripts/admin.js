import AstrologyBingoGameController from "./classes/AstrologyBingoGameController.js";
import celebs from "../celebs.js";

const game = new AstrologyBingoGameController();


const mountNode = document.getElementById("admin-container");

// Player count 
const playerCount = document.getElementById("player-count")
playerCount.textContent =
` ${game.players.length} / ${AstrologyBingoGameController.MAX_PLAYERS} players`;

console.log("game.players.length", game.players.length)

// Reset game button
const resetBtn = document.getElementById("reset-game");

resetBtn.addEventListener("click", () => {

    const confirmed = window.confirm(
        "Reset the game?\n\nAll called squares will be cleared."
    );

    if (!confirmed) {
        return;
    }

    game.reset();

});

// Delete players button
const deletePlayersBtn = document.getElementById("delete-players");
deletePlayersBtn.addEventListener("click", () => {

    const confirmed = window.confirm(
        "Delete ALL players?\n\nThis cannot be undone."
    );

    if (!confirmed) {
        return;
    }

    game.deleteAllPlayers();

});

// Import celebs 
const importCelebsBtn = document.getElementById("import-celebs")
importCelebsBtn.addEventListener("click", () => {
    const added =
        game.importCelebrities(celebs);

    alert(`${added} celebrities imported.`);

});