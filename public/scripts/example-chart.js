import BirthChart from "./BirthChart.js";
import Player from "./Player.js";

const alice = {
  Ascendant: "Scorpio",
  Chiron: "Cancer",
  Descendant: "Taurus",
  Jupiter: "Cancer",
  Mars: "Aries",
  Mercury: "Cancer",
  Moon: "Sagittarius",
  Neptune: "Capricorn",
  Pluto: "Scorpio",
  Saturn: "Capricorn",
  Sun: "Cancer",
  Uranus: "Capricorn",
  Venus: "Gemini",
  birthday: "1990/07/04",
  latitude: 53.4083714,
  longitude: -2.9915726,
  ownerName: "Alice Day",
  time: "1800",
};

///render chart
function renderChart(player, mount = document.getElementById("exampleMount")) {
  if(!(player instanceof Player)) {
    throw new Error(`player supplied to renderChart must be an instance of Player; instead received ${player} (type: ${typeof player} of class ${player?.__proto__?.constructor})`); 
  }
  player.renderChart({ mountNode: mount });
  setTimeout(() => {
    mount.scrollIntoView({
      behavior: "smooth",
    });
  }, 250);
}
const player = new Player({ chartData: alice });
console.log("example birthChart", player);
renderChart(player);

//remove buttons

