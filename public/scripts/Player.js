import { uuidv4 } from './utilities.js';
import BirthChart from './BirthChart.js'

/****************************************************************
 * Constructor for a player
 * Name, birthchart & id
 ****************************************************************/

class Player {
  constructor({ name, birthchart, _id=uuidv4() }) {
    this._id = _id;

    if(typeof name !== 'string' ) {
      throw new Error(`Player name must be a string; instead received ${name} (type: ${typeof name})`);
    } else if (typeof name === 'string' && name.length < 3) {
      throw new Error(`Player name must be at least 3 characters long; received ${name} (length: ${name.length})`);
    }

    this.name = name;

    if(!(birthchart instanceof BirthChart)) {
      throw new Error(`birthchart name must be a birthcart; instead received ${birthchart} (type: ${birthchart.__proto__.constructor})`);
    }
  }
}

export default Player;