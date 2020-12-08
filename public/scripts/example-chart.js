import BirthChart from "./BirthChart.js";
import BirthChartList from "./BirthChartList.js";

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
  name: "Alice ",
  time: "1800",
};

///render chart
const example = new BirthChart(alice);
console.log("example birthChart", example);
const exampleMount = document.getElementById("exampleMount");
BirthChart.renderChart(example, exampleMount);

//remove buttons

