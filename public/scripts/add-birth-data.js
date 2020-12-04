import { makeCall, descDict } from "./utilities.js";
import { GEO_API_KEY, TIME_API_KEY } from "./config.js";
import BirthChart from "./BirthChart.js";
import BirthChartList from "./BirthChartList.js";

const birthChartList = new BirthChartList();

// Utility

// UI elements
const geoMountLat = document.getElementById("location1");
const geoMountLong = document.getElementById("location2");
const timeMount = document.getElementById("utc-input");``

const datePickerElems = document.querySelectorAll(".datepicker");
const timePickerElems = document.querySelectorAll(".timepicker");

const personalDataForm = document.getElementById("addDataForm");
const locationForm = document.getElementById("location-form");``

const chartMountNode = document.getElementById("target");

// UI settings
// Date Pickers
const datePickerOptions = {
  format: "yyyymmdd",
  autoClose: true,
  yearRange: [1900, 2020],

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
    throw new Error(`${placename} Not found`);
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
    BirthChart.renderChart(chart, mount);
  }
  setTimeout(() => {
    mount.scrollIntoView({
      behavior: "smooth",
    });
  }, 250)
}

function createBirthChartURL({ date: dob, time: tob, location1, location2 }) {
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

  // const fetchURL = `http://localhost:8000/formatData?date=${dob}&time=${tob}&location1=${location1}&location2=${location2}&action=`;

  const params = new URLSearchParams();
  params.append("location", `${location1},${location2}`);
  params.append("timestamp", timestamp);
  params.append("key", TIME_API_KEY);

  console.log("params", params);

  // const fetchURLUTC = `https://maps.googleapis.com/maps/api/timezone/json?${params.toString()}`;

  // const fetchURLUTC = `https://maps.googleapis.com/maps/api/timezone/json?location=${location1},${location2}&timestamp=${timestamp}&key=${TIME_API_KEY}`;
  // console.log("fetchURLUTC", fetchURLUTC);

  const fetchURL = `http://localhost:8000/formatData?date=${dob}&time=${tob}&location1=${location1}&location2=${location2}&action=`;
  console.log("fetchURL", fetchURL);
  return fetchURL;
}

async function getBirthChart(fetchURL = "", renderFn, { firstname, lastname }) {
  try {
    const response = await fetch(fetchURL); // because of weird python formatting
    //handle bad responses
    if (!response.ok) throw response;
    const chartData = JSON.parse(await response.json());
    chartData.Desc = descDict[chartData.Asc];

    chartData.name = `${firstname} ${lastname}`;

    console.log("chartData", chartData);
    const newBC = birthChartList.addBirthChart(chartData);
    renderFn(newBC);
  } catch (err) {
    console.log(err);
  }
}
