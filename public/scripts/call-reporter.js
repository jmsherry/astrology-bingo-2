import { connectToWebSocket } from "./utilities.js";
const display = document.getElementById("display");
const calledList = document.getElementById("called-list");

let called = [];

function setup() {
  const calledRecord = localStorage.getItem("called");
  console.log('setting up', calledRecord);
  if (calledRecord) {
    called = JSON.parse(calledRecord);
    console.log('set record', called);
    updateUI(called[called.length - 1]);
  }
}

function showPick({ sign, planet }) {
  display.innerHTML = "";
  const heading = document.createElement("h2");
  heading.textContent = `${planet} in ${sign}`;
  display.append(heading);
}

function updateCalledList() {
  const previous  = called[called.length - 2];
  if(!previous) return;
  const { sign, planet } = previous;
  const li = document.createElement("li");
  li.textContent = `${planet} in ${sign}`;
  calledList.append(li);
}

function resetUI() {
  display.innerHTML = "<h2>Welcome to Astrology Bingo!</h2>";
  calledList.innerHTML = "";
}

function updateUI(item) {
  showPick(item);
  updateCalledList();
}

function messageHandler(event) {
  const { data: message } = event;
  console.dir(message);
  console.log("Message from server ", message);
  switch (message) {
    case "reset":
      resetUI();
      break;
    default:
      const item = JSON.parse(message);
      called.push(item);
      updateUI(item);
  }
}

// Running Order
setup();
const socket = connectToWebSocket(undefined, messageHandler);
