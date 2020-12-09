import { uuidv4 } from '../utilities.js';
import BirthChart from './BirthChart.js';

const { planets } = BirthChart;

/****************************************************************
 * Constructor for a player
 * Name, birthchart & id
 ****************************************************************/

class Player extends BirthChart {
  constructor({chartData, _id=uuidv4() }) {

    super(chartData)
    this._id = _id;
    this.created = Date.now();

    const { ownerName:name } = chartData;

    if(typeof name !== 'string' ) {
      throw new Error(`Player name must be a string; instead received ${name} (type: ${typeof name})`);
    } else if (typeof name === 'string' && !name.length) {
      throw new Error(`Player name is required; received ${name} (length: ${name.length})`);
    }

    this.name = name;

    if((chartData instanceof BirthChart)) {
      this.chart = chartData;
    } else {
      this.chart = new BirthChart(chartData);
    }

    this.score = 0;
    this.complete = false;

  }

  // args: {planet, sign}
  markCalled(callItem) {
    super.markCalled(callItem);

    for(const planet of planets) {
      if(this[planet].called) {
        this.score += 1;
      }
    }

    if(this.score === planets.length) {
      this.complete = true;
    }

  }

}

export default Player;