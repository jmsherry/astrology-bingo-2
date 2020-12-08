import { makeCall } from "./utilities.js";
import { GEO_API_KEY, TIME_API_KEY } from "./config.js";
import BirthChart from "./BirthChart.js";
import BirthChartList from "./BirthChartList.js";

const birthChartList = new BirthChartList();

// Utility

// UI elements
const timeInput = document.getElementById("tob");
const dateInput = document.getElementById("dob");
const loc1Input = document.getElementById("location1");
const loc2Input = document.getElementById("location2");
const geoMountLat = document.getElementById("location1");
const geoMountLong = document.getElementById("location2");
const timeMount = document.getElementById("utcoffset");

const datePickerElems = document.querySelectorAll(".datepicker");
const timePickerElems = document.querySelectorAll(".timepicker");

const personalDataForm = document.getElementById("addDataForm");
const locationForm = document.getElementById("location-form");
const utcButton = document.getElementById("find-utc");

const chartMountNode = document.getElementById("target");

// UI settings
// Date Pickers
const datePickerOptions = {
  format: "yyyymmdd",
  autoClose: true,
  yearRange: [1930, 2020],
  // defaultDate: "19800101",

  // onOpenEnd: function(){....}
};

M.Datepicker.init(datePickerElems, datePickerOptions);

// Time Pickers
const timePickerOptions = {
  twelveHour: false,
  autoClose: true,
};

M.Timepicker.init(timePickerElems, timePickerOptions);

// Forms
locationForm.addEventListener("submit", (e) => {
  e.preventDefault(locationForm);
  const FD = new FormData(locationForm);
  const data = Object.fromEntries(FD);
  console.log("data", data);

  getGeo(data);
});

async function getGeo({ placename }) {
  console.log("placename", placename);
  const GEO_API_URL = `https://maps.googleapis.com/maps/api/geocode/json?address=${placename}&key=${GEO_API_KEY}`;
  console.log(GEO_API_URL);

  const { results } = await makeCall(GEO_API_URL);
  console.log("results", results);

  // Show a list or warn no match and reset
  if (!results.length) {
    alert(`${placename} Not found`);
    return;
  }

  const {
    geometry: {
      location: { lat, lng },
    },
  } = results[0];

  geoMountLat.value = lat;
  geoMountLong.value = lng;
  locationForm.reset();
  locationForm.setAttribute("disabled", "disabled");
}

/****************** SECOND FORM *************************/
utcButton.addEventListener("click", function (e) {
  e.preventDefault();
  
  const inputtedTime = timeInput.value;
  console.log("inputtedTime", inputtedTime);
  const timeToGo = inputtedTime.replace(":", "");
  timeInput.value = timeToGo;

  const inputtedDate = dateInput.value;
  console.log("inputtedDate", inputtedDate);
  const inputtedloc1 = loc1Input.value;
  const inputtedloc2 = loc2Input.value;

  const year = inputtedDate.slice(0, 4);
  console.log("year", year);

  const month = inputtedDate.slice(4, 6);
  console.log("month", month);

  const day = inputtedDate.slice(6, 8);
  console.log("day", day);

  const dateTime = `${year}-${month}-${day} ${inputtedTime}:00`;
  console.log("dateTime", dateTime);

  const timestamp = Date.parse(dateTime) / 1000;
  console.log("timestamp", timestamp);

  const fetchURLUTC = `https://maps.googleapis.com/maps/api/timezone/json?location=${inputtedloc1},${inputtedloc2}&timestamp=${timestamp}&key=${TIME_API_KEY}`;
  console.log("fetchURLUTC", fetchURLUTC);
  getUTC(fetchURLUTC, renderUTC);
});

personalDataForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const FD = new FormData(e.target);
  const data = Object.fromEntries(FD);
  console.log("data", data);

  const fetchURL = createBirthChartURL(data);
  getBirthChart(fetchURL, renderChart, data);
  personalDataForm.reset();
  personalDataForm.setAttribute("disabled", "disabled");
});

function renderChart(chart, mount = chartMountNode) {
  if (!chart) {
    mount.innerHTML = "<p>No chart</p>"; // can't see how that would happen
  } else {
    BirthChart.renderChart(chart, mount); // NEED TO ADD PLAYER TO GAME, not statically generate
  }
  setTimeout(() => {
    mount.scrollIntoView({
      behavior: "smooth",
    });
  }, 250);
}

function createBirthChartURL({
  date: dob,
  time: tob,
  location1,
  location2,
  utcoffset,
}) {
  const year = Number(dob.slice(0, 4));
  console.log("year", year);
  const month = Number(dob.slice(4, 6));
  console.log("month", month);
  const jsMonth = month - 1;
  const date = Number(dob.slice(6, 8));
  console.log("date", date);
  const [hours, minutes] = tob.split(":");
  console.log("hours", hours, "minutes", minutes);
  const d = new Date(year, jsMonth, date, Number(hours), Number(minutes));
  const timestamp = d.getTime();


  const params = new URLSearchParams();
  params.append("location", `${location1},${location2}`);
  params.append("timestamp", timestamp);
  params.append("key", TIME_API_KEY);

  console.log("params", params);


  const fetchURL = `http://localhost:8000/formatData?date=${dob}&time=${tob}&location1=${location1}&location2=${location2}&utc=${utcoffset}&action=`;
  console.log("fetchURL", fetchURL);
  return fetchURL;
}

async function getBirthChart(fetchURL = "", renderFn, { firstname, lastname }) {
  try {
    const response = await fetch(fetchURL); // because of weird python formatting
    //handle bad responses
    if (!response.ok) throw response;
    let chartData = await response.json();
    chartData = JSON.parse(chartData); // twice because stupid python
    console.log("chartData", chartData);
    chartData.Ascendant = chartData.Asc;
    chartData.Descendant = BirthChart.descDict[chartData.Ascendant];
    delete chartData.Asc;

    chartData.ownerName = `${firstname} ${lastname}`;

    console.log("chartData", chartData);
    const newBC = birthChartList.addBirthChart(chartData);
    renderFn(newBC);
  } catch (err) {
    console.log(err);
  }
}

// function getUTCURL(lat, long, TIME_API_KEY, timestamp) {
//   const TIME_API_URL = `https://maps.googleapis.com/maps/api/timezone/json?location=${lat},${long}&timestamp=${timestamp}&key=${TIME_API_KEY}`;
//   console.log(TIME_API_URL);
//   return TIME_API_URL;
// }

function renderUTC(report, mount = timeMount) {
  if (!report) {
    timeMount.innerHTML = "No UTC report";
    return;
  }
  const offset = (report.rawOffset += report.dstOffset);
  console.log("offset", offset);
  const offsetUTC = Math.floor(offset / 60 / 60);
  console.log("offsetUTC", offsetUTC);
  timeMount.value = offsetUTC;
}

async function getUTC(currentURL, handler = renderUTC) {
  try {
    const response = await fetch(currentURL);

    if (!response.ok) throw response;

    const data = await response.json();
    handler(data);
  } catch (err) {
    console.log(err);
  }
}
