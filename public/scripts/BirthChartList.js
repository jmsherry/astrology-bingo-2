import BirthChart from "./BirthChart.js";
import { isElement } from "./utilities.js";

/****************************************************************
 * Holds a list of Birthcharts
 * Responsible for CRUD ops and persistence
 ****************************************************************/

class BirthChartList {
  list = [];
  // / CONSTRUCTOR WHEN BIRTHCHARTDATA IS AN ARRAY

  constructor(birthChartData = []) {
    if (!Array.isArray(birthChartData)) {
      throw new Error(
        `birthChartData must be an array. Received ${birthChartData} (${typeof birthChartData})`
      );
    }

    const savedRecords = JSON.parse(localStorage.getItem("players"));

    if (savedRecords) {
      for (const chart of savedRecords) {
        const newBirthChart = new BirthChart(chart);
        this.list.push(newBirthChart);
      }
    }

    for (const chart of birthChartData) {
      const newBirthChart = new BirthChart(chart);
      this.list.push(newBirthChart);
    }
    this.save();
  }

  addBirthChart(data) {
    if (data == null) {
      throw new Error(`No data provided to addBirthChart method. Instead received `);
    }
    let newBirthChart = data;
    if (!(newBirthChart instanceof BirthChart)) {
      newBirthChart = new BirthChart(data);
    }
    this.list.push(newBirthChart);
    this.save();
    return newBirthChart;
  }
  getList() {
    return this.list;
  }
  getBirthChartById(id) {
    if (typeof id !== "string" || !id)
      throw new Error("No id provided to getBirthChartById method");
    return this.list.find((birthChart) => birthChart._id === id);
  }
  getBirthChartIndexById(id) {
    if (typeof id !== "string" || !id)
      throw new Error("No id provided to getBirthChartIndexById method");
    return this.list.findIndex((birthChart) => birthChart._id === id);
  }
  deleteBirthChart(id) {
    if (id == null) throw new Error("No id provided to deleteTodo method");

    // Find
    const index = this.list.findIndex(function (birthChart) {
      return birthChart._id === id;
    });

    // Remove
    this.list.splice(index, 1);
    this.save();
  }
  showBirthChart(birthChart) {
    if (typeof birthChart !== "object" || !birthChart)
      throw new Error("No birthChart provided to showBirthChart method");
    console.log("trying to show birthChart", birthChart);
  }
  render(mountNode, rendFn = () => {}) {
    if (!isElement(mountNode)) {
      throw new Error(`Mountnode must be a DOM element, received ${mountNode}`);
    }
    rendFn(mountNode, this.list);
  }
  save() {
    localStorage.setItem("players", JSON.stringify(this.list));
  }
}

export default BirthChartList;
