import { uuidv4 } from "../utilities.js";
import BirthChart from "./BirthChart.js";

const { planets } = BirthChart;

/****************************************************************
 * Constructor for a player
 * Name, birthchart & id
 ****************************************************************/

class Player extends BirthChart {
  constructor({ chartData, _id = uuidv4() }) {
    super(chartData);
    this._id = _id;
    this.created = Date.now();

    const { ownerName: name } = chartData;

    if (typeof name !== "string") {
      throw new Error(
        `Player name must be a string; instead received ${name} (type: ${typeof name})`
      );
    } else if (typeof name === "string" && !name.length) {
      throw new Error(
        `Player name is required; received ${name} (length: ${name.length})`
      );
    }

    this.name = name;
    this.score = 0;
    this.complete = false;
  }

  markCalled(callItem) {
    super.unMarkCalled(callItem);
    for (const planet of planets) {
      if(this[planet].called) {
        this.score += 1;
      }
    }
    if (this.score === 12) {
      this.complete = true;
    }
  }

  // args: {planet, sign}
  unMarkCalled() {
    super.unMarkCalled();
    this.score = 0;
    this.complete = false;
  }
}

export default Player;
