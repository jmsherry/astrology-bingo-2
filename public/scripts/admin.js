import AstrologyBingoGameController from "./classes/AstrologyBingoGameController.js";
import celebs from "../celebs.js";

const game = new AstrologyBingoGameController();


const mountNode = document.getElementById("admin-container");

// Player count 
const playerCount = document.getElementById("player-count")
playerCount.textContent =
` ${game.players.length} / ${AstrologyBingoGameController.MAX_PLAYERS} players`;


// Call count 
const callCount = document.getElementById("call-count")
console.log("game", game)
callCount.textContent =
` ${game.alreadyCalled.length} / 144`;


// Remaining call count
const remainingCallCount = document.getElementById("remaining-call-count");

remainingCallCount.textContent =
`${game.potentialCallList.length}`;


// Reset game button
const resetBtn = document.getElementById("reset-game");
resetBtn.classList.add(
    "btn",
    "waves-effect",
    "waves-light",
    "trans-btn",
  );
resetBtn.addEventListener("click", async () => {
  

    const confirmed = await showModalConfirm(
        "Reset the game?\n\nAll calls will be cleared."
    );

    if (!confirmed) return;

    game.reset();
    await showModalResult(
        `Game has been reset`
    );


});

// Delete players button
const deletePlayersBtn = document.getElementById("delete-players");
deletePlayersBtn.classList.add(
    "btn",
    "danger",
  );
deletePlayersBtn.addEventListener("click", async () => {

    const confirmed = await showModalConfirm(
        "Delete ALL players?\n\nThis cannot be undone."
    );

    if (!confirmed) {
        return;
    }

    game.deleteAllPlayers();
    await showModalResult(
        `All players deleted.`
    );

});

// Import celebs 

const importCelebsBtn = document.getElementById("import-celebs");
importCelebsBtn.classList.add(
    "btn",
    "waves-effect",
    "waves-light",
    "trans-btn",
  );
importCelebsBtn.addEventListener("click", async () => {


const max = celebs.length;

const number = await showModalNumberInput(
    `There are ${max} celebs available. How many would you like to add? NB. duplicates won't be added.`,
    25,
    max
);

if (!number) return;

const added = game.importCelebrities(celebs, number);

await showModalResult(
    `Added ${added} celebs.
    
There are now ${game.players.length} players.`
);
});

export const showModalConfirm = (message) => {
    return new Promise((resolve) => {
        const modal = document.getElementById("confirm-modal");
        const msg = document.getElementById("confirm-message");
        const yes = document.getElementById("confirm-yes");
        const no = document.getElementById("confirm-no");

        msg.textContent = message;
        modal.classList.remove("hidden");

        const cleanup = (result) => {
            modal.classList.add("hidden");
            yes.onclick = null;
            no.onclick = null;
            resolve(result);
        };

        yes.onclick = () => cleanup(true);
        no.onclick = () => cleanup(false);
    });
};

const showModalResult = (message) => {
    const modal = document.getElementById("confirm-modal");
    const msg = document.getElementById("confirm-message");
    const yes = document.getElementById("confirm-yes");
    const no = document.getElementById("confirm-no");

    msg.textContent = message;

    yes.textContent = "OK";
    no.style.display = "none";

    modal.classList.remove("hidden");

    return new Promise((resolve) => {
        yes.onclick = () => {
            modal.classList.add("hidden");
            yes.onclick = null;
            no.onclick = null;

            // reset button state
            yes.textContent = "Confirm";
            no.style.display = "";

            resolve();
        };
    });
}

export const showModalNumberInput = (message, defaultValue = 25, max = null) => {
    return new Promise((resolve) => {

        const modal = document.getElementById("confirm-modal");
        const msg = document.getElementById("confirm-message");
        const yes = document.getElementById("confirm-yes");
        const no = document.getElementById("confirm-no");

        // inject input UI
        msg.innerHTML = `
            <p>${message}</p>
            <input 
                id="number-input" 
                type="number" 
                min="1" 
                ${max ? `max="${max}"` : ""} 
                value="${defaultValue}"
                style="margin-top:10px;width:100%;padding:8px;"
            />
        `;

        modal.classList.remove("hidden");

        const input = document.getElementById("number-input");
        input.focus();

        const cleanup = (value) => {
            modal.classList.add("hidden");

            yes.onclick = null;
            no.onclick = null;

            // reset button state
            yes.textContent = "Confirm";
            no.style.display = "";

            msg.textContent = "";

            resolve(value);
        };

        yes.onclick = () => {
            const val = parseInt(input.value, 10);

            if (Number.isNaN(val) || val < 1) {
                alert("Please enter a valid number");
                return;
            }

            cleanup(val);
        };

        no.onclick = () => cleanup(null);
    });
};