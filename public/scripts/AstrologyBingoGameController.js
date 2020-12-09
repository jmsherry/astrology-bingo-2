import BirthChart from "./BirthChart.js";
import BirthChartList from "./BirthChartList.js";
import {
  connectToWebSocket,
  deepFreeze,
  getRandomIntInclusive,
} from "./utilities.js";

/****************************************************************
 * The controller for a game
 * Hold the players, potential call list and alreadyCalled items
 ****************************************************************/

class AstrologyBingoGameController extends BirthChartList {
  static storageLabels = {
    potentialPicks: "potentials",
    alreadyCalled: "called",
    players: "players",
  };
  constructor(...args) {
    super(args);

    const potentialsData = localStorage.getItem(
      AstrologyBingoGameController.storageLabels.potentialPicks
    );
    const calledData = localStorage.getItem(
      AstrologyBingoGameController.storageLabels.alreadyCalled
    );
    const playerData = localStorage.getItem(
      AstrologyBingoGameController.storageLabels.players
    );
    const potentials = JSON.parse(potentialsData);
    const called = JSON.parse(calledData);
    const players = JSON.parse(playerData);

    if (potentials != null && Array.isArray(potentials)) {
      this.potentialCallList = potentials;
    } else {
      if (potentials != null && !Array.isArray(potentials)) {
        console.warn(
          `Corrupted data. 'potentials' should be an array, instead got ${potentials}`
        );
      }
      this.potentialCallList = [];
      for (const sign of BirthChart.signs) {
        for (const planet of BirthChart.planets) {
          this.potentialCallList.push({ planet, sign });
        }
      }
    }

    if (called != null && Array.isArray(called)) {
      this.alreadyCalled = called;
    } else {
      if (called != null && !Array.isArray(called)) {
        console.warn(
          `Corrupted data. 'called' should be an array, instead got ${called}`
        );
      }
      this.alreadyCalled = [];
    }

    if (players != null && Array.isArray(players)) {
      this.players = players;
    } else {
      if (players != null && !Array.isArray(players)) {
        console.warn(
          `Corrupted data. 'players' should be an array, instead got ${players}`
        );
      }
      this.players = [];
    }

    this.socket = connectToWebSocket(
      undefined,
      undefined,
      (event) => {
        console.log("message from the game", event.data);
        const evt = JSON.parse(event.data);
        console.log("evt", evt);

        switch (evt.type) {
          case "reset":
            this.reset(evt.cb);
            break;
          case "call":
            console.log("call from game");
            if (
              evt.item.callPosition !==
              this.alreadyCalled[this.alreadyCalled.length - 1].callPosition
            ) {
              this.pullState();
            }
            this.pick(evt.cb);
            break;
          default:
            console.log(`received a ${evt.type}`);
        }
      },
      undefined
    );

    // save
    localStorage.setItem(
      AstrologyBingoGameController.storageLabels.potentialPicks,
      JSON.stringify(this.potentialCallList)
    );
    localStorage.setItem(
      AstrologyBingoGameController.storageLabels.alreadyCalled,
      JSON.stringify(this.alreadyCalled)
    );
    localStorage.setItem(
      AstrologyBingoGameController.storageLabels.players,
      JSON.stringify(this.players)
    );
  }

  pullState() {
    const potentialsData = localStorage.getItem(
      AstrologyBingoGameController.storageLabels.potentialPicks
    );
    const calledData = localStorage.getItem(
      AstrologyBingoGameController.storageLabels.alreadyCalled
    );
    const playerData = localStorage.getItem(
      AstrologyBingoGameController.storageLabels.players
    );
    const potentials = JSON.parse(potentialsData);
    const called = JSON.parse(calledData);
    const players = JSON.parse(playerData);

    if (potentials != null && Array.isArray(potentials)) {
      this.potentialCallList = potentials;
    } else {
      if (potentials != null && !Array.isArray(potentials)) {
        console.warn(
          `Corrupted data. 'potentials' should be an array, instead got ${potentials}`
        );
      }
    }

    if (called != null && Array.isArray(called)) {
      this.alreadyCalled = called;
    } else {
      if (called != null && !Array.isArray(called)) {
        console.warn(
          `Corrupted data. 'called' should be an array, instead got ${called}`
        );
      }
    }

    if (players != null && Array.isArray(players)) {
      this.players = players;
    } else {
      if (players != null && !Array.isArray(players)) {
        console.warn(
          `Corrupted data. 'players' should be an array, instead got ${players}`
        );
      }
    }
  }

  reset(cb = () => {}) {
    if (typeof cb !== "function") {
      throw new Error(
        `Expected a callback function fot BingoGame.reset; instead received ${cb} (type: ${typeof cb})`
      );
    }
    for (const item of this.alreadyCalled) {
      delete item.callPosition;
    }
    this.potentialCallList = [...this.potentialCallList, ...this.alreadyCalled];
    this.alreadyCalled = [];
    localStorage.setItem(
      AstrologyBingoGameController.storageLabels.potentialPicks,
      JSON.stringify(this.potentialCallList)
    );
    localStorage.setItem(
      AstrologyBingoGameController.storageLabels.alreadyCalled,
      JSON.stringify(this.alreadyCalled)
    );

    cb();
  }

  pick(cb = () => {}) {
    if (typeof cb !== "function") {
      throw new Error(
        `Expected a callback function for AstrologyBingoGameController.pick; instead received ${cb} (type: ${typeof cb})`
      );
    }
    const planetPicked = AstrologyBingoGameController.getRandomPlanet();
    const signPicked = AstrologyBingoGameController.getRandomSign();

    // Find the object
    const pickedItemIndex = this.potentialCallList.findIndex(
      ({ sign, planet }) => sign === signPicked && planet === planetPicked
    );

    // move from 'potentialCallList' to 'alreadyCalled'
    const pickedItem = this.potentialCallList.splice(pickedItemIndex, 1)[0];
    pickedItem.callPosition = this.alreadyCalled.length + 1;
    this.alreadyCalled.push(pickedItem);

    // Save in case you change page
    localStorage.setItem(
      AstrologyBingoGameController.storageLabels.potentialPicks,
      JSON.stringify(this.potentialCallList)
    );
    localStorage.setItem(
      AstrologyBingoGameController.storageLabels.alreadyCalled,
      JSON.stringify(this.alreadyCalled)
    );

    // Send to other page
    this.socket.send(JSON.stringify({ type: "call", item: pickedItem }));

    cb(this);
  }

  static getCatchPhrase(planet, sign) {
    if (typeof planet !== "string") {
      throw new Error(
        `Planet supplied to getCatchPhrase must be a string. Received ${planet} (type: ${planet})`
      );
    }

    if (typeof sign !== "string") {
      throw new Error(
        `Sign supplied to getCatchPhrase must be a string. Received ${sign} (type: ${sign})`
      );
    }

    const { signs, planets } = BirthChart;

    if (!planets.includes(planet)) {
      throw new Error(
        `Planet supplied to getCatchPhrase must be a recognised planet (One of ${planets.join(
          ", "
        )}). Received ${planet}`
      );
    }

    if (!signs.includes(sign)) {
      throw new Error(
        `Planet supplied to getCatchPhrase must be a recognised sign (One of ${signs.join(
          ", "
        )}). Received ${sign}`
      );
    }

    return this.catchPhraseDict[planet][sign];
  }

  save() {
    super.save();
  }

  static getRandomPlanet() {
    const Rn = getRandomIntInclusive(0, BirthChart.planets.length - 1);
    let planetToCall = BirthChart.planets[Rn];
    // console.log("planetToCall", planetToCall);
    return planetToCall;
  }

  static getRandomSign() {
    const Rn = getRandomIntInclusive(0, BirthChart.signs.length - 1);
    let signToCall = BirthChart.signs[Rn];
    // console.log("signToCall", signToCall);
    return signToCall;
  }

  static catchPhraseDict = deepFreeze({
    Sun: {
      Aries: "A little bit scaries, Sun in Aries",
      Taurus: "Set meal for one Taurus Sun",
      Gemini: "Who even am I, Sun in Gemini",
      Cancer: "You ok hun? Cancer sun",
      Leo: "All about me-o, Sun in Leo",
      Virgo: "Marie Kondo Sun in Virgo",
      Libra: "Eenie Meanie Miney Moe - Libra Sun",
      Scorpio: "Where’s my gun, Scorpio sun",
      Sagittarius: "A bit precarious, Sun in Sagittarius",
      Capricorn: "No time for fun, Capricorn Sun",
      Aquarius: "I’m so random, Aquarius Sun",
      Pisces: "Cries when they’ve won, Pisces Sun",
    },
    Moon: {
      Aries: "Fighting by noon, Aries Moon",
      Taurus: "Nutella with spoon, Taurus Moon",
      Gemini: "Spoke to soon, Gemini Moon",
      Cancer: "Cosy cocoon, Cancer Moon",
      Leo: "Dine at Dishoom, Leo Moon",
      Virgo: "Clean up your room, Virgo Moon",
      Libra: "Takes long to groom, Libra Moon",
      Scorpio: "Orlando Bloom, Scorpio Moon",
      Sagittarius: "Travels in June, Sagittarius Moon",
      Capricorn: "Swampy lagoon, Capricorn Moon",
      Aquarius: "A bit of a loon, Aquarius Moon",
      Pisces: "Humming a tune, Pisces Moon",
    },
    Ascendant: {
      Aries: "1st amendment, Aries Ascendant",
      Taurus: "Loves pie and we don&#39;t mean Pythagorus, Ascendant in Taurus",
      Gemini: "Personality will Multiply, Ascendent in Gemini",
      Cancer: "Fiercely independent, Leo Ascendant",
      Leo: "Fiercely independent, Leo Ascendant",
      Virgo: "Work commitment, Virgo Ascendant",
      Libra: "Balancing Act, Libra Ascendant",
      Scorpio: "Moody Swamp, Scorpio Ascendant",
      Sagittarius: "I need to leave the country, Sagittarius Ascendant",
      Capricorn: "Let me speak to the manager, Capricorn Ascendant",
      Aquarius: "Feed the people, Aquarius Ascendant",
      Pisces: "Finding Nemo Pisces Ascendant",
    },
    Mercury: {
      Aries: "Things might get hairy, Mercury in Aries",
      Taurus: "No I’ll do it, but after my nap Taurus Mercury",
      Gemini: "Chatty Cathy, Gemini Mercury",
      Cancer: "Taking it personally, Cancer in Mercury",
      Leo: "Sandra Bullock, Leo in Mercury",
      Virgo: "The thinker who likes to tinker, Virgo Mercury",
      Libra: "Queen of Sheeba, Mercury Libra",
      Scorpio: "They’ll see through your perjury, Scorpio Mercury",
      Sagittarius: "Gorgeous &amp; Gregarious, Mercury in Sagittarius",
      Capricorn: "Thorough to the bone, Mercury Capricorn",
      Aquarius: "By the way, you will bore us, Mercury Aquarius",
      Pisces: "Can you repeat the question? Pisces Mercury",
    },
    Venus: {
      Aries: "Beunos Aries, Venus Aries",
      Taurus: "Stable as an ox’es knees its, Taurus Venus",
      Gemini: "Relationship genius, Gemini Venus",
      Cancer: "Deep Sea diver in the ocean of love, Venus Cancer",
      Leo: "Bossy Bottom, Venus Leo",
      Virgo: "Suck on my toe Venus Virgo",
      Libra: "Your cousins a zeebra Venus Libra",
      Scorpio: "Love you so much I’ll kill you Scorpio Venus",
      Sagittarius: "New phone who dis? Venus Sagittarius",
      Capricorn: "Who’s got the horn? Venus Capricorn",
      Aquarius: "That’s a big penis, Aquarius Venus",
      Pisces: "The Fish of your dreams Pisces Venus",
    },
    Mars: {
      Aries: "Raising the bars, Aries in Mars",
      Taurus: "Expensive cars, Taurus Mars",
      Gemini: "Poke you in the eye, Mars in Gemini",
      Cancer: "Spitting some lonely bars, Cancer in Mars",
      Leo: "Wannabee Superstars, Leo Mars",
      Virgo: "Put things in jars, Virgo Mars",
      Libra: "Makeup from NARS, Libra Mars",
      Scorpio: "You’ll end up with scars, Scorpio Mars",
      Sagittarius: "Spanish Guitars, Sagittarius Mars",
      Capricorn: "Can afford Cigars, Capricorn Mars",
      Aquarius: "Kooky bras, Aquarius Mars",
      Pisces: "Sensitive at heart, Pisces Mars",
    },
    Jupiter: {
      Aries: "Bloody Mary’s! Jupiter Aries",
      Taurus: "Eat your way through the Virus, Jupiter Taurus",
      Gemini: "Social Butterfly Jupiter Gemini",
      Cancer: "Being sad isn’t the answer, jupiter Cancer",
      Leo: "Put up the gazebo, Jupiter Leo",
      Virgo: "On Furlough, Jupiter Virgo",
      Libra: "secret monsta, Jupiter Libra",
      Scorpio: "Spooky Scenario, Jupiter Scorpio",
      Sagittarius: "Very adventurous, Jupiter Sagittarius",
      Capricorn:
        "Behind your wildest dreams lies reality...of course, Jupiter Capricorn",
      Aquarius: "Very generous, Jupiter Aquarius",
      Pisces: "Will help you out of a crises, Jupiter Pisces",
    },
    Saturn: {
      Aries: "Eat my dust, Aries Saturn",
      Taurus: "Binge buy then return, Taurus Saturn",
      Gemini: "Gossip Hater Gemini Saturn",
      Cancer: "Tiny dancer, Saturn in Cancer",
      Leo: "Can’t take a joke, Leo Saturn",
      Virgo: "Download The Pattern, Virgo in Saturn",
      Libra: "Beyonce Knowles, Saturn in Libra",
      Scorpio: "Feel the burn, Scorpio Saturn",
      Sagittarius: "Why, Why, Why Sagittarius Saturn",
      Capricorn: "Tony Robbins, Capricorn Saturn",
      Aquarius: "Elvis Presley Aquarius in Saturn",
      Pisces: "Jesus christ, Dalai Lama and Isaac Newton Pisces in Saturn",
    },
    Uranus: {
      Aries: "Let’s push things forward, Aries Uranus",
      Taurus: "Slow and porous Uranus in Taurus",
      Gemini: "A hole in 2 Gemini Uranus",
      Cancer: "Dream catcher earring, Cancer Uranus",
      Leo: "Despacito, Uranus Leo",
      Virgo:
        "Possibly Vegan/It’s better to burn out than fade away, Virgo Uranus",
      Libra: "Making arty farty, Libra Uranus",
      Scorpio: "Shakira Shakira Scorpio Uranus",
      Sagittarius: "Pretty precarious Uranus Sagittarius",
      Capricorn: "Hot knife in butter, Capricorn Uranus",
      Aquarius: "Dance to the beat of your own drum, Aquarius Uranus",
      Pisces: "Slippery fish, Pisces Uranus",
    },
    Neptune: {
      Aries: "Covid Immune, Aries Neptune",
      Taurus: "Wake up at Noon, Taurus Neptune",
      Gemini: "Bday in June, Gemini Neptune",
      Cancer: "Swim to the moon, Cancer Neptune",
      Leo: "A bit of a goon, Leo Neptune",
      Virgo: "Ladies commune, Virgo Neptune",
      Libra: "Vidal Sassoon, Libra Neptune",
      Scorpio: "Bonking by noon, Scorpio Neptune",
      Sagittarius: "Holiday to Cancun, Sagittarius Neptune",
      Capricorn: "Read the room, Capricorn Neptune",
      Aquarius: "Fly a balloon, Aquarius Neptune",
      Pisces: "Wrinkly prune, Pisces Neptune",
    },
    Pluto: {
      Aries: "Fighting in the Dojo, Aries Pluto",
      Taurus: "Why go so slow slow? Taurus Pluto",
      Gemini: "Takes two to tango, Gemini Pluto",
      Cancer: "Heavy Flow, Cancer Pluto",
      Leo: "Bilbo looking For Frodo, Leo Pluto",
      Virgo: "The Cleaning Popo, Virgo Pluto",
      Libra: "Yes or no Yoyo, Libra Pluto",
      Scorpio: "Dancing some butoh, Scorpio Pluto",
      Sagittarius: "Tasty Prosciutto, Sagittarius Pluto",
      Capricorn: "Saving for a bungalow, Capricorn Pluto",
      Aquarius: "A Silly Dodo, Aquarius Pluto",
      Pisces: "Mermaid Hoe, Pisces Pluto",
    },
    Descendant: {
      Aries: "Married at first sight, Aries Descendant",
      Taurus: "You’re my lobster, Taurus Descendant",
      Gemini: "Easy Breezy Beautiful Cover Girls Gemini Descendant",
      Cancer: "<TODO></TODO>",
      Leo: "Live, Laugh, Love, Leo Descendant",
      Virgo: "Split the bill, Virgo Descendant",
      Libra: "There’s no I in team, but there is an I in Libra Descendant",
      Scorpio: "Tame a weirdo, Descendent Scorpio",
      Sagittarius: "Luck be a lady tonight, Sagittarius Descendant",
      Capricorn: "Adele Dazeem, Descendant in Capricorn",
      Aquarius: "Snakes on a Plane, Aquarius Descendant",
      Pisces: "Fishy Wishy Washy, Pisces Descendant",
    },
  });
}

export default AstrologyBingoGameController;