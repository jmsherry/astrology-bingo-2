/****************************************************************************
 * A component that sjows the current call
 ***************************************************************************/

class CurrentCall {
  constructor({ game, domNodes: { callDisplay }, options }) {
    this.game = game;
    this.callDisplay = callDisplay;

    // Connection opened
    const { socket, alreadyCalled, reset } = this.game;
    socket.addEventListener("open", () => {
      console.log("open from the current call");
    });

    // Listen for messages
    socket.addEventListener("message", (event) => {
      console.log("currentCall received message", event.data);
      const evt = JSON.parse(event.data);
      console.log("evt", evt);
      switch (evt.type) {
        case "updated-state":
          if (evt.controllerId === this.game._id) {
            console.log(`call for controller ${evt.controllerId} re-endering`);
            this.render();
          }
          break;
        default:
          console.log(`call for controller ${evt.controllerId} doing nothing`);
      }
    });

    // Listen for errors
    socket.addEventListener("error", (err) => {
      console.log("error from the current call", err);
    });
  }

  render(overrides = {}) {
    const defaults = {
      features: {
        controls: false,
        hoverguides: false,
        clickable: false,
      },
    };

    const settings = { ...defaults, ...this.settings, ...overrides };
    const { alreadyCalled } = this.game;
    // So you can provide an override from outside the class
    if (typeof settings.renderFn === "function") {
      renderFn();
      return;
    }
    console.log("rendering");
    let callElem = document.getElementById("callContainer");
    if (!alreadyCalled.length) {
      callElem.innerHTML = `No calls yet...`;
    }

    let lastCall = alreadyCalled[alreadyCalled.length - 1];

    let text =
      lastCall.planet === "Ascendant" || lastCall.planet === "Descendant"
        ? `${lastCall.sign} ${lastCall.planet}`
        : `${lastCall.planet} in ${lastCall.sign}`;

    callElem.innerHTML = `
      <h2 class="current-call">${text}</h2>
            `;
  }
}

export default CurrentCall;
