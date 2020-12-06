import { uuidv4, planets } from "./utilities.js";

class BirthChart {
  constructor({
    name,
    Sun,
    Moon,
    Ascendant,
    Mercury,
    Venus,
    Mars,
    Jupiter,
    Saturn,
    Uranus,
    Neptune,
    Pluto,
    Descendant,
    _id = uuidv4(),
  }) {
    console.log("chart", arguments[0]);
    if (typeof name !== "string" || !name.length) {
      throw new Error(`No name provided. Instead received ${name}`);
    }
    this.name = name;

    this.Sun =
      typeof Sun === "string"
        ? {
            sign: Sun,
            icon: BirthChart.getIconSVG(Sun),
            location: { x: 455, y: -120 },
            word: BirthChart.getSignWordSVG(Sun),
            wordLocation: { x: 470, y: -60 },
            viewBox: "-150 60 600 600",
          }
        : Sun;

    this.Moon =
      typeof Moon === "string"
        ? {
            sign: Moon,
            icon: BirthChart.getIconSVG(Moon),
            location: { x: 390, y: -120 },
            word: BirthChart.getSignWordSVG(Moon),
            wordLocation: { x: 300, y: -195 },
            viewBox: "-100 60 600 600",
          }
        : Moon;

    this.Ascendant =
      typeof Ascendant === "string"
        ? {
            sign: Ascendant,
            icon: BirthChart.getIconSVG(Ascendant),
            location: { x: 300, y: -40 },
            word: BirthChart.getSignWordSVG(Ascendant),
            wordLocation: { x: 110, y: 40 },
            viewBox: "-50 60 600 600",
          }
        : Ascendant;

    this.Mercury =
      typeof Mercury === "string"
        ? {
            sign: Mercury,
            icon: BirthChart.getIconSVG(Mercury),
            location: { x: 520, y: -90 },
            word: BirthChart.getSignWordSVG(Mercury),
            wordLocation: { x: 540, y: 0 },
            viewBox: "-100 60 600 600",
          }
        : Mercury;

    this.Venus =
      typeof Venus === "string"
        ? {
            sign: Venus,
            icon: BirthChart.getIconSVG(Venus),
            location: { x: 540, y: -30 },
            word: BirthChart.getSignWordSVG(Venus),
            wordLocation: { x: 590, y: 87 },
            viewBox: "-100 60 600 600",
          }
        : Venus;

    this.Mars =
      typeof Mars === "string"
        ? {
            sign: Mars,
            icon: BirthChart.getIconSVG(Mars),
            location: { x: 545, y: 30 },
            word: BirthChart.getSignWordSVG(Mars),
            wordLocation: { x: 575, y: 160 },

            viewBox: "-100 60 600 600",
          }
        : Mars;

    this.Jupiter =
      typeof Jupiter === "string"
        ? {
            sign: Jupiter,
            icon: BirthChart.getIconSVG(Jupiter),
            location: { x: 510, y: 90 },
            word: BirthChart.getSignWordSVG(Jupiter),
            wordLocation: { x: 515, y: 225 },
            viewBox: "-100 60 600 600",
          }
        : Jupiter;

    this.Saturn =
      typeof Saturn === "string"
        ? {
            sign: Saturn,
            icon: BirthChart.getIconSVG(Saturn),
            location: { x: 450, y: 125 },
            word: BirthChart.getSignWordSVG(Saturn),
            wordLocation: { x: 435, y: 255 },
            viewBox: "-100 60 600 600",
          }
        : Saturn;

    this.Uranus =
      typeof Uranus === "string"
        ? {
            sign: Uranus,
            icon: BirthChart.getIconSVG(Uranus),
            location: { x: 390, y: 110 },
            word: BirthChart.getSignWordSVG(Uranus),
            wordLocation: { x: 330, y: 400 },
            viewBox: "-150 60 600 600",
          }
        : Uranus;

    this.Neptune =
      typeof Neptune === "string"
        ? {
            sign: Neptune,
            icon: BirthChart.getIconSVG(Neptune),
            location: { x: 320, y: 85 },
            word: BirthChart.getSignWordSVG(Neptune),
            wordLocation: { x: 200, y: 330 },
            viewBox: "-100 60 600 600",
          }
        : Neptune;

    this.Pluto =
      typeof Pluto === "string"
        ? {
            sign: Pluto,
            icon: BirthChart.getIconSVG(Pluto),
            location: { x: 285, y: 25 },
            word: BirthChart.getSignWordSVG(Pluto),
            wordLocation: { x: 120, y: 210 },
            viewBox: "-100 60 600 600",
          }
        : Pluto;

    this.Descendant =
      typeof Descendant === "string"
        ? {
            sign: Descendant,
            icon: BirthChart.getIconSVG(Descendant),
            location: { x: 330, y: -88 },
            word: BirthChart.getSignWordSVG(Descendant),
            wordLocation: { x: 160, y: -100 },
            viewBox: "-100 60 600 600",
          }
        : Descendant;

    this._id = _id;
  }

  static getIconSVG(sign) {
    switch (sign) {
      case "Aries":
        // return "./assets/img/aries.svg";
        return `	<path d="M143.4,71.3c0-2.7-0.2-5.1,0.1-7.4c0.1-0.9,1.5-1.9,2.5-2.3c5.6-2.2,10.5-5.2,14-10.2c8.2-11.7,1.8-28.3-11.6-30.4
		c-11.7-1.8-23.6,5.5-28.6,17.3c-6.7,16.2-10.6,33.2-13.5,50.4c-4.6,27.5-8.5,55-12.7,82.6c-0.1,0.4-0.2,0.7-0.3,1.2
		c-2.6,0-5.2,0-8,0c-1-7.5-1.9-14.9-2.9-22.4c-4.3-31.2-8.7-62.4-16.8-93c-2-7.7-4.8-15.4-8.3-22.5C52,24.3,39.6,19,29.2,21.4
		c-14.4,3.3-16.8,20.5-10.3,30c3.3,4.8,8,8,13.4,9.9c2.6,0.9,3.8,2.1,3.4,4.8c-0.2,1.6,0,3.3,0,5c-16-1.6-30.2-13.5-32-30.1
		C2.5,30.2,4.2,20.2,11,11.4c9.4-11.9,24-14,36.5-8.7C62.9,9.3,71.4,22,75.1,37.6c3.6,15.1,6.1,30.5,8.4,45.9
		c2.4,15.8,3.9,31.8,6.1,47.7c0.8-6.8,1.5-13.5,2.3-20.3c3-24.6,5.5-49.3,11.9-73.3c3.5-13.1,10-24.5,21.9-31.8
		C148-8.1,173,4.5,175.5,29.3c1.2,12-1.2,22.7-9.9,31.4C159.6,66.8,152.2,69.8,143.4,71.3z"/>`;
        break;
      case "Taurus":
        // return "./assets/img/taurus.svg";
        return `<path d="M66.51 85.58a44.38 44.38 0 01-12.59-12 64.46 64.46 0 01-7.5-14.34c-2.31-6-4.47-12.14-6.8-18.18a38.22 38.22 0 00-6.56-11.32c-4.07-4.75-9.41-7.33-15.31-8.85a68.46 68.46 0 00-15-1.88H-.01L.29.12H2.9a85.59 85.59 0 0120.7 2.8c9.34 2.59 17.48 7.16 23.85 14.59a58 58 0 019.89 16.95c2.47 6.35 4.73 12.79 7.19 19.14a38.1 38.1 0 006.56 11.28c4.08 4.74 9.42 7.34 15.36 8.84A75.81 75.81 0 00108 75.54a63.36 63.36 0 0014.17-2c5.74-1.56 10.86-4.15 14.79-8.75a38.21 38.21 0 006.5-11.2c2.09-5.39 4-10.85 6-16.26a68.82 68.82 0 019.29-17.61 45.21 45.21 0 0120.43-15.1A68.64 68.64 0 01198.95.47c2.85-.21 5.71-.31 8.72-.47.11 6.37.21 12.61.32 18.92-2.07.08-4.07.13-6.07.25a56.42 56.42 0 00-15.69 3 27.5 27.5 0 00-15.17 13.17c-2.84 5.15-4.64 10.72-6.64 16.21a127.83 127.83 0 01-6 14.82c-4 7.8-9.29 14.41-16.72 19.12 25.27 16.13 38.66 38.9 37.67 69.13-.68 21-9.34 38.72-25 52.76a75.41 75.41 0 01-108.61-8.06 74.22 74.22 0 01-14.84-29.08 75.54 75.54 0 0111.4-62.65 76 76 0 0124.19-22.01zm37.44 122.23a56.65 56.65 0 10-56.59-56.75 56.67 56.67 0 0056.59 56.75z" />`;
        break;
      case "Gemini":
        // return "./assets/img/gemini.svg";
        return `<path d="M228.17 216.77l-9 11.17c-70-55.4-140-55.77-210.14 0l-9-11.17c17.06-12.32 34-24.25 52.77-33.14 2.52-1.19 3.32-2.6 3.31-5.33q-.12-64.34 0-128.66c0-2.73-.8-4.14-3.32-5.31C34.04 35.6 17.1 23.94.01 11.64L9.01 0c70.06 56.39 140.08 56 210.11 0 3 3.9 5.88 7.61 9 11.67-5.52 3.89-10.65 8-16.22 11.32-12.2 7.38-24.59 14.47-37 21.48-2.09 1.18-3.06 2.26-3.06 4.73q.1 64.73 0 129.45c0 2.72 1.09 3.88 3.35 4.94 18.84 8.9 35.77 20.8 52.98 33.18zm-82.92-43.08V54.2a161.53 161.53 0 01-62.47 0v119.5a204.14 204.14 0 0162.47-.01z" />`;
        break;
      case "Cancer":
        // return "./assets/img/cancer.svg";
        return `<path d="M66.51 85.58a44.38 44.38 0 01-12.59-12 64.46 64.46 0 01-7.5-14.34c-2.31-6-4.47-12.14-6.8-18.18a38.22 38.22 0 00-6.56-11.32c-4.07-4.75-9.41-7.33-15.31-8.85a68.46 68.46 0 00-15-1.88H-.01L.29.12H2.9a85.59 85.59 0 0120.7 2.8c9.34 2.59 17.48 7.16 23.85 14.59a58 58 0 019.89 16.95c2.47 6.35 4.73 12.79 7.19 19.14a38.1 38.1 0 006.56 11.28c4.08 4.74 9.42 7.34 15.36 8.84A75.81 75.81 0 00108 75.54a63.36 63.36 0 0014.17-2c5.74-1.56 10.86-4.15 14.79-8.75a38.21 38.21 0 006.5-11.2c2.09-5.39 4-10.85 6-16.26a68.82 68.82 0 019.29-17.61 45.21 45.21 0 0120.43-15.1A68.64 68.64 0 01198.95.47c2.85-.21 5.71-.31 8.72-.47.11 6.37.21 12.61.32 18.92-2.07.08-4.07.13-6.07.25a56.42 56.42 0 00-15.69 3 27.5 27.5 0 00-15.17 13.17c-2.84 5.15-4.64 10.72-6.64 16.21a127.83 127.83 0 01-6 14.82c-4 7.8-9.29 14.41-16.72 19.12 25.27 16.13 38.66 38.9 37.67 69.13-.68 21-9.34 38.72-25 52.76a75.41 75.41 0 01-108.61-8.06 74.22 74.22 0 01-14.84-29.08 75.54 75.54 0 0111.4-62.65 76 76 0 0124.19-22.01zm37.44 122.23a56.65 56.65 0 10-56.59-56.75 56.67 56.67 0 0056.59 56.75z" />`;
        break;
      case "Leo":
        // return "./assets/img/leo.svg";
        return `<path d="M58.28 97.96c-1.52-3.27-3.07-6.42-4.46-9.63a69.4 69.4 0 01-5.53-20.17 59.14 59.14 0 014.18-29.08c5.73-14 15-24.85 28.51-31.9 10.13-5.32 21-8 32.43-7 20.5 1.77 37 10.8 48.47 28.07a59.51 59.51 0 019.76 27.55 84.6 84.6 0 01-1.73 25.85c-1.95 9.29-5.16 18.18-8.47 27.05-5.39 14.47-12 28.39-18.56 42.32-4.57 9.7-9.07 19.43-12.91 29.45a43.29 43.29 0 00-2.63 22.43 25.63 25.63 0 004.78 11.81c4.23 5.55 9.95 7.85 16.8 7.57 5.68-.23 10.83-2.21 15.73-4.94a55.31 55.31 0 0010.87-8l.7-.64 11.23 11.65c-1.65 1.43-3.22 2.89-4.89 4.23a62.86 62.86 0 01-23.13 12.28c-8.17 2.22-16.33 2.31-24.37-.63-8.81-3.23-15.14-9.28-19.38-17.56-3.92-7.63-5.18-15.83-4.87-24.34s2.73-16.49 5.95-24.31c5.21-12.62 11.12-24.91 16.93-37.25a394.19 394.19 0 0016.85-41.28 101.06 101.06 0 004.89-20.79c1.06-9.12.49-18-3.29-26.58-6.94-15.63-19.15-24.41-35.75-27.35-7.86-1.4-15.47-.3-23 2.46-15.41 5.66-26.21 20.3-28.76 35.65-1.45 8.75 0 17.08 3.18 25.21 2.67 6.82 6.28 13.15 9.85 19.52a197.61 197.61 0 019.48 18.35 68.74 68.74 0 015.63 19.31c2.2 19-4.51 34.13-20.11 45.21a44.42 44.42 0 01-20.92 7.87 47.74 47.74 0 01-13.83-.7c-18.1-3.25-32.39-18.09-36.63-35.62a47.18 47.18 0 0149-57.35c2.45.17 4.87.74 7.3 1.14.22.03.44.09.7.14zm18.86 45.75c-.18-1.84-.33-3.69-.57-5.52a22.41 22.41 0 00-.68-3.47c-4.89-16.73-22.33-25.8-37.94-20.59-11.35 3.78-20.86 12.93-21.82 28a29.13 29.13 0 004.46 17.1c6.81 11.3 18.15 16.66 30.72 14.88 13.15-1.87 26.43-14.39 25.83-30.4z"/>`;
        break;
      case "Virgo":
        // return "./assets/img/virgo.svg";
        return `<path d="M178.98 86.03a22.38 22.38 0 017.58-5.43c4.36-1.76 8.67-1.34 12.91.4a33.81 33.81 0 0113 10.11c6.05 7.25 9.9 15.63 12.47 24.65a86.72 86.72 0 013.17 18.22 138.38 138.38 0 01-5.43 49.47 94.36 94.36 0 01-16.38 31.88c-.14.18-.27.37-.46.63a205.26 205.26 0 0032 26l-10.88 16.57a225 225 0 01-35.39-28.81c-18.37 13.55-39.42 18-61.85 18.23-.16-6.62-.33-13.18-.49-19.84 13.06-.07 25.72-1.73 37.72-6.92a62.85 62.85 0 0011.44-6.45c-.24-.35-.45-.67-.68-1a102.44 102.44 0 01-13.42-23.17 65.18 65.18 0 01-4.66-18.16c-.26-2.63-.4-5.28-.4-7.92v-98.9a22.52 22.52 0 00-2-8.63 111.88 111.88 0 00-20.87-33.1c-.91-1-1.95-1.88-2.94-2.81-.21-.2-.46-.36-.89-.69-1.64 1.72-3.39 3.33-4.88 5.16a92.66 92.66 0 00-16.13 29 35.31 35.31 0 00-2 11.36q.06 65.53 0 131.05v1.32H89.76v-1.21-130a29.85 29.85 0 00-1.72-10.29 109.37 109.37 0 00-18.33-32.77c-.86-1.05-1.87-2-2.78-3a.77.77 0 00-1.31 0c-2.58 2.59-5.36 5-7.72 7.81a94.29 94.29 0 00-14.13 22.5 39.65 39.65 0 00-3.48 11.43 26.55 26.55 0 00-.15 2.67c0 1.46.05 2.91.05 4.36v128.58H20.36V70.01a86.54 86.54 0 00-4.74-29.59 64.39 64.39 0 00-12.3-21.33c-1-1.13-2.15-2.13-3.32-3.27l13-15a66.27 66.27 0 0111.56 13.4 87.52 87.52 0 018.22 15.56c.24-.35.43-.6.6-.87A106.72 106.72 0 0149.29 8.96a35.83 35.83 0 0111-7.66A16 16 0 0175.1 2.44a36.46 36.46 0 018.82 7.6A116.11 116.11 0 0198.78 32.1l.45.82.84-1.54a100.73 100.73 0 0115.61-22.16 33 33 0 0110.41-7.79 16.1 16.1 0 0115 .88 37.67 37.67 0 019.21 7.45 130.52 130.52 0 0125.42 40 40.89 40.89 0 013.32 16.59c-.16 6.11 0 12.23 0 18.35zm14.11 13.93c-.84 1.17-1.7 2.26-2.43 3.42a81.36 81.36 0 00-8.75 19.78 55.65 55.65 0 00-2.92 16.22v26.09a43.75 43.75 0 001.48 11.27 68 68 0 009.4 20c.84 1.28 1.74 2.53 2.72 4 1.3-2.05 2.55-3.91 3.68-5.85 5.61-9.66 8.82-20.16 10.66-31.12a133 133 0 001.7-19.73 81.89 81.89 0 00-1.71-18.62 52.14 52.14 0 00-8-19.37 22.81 22.81 0 00-5.83-6.09z"/>`;
        break;
      case "Libra":
        // return "./assets/img/libra.svg";
        return `<path d="M263.87 147.16H159.81c0-.57-.07-1.07-.07-1.57v-19.83a2.4 2.4 0 011.24-2.31c9.24-6.21 16.84-13.92 21.24-24.31 7.73-18.26 5.66-42.22-12.38-59.24-9.16-8.65-19.79-14-32.39-15.09-17-1.42-31.71 3.69-43.82 15.91-8.27 8.34-13.78 18.11-15.23 29.87-2.39 19.36 3.6 35.58 18.64 48.24 2.08 1.75 4.37 3.26 6.52 4.93a2 2 0 01.81 1.33c.05 7.28 0 14.56 0 22H.11v-24.5h73.07c-.85-.91-1.42-1.51-2-2.13-7.83-8.48-13.75-18.08-16.26-29.44a68.37 68.37 0 018.29-51.28c9.93-16.65 24-28.67 42.38-35.32A78.93 78.93 0 01138.26.26a73.07 73.07 0 0135.64 11.6c14.79 9.68 26.33 22.24 32.53 39 5.26 14.25 6.29 28.83 2 43.55-2.89 9.83-8.24 18.27-15.12 25.78l-1.6 1.7a5.15 5.15 0 00-.39.57c.57 0 1 .1 1.43.1h69.85c.42 0 .85-.08 1.27-.12zM0 220.74v-24.37c.56 0 1-.07 1.48-.07h262.39v24.44z"/>`;
        break;
      case "Scorpio":
        // return "./assets/img/scorpio.svg";
        return `<path d="M168.46 219.86c-4.9-2.64-10-5-14.68-8-10.28-6.48-14.58-16.88-17.7-28-4.84-17.23-6.8-34.89-8.12-52.65-2.38-32-1.19-64-.6-96 .05-2.92-1-3.8-3.6-4.63-8.41-2.64-16.72-4.12-25.35-1-2.36.86-3.4 1.93-3.39 4.6.22 40.27.31 80.55.53 120.82a8.47 8.47 0 001.74 4.65c2.75 3.64 5.79 7.07 9 10.94-9.16 4.75-15 12-18.08 22.15-6.27-4.91-12.08-9.42-17.86-14-6.92-5.46-7.11-5.58-3-13.2a33.41 33.41 0 003.91-16.58c-.23-37.84-.16-75.68-.19-113.52v-5.17c-10.42-1.7-20.57-3.7-29.55 3.57a7.3 7.3 0 00-2.46 5q0 59.61.44 119.2a10.28 10.28 0 001.26 4.53c2.21 4.15 4.63 8.19 7.22 12.7-8.37 4.61-13.42 12-17.82 20.42-1-.73-1.81-1.27-2.54-2-5.37-4.93-10.67-10-16.12-14.81-1.74-1.56-2.63-2.89-1.17-5.11 6.16-9.34 6.62-19.75 6.53-30.59-.3-34.86-.05-69.73 0-104.6v-4.73L0 30.45 14.86 5.29c8.18 4.28 17.33 7.1 27.51 6.07l-2.05 11.4.83.53a44.07 44.07 0 004.04-4.72c3.09-4.74 5.93-9.65 9-14.38.66-1 2.29-2.3 3.13-2.09a87.87 87.87 0 0033.87 1.67v14.4l.94.24L104.39 0c8.27 1.37 16.28 3.24 24.4 3.91s16.39.14 24.91.14c-.52 5.06-1.42 10.62-1.6 16.19-.76 23.89-1.93 47.78-1.74 71.66.13 16.56 1.84 33.15 3.58 49.65 1.61 15.27 4.22 30.45 10.46 44.67a46.3 46.3 0 006.17 10.35c5.54 6.86 12.46 8.1 19.61 2.85a72 72 0 0013.8-13.49c4.73-6 8.48-12.79 12.61-19.27a5.64 5.64 0 00.87-3.58l-26.91 16.89c-.4-3-.31-5.61-1.15-7.91-2.57-7.05 1-10.49 6.51-14.14 17-11.22 33.64-23 50.41-34.57v65.69l-15.13 8.7v-29.45a14.16 14.16 0 00-3.78 4.49c-8.45 13.79-16.85 27.69-29.86 37.79-4.85 3.77-10.71 6.24-16.11 9.31z"/>`;
        break;
      case "Sagittarius":
        // return "./assets/img/sagittarius.svg";
        return `<path d="M69.52 143.48l-51.59 51.71c-6.38 6.39-10.93 7.33-15.22 3.19s-3.48-9 3.17-15.63q23.5-23.52 47.06-47c1.39-1.39 3.32-2.23 5.36-3.56-13.12-13.06-25-24.88-36.84-36.7-.76-.76-1.58-1.48-2.29-2.28-3.54-4-3.51-9.25 0-12.59s8.69-3.17 12.58.68Q48.48 97.84 65 114.57a52.54 52.54 0 013.49 4.24c34.11-34.05 67.58-67.53 101.3-101.25-1.35-.1-2.84-.32-4.33-.32l-59.47.09c-5.8 0-9.58-3.49-9.44-8.69.14-5 3.89-8.29 9.37-8.31Q147.01.18 188.08 0c10.54 0 13 2.47 13 13q-.11 41.1-.2 82.18c0 5.87-3.44 9.6-8.65 9.52s-8.47-4-8.47-9.8V31.99L83.08 132.69c7.32 7.29 15.74 15.67 24.15 24.06 3.57 3.56 7.16 7.1 10.69 10.71 4.76 4.86 5.22 9.93 1.34 13.72s-8.86 3.24-13.71-1.6c-11.86-11.83-23.67-23.71-36.03-36.1z"/>`;
        break;
      case "Capricorn":
        // return "./assets/img/capricorn.svg";
        return `<path d="M37.2 166.06H18.74v-1.19V60.68a67 67 0 00-4.42-25.18C11.17 27.56 6.74 20.5.2 14.85a1.44 1.44 0 01-.2-.27C3.85 9.87 7.71 5.09 11.59.3c8.23 6.87 14.08 15.39 18.55 25.09l.59-.82A89.69 89.69 0 0144.56 7.94a50.05 50.05 0 016.71-5.16c6.22-4 12.59-3.63 18.6.66a63.17 63.17 0 0112.82 12.79 115.26 115.26 0 0115.86 26.08 38.15 38.15 0 013.29 15.37c-.1 21.26 0 42.52 0 63.77a34.8 34.8 0 007.11 21.74 33.12 33.12 0 0010.6 9 7.23 7.23 0 00.68.3v-1.18c.06-6.68-.12-13.37.23-20a43 43 0 018.32-23.77 36.51 36.51 0 0121.88-14.16 50.81 50.81 0 0117.52-.66 43.46 43.46 0 0115.77 4.83 33.72 33.72 0 0115 15.73 44.6 44.6 0 012.64 31.83c-3.14 11-10.11 19.1-20.09 24.6a45.83 45.83 0 01-22.39 5.61h-21.87a.88.88 0 00-1 .74c-7.41 22.74-22.92 37-45.77 43.45a57.11 57.11 0 01-15.51 2H55.73v-18.49h1c6 0 12 .14 18 0q27.18-.76 40.73-24.41a50.19 50.19 0 002.16-4.78c.27-.61.45-1.26.69-1.94-1.24-.52-2.44-1-3.6-1.52-16.25-7.53-26.27-20.09-30.21-37.52a51.11 51.11 0 01-1.12-11.18V57.99a21.05 21.05 0 00-1.79-8.39 92.46 92.46 0 00-9.83-17.17 70.3 70.3 0 00-10.6-12.37c-1.28-1.13-1-1.16-2.38 0a61 61 0 00-10.52 11.7 74.58 74.58 0 00-9.12 16.01 26.64 26.64 0 00-2 10.23c.09 15.56 0 31.13.06 46.7v61.36zm101.52-9.19h20.6a27.76 27.76 0 0011.79-2.56c6.36-3 10.91-7.65 12.84-14.49a27 27 0 00-.91-16.93 16.53 16.53 0 00-10.09-10.12 32.37 32.37 0 00-17.24-1.56 18.53 18.53 0 00-14.31 11.09 32 32 0 00-2.7 13.72v19.84z"/>`;
        break;
      case "Aquarius":
        // return "./assets/img/aquarius.svg";
        return `<path d="M233.15 0l24.88 58.3c-5.35 2.37-10.52 4.64-15.85 7l-16.79-39.84-60.92 39.81-16.94-39.81-60.25 39.81c-5.66-13.33-11.2-26.42-16.88-39.81C50.05 38.78 29.92 51.96 9.54 65.3l-9.41-14L77.95.01c5.75 13.31 11.41 26.43 17.18 39.82L155.67.02c5.67 13.34 11.27 26.49 16.94 39.81zM9.38 172.62l-9.38-14 77.81-51.27 17.18 39.82 60.53-39.81c5.67 13.32 11.26 26.45 16.94 39.81L233 107.35l24.89 58.29-15.85 7c-5.57-13.29-11.09-26.41-16.76-39.86l-60.82 39.82-16.93-39.82-60.25 39.81-17-39.81z"/>`;
        break;
      case "Pisces":
        // return "./assets/img/pisces.svg";
        return `<path d="M22.62 246.23L0 223.95c23.11-23.26 37.24-51.23 41.34-84.78H.65V107.5h40.73c-4-33.81-18-61.83-41.19-85.25L22.94.04c29.08 29.05 46.05 64.84 50.55 107.23h11.07c8.81 0 17.63-.15 26.45.08 3.53.09 4.66-1 5.09-4.58 4.71-39.6 21.27-73.56 49.18-102a8.17 8.17 0 01.9-.73l22.65 22.12c-23.19 23.26-37.27 51.42-41.38 85.17h44.94v31.71h-44.9c4.17 33.56 18.18 61.57 41.36 84.84l-22.55 22.36q-44.12-44.14-50.83-106.9h-42c-4.55 41.7-21.44 77.48-50.85 106.89z"/>`;
        break;
      default:
        // console.log("default");
        break;
    }
  }

  static getSignWordSVG(sign) {
    switch (sign) {
      case "Aries":
        return `<text transform="rotate(88.854 -12.926 30.334)" font-size="252.05" font-family="WolpePegasus-Regular">
    ARI
  </text>`;
        break;
      case "Taurus":
        return `<text transform="rotate(88.854 7.47 9.713)" font-size="252.05" font-family="WolpePegasus-Regular">
    TAU
  </text>`;
        break;
      case "Gemini":
        return `<text transform="rotate(88.854 7.47 9.713)" font-size="252.05" font-family="WolpePegasus-Regular">
    GEM
  </text>`;
        break;
      case "Cancer":
        return `<text transform="rotate(88.854 7.47 9.713)" font-size="252.05" font-family="WolpePegasus-Regular">
    CAN
  </text>`;
        break;
      case "Leo":
        return `<text transform="rotate(88.854 2.112 15.074)" font-size="252.05" font-family="WolpePegasus-Regular">
    LEO
  </text>`;
        break;
      case "Virgo":
        return `<text transform="rotate(88.854 7.47 9.713)" font-size="252.05" font-family="WolpePegasus-Regular">
    VIR
  </text>`;
        break;
      case "Libra":
        return `<text transform="rotate(88.854 -11.61 29.074)" letter-spacing="25" font-size="252.05" font-family="WolpePegasus-Regular">
    LIB
  </text>`;
        break;
      case "Scorpio":
        return `<text transform="rotate(88.854 7.47 9.713)" font-size="252.05" font-family="WolpePegasus-Regular">
    SCO
  </text>`;
        break;
      case "Sagittarius":
        return `<text transform="rotate(88.854 7.47 9.713)" font-size="252.05" font-family="WolpePegasus-Regular">
    SAG
  </text>`;
        break;
      case "Capricorn":
        return `<text transform="rotate(88.854 .623 10.473)" font-size="252.05" font-family="WolpePegasus-Regular">
    CAP
  </text>`;
        break;
      case "Aquarius":
        return `<text transform="rotate(88.854 7.47 9.713)" font-size="252.05" font-family="WolpePegasus-Regular">
    AQU
  </text>`;
        break;
      case "Pisces":
        return `<text transform="rotate(88.854 -14.881 32.32)" letter-spacing="25" font-size="252.05" font-family="WolpePegasus-Regular">
    PIS
  </text>`;
        break;
      default:
        console.log("default");
        break;
    }
  }

  static renderChart(chart, mountNode) {
    // Created a document fragment, so we append lis as few times as possible
    const imgfrag = document.createDocumentFragment();
    console.log("chart to be rendered", chart);
    const symbolsToPopulate = [];
    console.log("planets", planets);
    for (const [sign, value] of Object.entries(chart)) {
      console.log(sign, value);
      if (!planets.includes(sign)) {
        console.log(`skipping ${sign}`);
        continue;
      }
      const currentSign = value;
      const currentSymbol = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "svg",
      );

      const currentWord = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "svg",
      );
      console.log("currentWord", currentWord);
      currentSymbol.setAttribute("viewBox", "0 0 250 250");
      currentSymbol.setAttribute("width", "50");
      currentSymbol.classList.add("sign", "icon", "chart");
      currentSymbol.innerHTML = currentSign.icon;
      currentSymbol.location = currentSign.location;

      currentWord.setAttribute("viewBox", `${currentSign.viewBox}`);

      currentWord.setAttribute("width", "175");
      currentWord.classList.add(
        "sign",
        "word",
        "chart",
        `${sign.toLowerCase()}`,
      );
      currentWord.innerHTML = currentSign.word;
      currentWord.location = currentSign.wordLocation;
      const toRotate = currentWord.firstChild;
      console.log("sign", sign);
      console.log("signLC", sign.toLowerCase());
      toRotate.classList.add("inner-word", `${sign.toLowerCase()}`);
      const degrees = currentSign.wordRotation;
      toRotate.setAttribute("transform", `${degrees}`);
      console.log("toRotate", toRotate);
      gsap.to(
        currentSymbol,
        // duration: 6,
        {
          attr: {
            x: `${currentSymbol.location.x}`,
            y: `${currentSymbol.location.y}`,
          },
        },
      );
      gsap.to(currentWord, {
        attr: {
          x: `${currentWord.location.x}`,
          y: `${currentWord.location.y}`,
        },
      });

      symbolsToPopulate.push(currentSymbol, currentWord);
      // symbolsToPopulate.push( currentWord);
    }
    console.log("symbolsToPopulate", symbolsToPopulate);

    ///BINGO CARD USING AN IMG

    // const chartImg = document.createElement("img");
    // console.log("chartImg", chartImg);
    // chartImg.classList.add("bc-template", "materialboxed");
    // chartImg.src = "./assets/img/fake-bc-template.svg";

    ///BINGO CAR USING AN SVG

    const chartImg = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "svg",
    );
    console.log("chartImg", chartImg);
    chartImg.id = "chart";
    chartImg.classList.add("bc-template", "materialboxed");
    chartImg.setAttribute("viewBox", "0 0 900 900");
    chartImg.innerHTML = `<defs><clipPath id="clip-path" transform="translate(-58.96 -52.44)"><rect width="999.74" height="999.74" fill="none"/></clipPath></defs><g clip-path="url(#clip-path)"><circle cx="440.58" cy="441.22" r="402.55" fill="none" stroke="#000" stroke-width="1.91"/><circle cx="499.95" cy="496.22" r="334.24" transform="translate(-263.41 446.42) rotate(-45)" fill="none" stroke="#1d1d1b" stroke-width="6"/></g><text transform="matrix(0.13, 0.99, -0.99, 0.13, 62.12, 480.65)" font-size="27.98" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700">P</text><text transform="matrix(0.16, 0.99, -0.99, 0.16, 64.33, 497.48)" font-size="27.98" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700">l</text><text transform="matrix(0.19, 0.98, -0.98, 0.19, 65.45, 504.67)" font-size="27.98" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700">u</text><text transform="translate(68.31 519.51) rotate(77.08)" font-size="27.98" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700">t</text><text transform="matrix(0.25, 0.97, -0.97, 0.25, 70.28, 528.27)" font-size="27.98" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700">o</text><text transform="matrix(0.27, 0.96, -0.96, 0.27, 73.95, 542.32)" font-size="27.98" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700"> </text><text transform="translate(75.63 548.24) rotate(72.87)" font-size="27.98" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700"> </text><text transform="matrix(0.32, 0.95, -0.95, 0.32, 77.38, 554.15)" font-size="27.98" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700"> </text><text transform="translate(80.58 563.66) rotate(70.78)" font-size="27.98" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700"> </text><text transform="translate(80.55 570.39) rotate(63.86)" font-size="27.98" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700"> </text><text transform="translate(116.99 640.51) rotate(57.69)" font-size="27.98" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700"> </text><text transform="translate(120.32 646.03) rotate(55.64)" font-size="27.98" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700">N</text><text transform="matrix(0.6, 0.8, -0.8, 0.6, 132.35, 663.52)" font-size="27.98" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700">e</text><text transform="matrix(0.63, 0.78, -0.78, 0.63, 140.06, 673.83)" font-size="27.98" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700">p</text><text transform="matrix(0.65, 0.76, -0.76, 0.65, 149.8, 685.71)" font-size="27.98" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700">t</text><text transform="translate(155.83 692.78) rotate(47.44)" font-size="27.98" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700">u</text><text transform="translate(166.09 703.87) rotate(45.38)" font-size="27.98" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700">n</text><text transform="translate(176.79 714.66) rotate(42.64)" font-size="27.98" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700">e</text><text transform="matrix(0.75, 0.66, -0.66, 0.75, 186.26, 723.38)" font-size="27.98" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700"> </text><text transform="matrix(0.8, 0.6, -0.6, 0.8, 190.32, 728.14)" font-size="27.98" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700"> </text><text transform="matrix(0.85, 0.53, -0.53, 0.85, 235.59, 760.93)" font-size="27.98" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700"> </text><text transform="matrix(0.85, 0.52, -0.52, 0.85, 240.81, 764.2)" font-size="27.98" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700"> </text><text transform="translate(246.06 767.41) rotate(30.12)" font-size="27.98" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700"> </text><text transform="matrix(0.87, 0.49, -0.49, 0.87, 251.39, 770.5)" font-size="27.98" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700"> </text><text transform="translate(256.75 773.51) rotate(28.71)" font-size="27.98" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700"> </text><text transform="translate(262.16 776.45) rotate(27.3)" font-size="27.98" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700"> </text><text transform="matrix(0.89, 0.45, -0.45, 0.89, 267.63, 779.28)" font-size="27.98" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700"> </text><text transform="matrix(0.91, 0.41, -0.41, 0.91, 273.07, 782.15)" font-size="27.98" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700">U</text><text transform="translate(291.63 790.48) rotate(22.32)" font-size="27.98" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700">r</text><text transform="matrix(0.94, 0.34, -0.34, 0.94, 301.67, 794.62)" font-size="27.98" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700">a</text><text transform="translate(313.94 799.19) rotate(18.02)" font-size="27.98" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700">n</text><text transform="matrix(0.96, 0.27, -0.27, 0.96, 328.17, 803.86)" font-size="27.98" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700">u</text><text transform="translate(342.71 807.99) rotate(13.69)" font-size="27.98" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700">s</text><text transform="translate(352.87 811.04) rotate(10.06)" font-size="27.98" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700"> </text><text transform="translate(394.61 820.16) rotate(0.64)" font-size="27.98" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700"> </text><text transform="translate(479.75 818.65) rotate(-6.54)" font-size="27.98" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700"> </text><text transform="translate(485.87 818.01) rotate(-7.96)" font-size="27.98" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700">S</text><text transform="matrix(0.98, -0.18, 0.18, 0.98, 500.34, 815.98)" font-size="27.98" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700">a</text><text transform="translate(513.22 813.64) rotate(-11.51)" font-size="27.98" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700">t</text><text transform="translate(522.33 811.81) rotate(-13.62)" font-size="27.98" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700">u</text><text transform="matrix(0.96, -0.27, 0.27, 0.96, 537.01, 808.22)" font-size="27.98" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700">r</text><text transform="translate(547.88 805.23) rotate(-17.83)" font-size="27.98" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700">n</text><text transform="matrix(0.95, -0.32, 0.32, 0.95, 562.33, 800.54)" font-size="27.98" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700"> </text><text transform="translate(562.8 800.38) rotate(-19.22)" font-size="27.98" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700"> </text><text transform="translate(568.61 798.34) rotate(-19.91)" font-size="27.98" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700"> </text><text transform="translate(574.39 796.22) rotate(-21.3)" font-size="27.98" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700"> </text><text transform="translate(580.12 793.99) rotate(-22)" font-size="27.98" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700"> </text><text transform="translate(585.84 791.7) rotate(-23.38)" font-size="27.98" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700"> </text><text transform="matrix(0.91, -0.41, 0.41, 0.91, 591.49, 789.27)" font-size="27.98" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700"> </text><text transform="translate(597.11 786.76) rotate(-24.76)" font-size="27.98" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700"> </text><text transform="translate(602.71 784.19) rotate(-26.14)" font-size="27.98" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700"> </text><text transform="translate(608.24 781.49) rotate(-26.82)" font-size="27.98" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700"> </text><text transform="translate(613.73 778.71) rotate(-27.51)" font-size="27.98" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700"> </text><text transform="matrix(0.88, -0.48, 0.48, 0.88, 619.19, 775.88)" font-size="27.98" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700"> </text><text transform="translate(624.59 772.92) rotate(-29.57)" font-size="27.98" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700"> </text><text transform="translate(629.94 769.87) rotate(-30.26)" font-size="27.98" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700"> </text><text transform="matrix(0.85, -0.52, 0.52, 0.85, 635.26, 766.78)" font-size="27.98" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700"> </text><text transform="translate(640.51 763.56) rotate(-32.31)" font-size="27.98" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700"> </text><text transform="matrix(0.84, -0.54, 0.54, 0.84, 645.7, 760.26)" font-size="27.98" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700"> </text><text transform="translate(650.87 756.91) rotate(-34.36)" font-size="27.98" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700"> </text><text transform="translate(655.95 753.44) rotate(-35.04)" font-size="27.98" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700"> </text><text transform="matrix(0.81, -0.58, 0.58, 0.81, 660.98, 749.9)" font-size="27.98" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700"> </text><text transform="matrix(0.8, -0.6, 0.6, 0.8, 665.98, 746.3)" font-size="27.98" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700">J</text><text transform="matrix(0.78, -0.63, 0.63, 0.78, 673.69, 740.54)" font-size="27.98" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700">u</text><text transform="translate(685.41 731) rotate(-41.19)" font-size="27.98" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700">p</text><text transform="matrix(0.73, -0.69, 0.69, 0.73, 696.93, 720.84)" font-size="27.98" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700">i</text><text transform="translate(702.55 715.63) rotate(-44.62)" font-size="27.98" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700">t</text><text transform="translate(708.99 709.36) rotate(-45.99)" font-size="27.98" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700">e</text><text transform="matrix(0.67, -0.74, 0.74, 0.67, 717.95, 700.12)" font-size="27.98" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700">r</text><text transform="matrix(0.6, -0.8, 0.8, 0.6, 726.32, 692.39)" font-size="27.98" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700"> </text><text transform="matrix(0.53, -0.85, 0.85, 0.53, 760.29, 645.63)" font-size="27.98" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700"> </text><text transform="translate(763.56 640.42) rotate(-58.47)" font-size="27.98" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700"> </text><text transform="translate(766.78 635.17) rotate(-59.88)" font-size="27.98" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700"> </text><text transform="matrix(0.49, -0.87, 0.87, 0.49, 769.88, 629.85)" font-size="27.98" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700"> </text><text transform="translate(772.89 624.49) rotate(-61.29)" font-size="27.98" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700"> </text><text transform="matrix(0.46, -0.89, 0.89, 0.46, 775.85, 619.09)" font-size="27.98" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700"> </text><text transform="translate(778.68 613.62) rotate(-63.41)" font-size="27.98" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700"> </text><text transform="matrix(0.44, -0.9, 0.9, 0.44, 781.43, 608.12)" font-size="27.98" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700"> </text><text transform="matrix(0.41, -0.91, 0.91, 0.41, 784.12, 602.58)" font-size="27.98" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700"> </text><text transform="translate(786.68 596.98) rotate(-66.25)" font-size="27.98" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700"> </text><text transform="translate(789.31 591.41) rotate(-68.39)" font-size="27.98" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700">M</text><text transform="translate(798.48 567.6) rotate(-71.26)" font-size="27.98" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700">a</text><text transform="matrix(0.29, -0.96, 0.96, 0.29, 802.65, 555.19)" font-size="27.98" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700">r</text><text transform="matrix(0.26, -0.97, 0.97, 0.26, 805.85, 544.38)" font-size="27.98" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700">s</text><text transform="translate(809.22 534.29) rotate(-79.21)" font-size="27.98" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700"> </text><text transform="translate(819.78 486.7) rotate(-89.36)" font-size="27.98" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700"> </text><text transform="translate(63.04 276.24) rotate(-65.43)" font-size="27.77" fill="#1d1d1b" font-family="WolpePegasus-Italic, Wolpe Pegasus" font-style="italic">R</text><text transform="translate(69.45 262.31) rotate(-63.37)" font-size="27.77" fill="#1d1d1b" font-family="WolpePegasus-Italic, Wolpe Pegasus" font-style="italic">o</text><text transform="translate(74.83 251.59) rotate(-62)" font-size="27.77" fill="#1d1d1b" font-family="WolpePegasus-Italic, Wolpe Pegasus" font-style="italic">u</text><text transform="matrix(0.5, -0.87, 0.87, 0.5, 81.04, 240.02)" font-size="27.77" fill="#1d1d1b" font-family="WolpePegasus-Italic, Wolpe Pegasus" font-style="italic">n</text><text transform="matrix(0.53, -0.85, 0.85, 0.53, 87.82, 228.31)" font-size="27.77" fill="#1d1d1b" font-family="WolpePegasus-Italic, Wolpe Pegasus" font-style="italic">d</text><text transform="matrix(0.55, -0.83, 0.83, 0.55, 94.69, 217.38)" font-size="27.77" fill="#1d1d1b" font-family="WolpePegasus-Italic, Wolpe Pegasus" font-style="italic"> </text><text transform="translate(97.65 212.88) rotate(-55.84)" font-size="27.77" fill="#1d1d1b" font-family="WolpePegasus-Italic, Wolpe Pegasus" font-style="italic">3</text><text transform="translate(104.73 202.59) rotate(-54.48)" font-size="27.77" fill="#1d1d1b" font-family="WolpePegasus-Italic, Wolpe Pegasus" font-style="italic"> </text><text transform="matrix(0.66, -0.75, 0.75, 0.66, 103.47, 200.99)" font-size="27.77" fill="#1d1d1b" font-family="WolpePegasus-Italic, Wolpe Pegasus" font-style="italic"> </text><text transform="translate(159.65 136.47) rotate(-36.58)" font-size="27.77" fill="#1d1d1b" font-family="WolpePegasus-Italic, Wolpe Pegasus" font-style="italic"> </text><text transform="translate(228.14 85.17) rotate(-24.57)" font-size="27.77" fill="#1d1d1b" font-family="WolpePegasus-Italic, Wolpe Pegasus" font-style="italic"> </text><text transform="translate(305.84 49.49) rotate(-13.04)" font-size="27.77" fill="#1d1d1b" font-family="WolpePegasus-Italic, Wolpe Pegasus" font-style="italic"> </text><text transform="matrix(1, -0.03, 0.03, 1, 389.17, 30.37)" font-size="27.77" fill="#1d1d1b" font-family="WolpePegasus-Italic, Wolpe Pegasus" font-style="italic"> </text><text transform="matrix(0.98, 0.19, -0.19, 0.98, 474.66, 28.41)" font-size="27.77" fill="#1d1d1b" font-family="WolpePegasus-Italic, Wolpe Pegasus" font-style="italic"> </text><text transform="matrix(0.92, 0.38, -0.38, 0.92, 558.66, 44.38)" font-size="27.77" fill="#1d1d1b" font-family="WolpePegasus-Italic, Wolpe Pegasus" font-style="italic"> </text><text transform="translate(636.44 79.07) rotate(28.69)" font-size="27.77" fill="#1d1d1b" font-family="WolpePegasus-Italic, Wolpe Pegasus" font-style="italic"> </text><text transform="translate(641.16 81.68) rotate(29.37)" font-size="27.77" fill="#1d1d1b" font-family="WolpePegasus-Italic, Wolpe Pegasus" font-style="italic"> </text><text transform="matrix(0.87, 0.5, -0.5, 0.87, 645.84, 84.34)" font-size="27.77" fill="#1d1d1b" font-family="WolpePegasus-Italic, Wolpe Pegasus" font-style="italic"> </text><text transform="matrix(0.85, 0.52, -0.52, 0.85, 650.5, 87.05)" font-size="27.77" fill="#1d1d1b" font-family="WolpePegasus-Italic, Wolpe Pegasus" font-style="italic"> </text><text transform="translate(655.1 89.84) rotate(32.11)" font-size="27.77" fill="#1d1d1b" font-family="WolpePegasus-Italic, Wolpe Pegasus" font-style="italic"> </text><text transform="matrix(0.84, 0.54, -0.54, 0.84, 659.68, 92.69)" font-size="27.77" fill="#1d1d1b" font-family="WolpePegasus-Italic, Wolpe Pegasus" font-style="italic"> </text><text transform="translate(664.21 95.59) rotate(33.48)" font-size="27.77" fill="#1d1d1b" font-family="WolpePegasus-Italic, Wolpe Pegasus" font-style="italic"> </text><text transform="translate(668.71 98.56) rotate(34.16)" font-size="27.77" fill="#1d1d1b" font-family="WolpePegasus-Italic, Wolpe Pegasus" font-style="italic"> </text><text transform="matrix(0.82, 0.57, -0.57, 0.82, 673.16, 101.58)" font-size="27.77" fill="#1d1d1b" font-family="WolpePegasus-Italic, Wolpe Pegasus" font-style="italic"> </text><text transform="matrix(0.81, 0.58, -0.58, 0.81, 677.58, 104.66)" font-size="27.77" fill="#1d1d1b" font-family="WolpePegasus-Italic, Wolpe Pegasus" font-style="italic"> </text><text transform="matrix(0.81, 0.59, -0.59, 0.81, 681.96, 107.8)" font-size="27.77" fill="#1d1d1b" font-family="WolpePegasus-Italic, Wolpe Pegasus" font-style="italic"> </text><text transform="translate(686.3 111) rotate(36.89)" font-size="27.77" fill="#1d1d1b" font-family="WolpePegasus-Italic, Wolpe Pegasus" font-style="italic"> </text><text transform="matrix(0.79, 0.61, -0.61, 0.79, 690.59, 114.25)" font-size="27.77" fill="#1d1d1b" font-family="WolpePegasus-Italic, Wolpe Pegasus" font-style="italic"> </text><text transform="matrix(0.79, 0.62, -0.62, 0.79, 694.85, 117.56)" font-size="27.77" fill="#1d1d1b" font-family="WolpePegasus-Italic, Wolpe Pegasus" font-style="italic"> </text><text transform="translate(699.07 120.89) rotate(39.63)" font-size="27.77" fill="#1d1d1b" font-family="WolpePegasus-Italic, Wolpe Pegasus" font-style="italic"> </text><text transform="translate(703.23 124.31) rotate(40.31)" font-size="27.77" fill="#1d1d1b" font-family="WolpePegasus-Italic, Wolpe Pegasus" font-style="italic"> </text><text transform="matrix(0.75, 0.66, -0.66, 0.75, 707.35, 127.79)" font-size="27.77" fill="#1d1d1b" font-family="WolpePegasus-Italic, Wolpe Pegasus" font-style="italic"> </text><text transform="translate(711.43 131.31) rotate(41.68)" font-size="27.77" fill="#1d1d1b" font-family="WolpePegasus-Italic, Wolpe Pegasus" font-style="italic"> </text><text transform="matrix(0.74, 0.67, -0.67, 0.74, 715.46, 134.89)" font-size="27.77" fill="#1d1d1b" font-family="WolpePegasus-Italic, Wolpe Pegasus" font-style="italic"> </text><text transform="translate(719.43 138.52) rotate(43.05)" font-size="27.77" fill="#1d1d1b" font-family="WolpePegasus-Italic, Wolpe Pegasus" font-style="italic"> </text><text transform="translate(723.37 142.2) rotate(43.74)" font-size="27.77" fill="#1d1d1b" font-family="WolpePegasus-Italic, Wolpe Pegasus" font-style="italic"> </text><text transform="translate(727.25 145.93) rotate(44.43)" font-size="27.77" fill="#1d1d1b" font-family="WolpePegasus-Italic, Wolpe Pegasus" font-style="italic"> </text><text transform="matrix(0.71, 0.71, -0.71, 0.71, 731.09, 149.72)" font-size="27.77" fill="#1d1d1b" font-family="WolpePegasus-Italic, Wolpe Pegasus" font-style="italic"> </text><text transform="translate(734.87 153.55) rotate(45.8)" font-size="27.77" fill="#1d1d1b" font-family="WolpePegasus-Italic, Wolpe Pegasus" font-style="italic"> </text><text transform="translate(738.61 157.43) rotate(46.49)" font-size="27.77" fill="#1d1d1b" font-family="WolpePegasus-Italic, Wolpe Pegasus" font-style="italic"> </text><text transform="translate(742.32 161.34) rotate(47.87)" font-size="27.77" fill="#1d1d1b" font-family="WolpePegasus-Italic, Wolpe Pegasus" font-style="italic"> </text><text transform="matrix(0.66, 0.75, -0.75, 0.66, 745.95, 165.31)" font-size="27.77" fill="#1d1d1b" font-family="WolpePegasus-Italic, Wolpe Pegasus" font-style="italic"> </text><text transform="translate(749.53 169.34) rotate(49.25)" font-size="27.77" fill="#1d1d1b" font-family="WolpePegasus-Italic, Wolpe Pegasus" font-style="italic"> </text><text transform="translate(753.05 173.41) rotate(49.95)" font-size="27.77" fill="#1d1d1b" font-family="WolpePegasus-Italic, Wolpe Pegasus" font-style="italic"> </text><text transform="translate(756.52 177.53) rotate(50.64)" font-size="27.77" fill="#1d1d1b" font-family="WolpePegasus-Italic, Wolpe Pegasus" font-style="italic"> </text><text transform="matrix(0.62, 0.78, -0.78, 0.62, 759.94, 181.7)" font-size="27.77" fill="#1d1d1b" font-family="WolpePegasus-Italic, Wolpe Pegasus" font-style="italic"> </text><text transform="translate(763.31 185.9) rotate(52.03)" font-size="27.77" fill="#1d1d1b" font-family="WolpePegasus-Italic, Wolpe Pegasus" font-style="italic"> </text><text transform="translate(766.62 190.15) rotate(52.73)" font-size="27.77" fill="#1d1d1b" font-family="WolpePegasus-Italic, Wolpe Pegasus" font-style="italic"> </text><text transform="translate(769.87 194.45) rotate(53.42)" font-size="27.77" fill="#1d1d1b" font-family="WolpePegasus-Italic, Wolpe Pegasus" font-style="italic"> </text><text transform="translate(773.07 198.78) rotate(54.12)" font-size="27.77" fill="#1d1d1b" font-family="WolpePegasus-Italic, Wolpe Pegasus" font-style="italic"> </text><text transform="translate(776.2 203.16) rotate(54.82)" font-size="27.77" fill="#1d1d1b" font-family="WolpePegasus-Italic, Wolpe Pegasus" font-style="italic"> </text><text transform="translate(779.29 207.58) rotate(55.52)" font-size="27.77" fill="#1d1d1b" font-family="WolpePegasus-Italic, Wolpe Pegasus" font-style="italic"> </text><text transform="matrix(0.54, 0.84, -0.84, 0.54, 782.41, 211.97)" font-size="27.77" fill="#1d1d1b" font-family="WolpePegasus-Italic, Wolpe Pegasus" font-style="italic">R</text><text transform="translate(790.62 224.92) rotate(59.04)" font-size="27.77" fill="#1d1d1b" font-family="WolpePegasus-Italic, Wolpe Pegasus" font-style="italic">o</text><text transform="translate(796.8 235.21) rotate(61.16)" font-size="27.77" fill="#1d1d1b" font-family="WolpePegasus-Italic, Wolpe Pegasus" font-style="italic">u</text><text transform="translate(803.12 246.72) rotate(62.58)" font-size="27.77" fill="#1d1d1b" font-family="WolpePegasus-Italic, Wolpe Pegasus" font-style="italic">n</text><text transform="matrix(0.43, 0.9, -0.9, 0.43, 809.31, 258.74)" font-size="27.77" fill="#1d1d1b" font-family="WolpePegasus-Italic, Wolpe Pegasus" font-style="italic">d</text><text transform="translate(814.8 270.43) rotate(66.14)" font-size="27.77" fill="#1d1d1b" font-family="WolpePegasus-Italic, Wolpe Pegasus" font-style="italic"> </text><text transform="translate(817.06 275.32) rotate(67.58)" font-size="27.77" fill="#1d1d1b" font-family="WolpePegasus-Italic, Wolpe Pegasus" font-style="italic">1</text><text transform="translate(822.65 286.58) rotate(71.89)" font-size="27.77" fill="#1d1d1b" font-family="WolpePegasus-Italic, Wolpe Pegasus" font-style="italic"> </text><text transform="translate(841.53 340.46) rotate(82.04)" font-size="27.77" fill="#1d1d1b" font-family="WolpePegasus-Italic, Wolpe Pegasus" font-style="italic"> </text><text transform="translate(853.39 425.13) rotate(93.57)" font-size="27.77" fill="#1d1d1b" font-family="WolpePegasus-Italic, Wolpe Pegasus" font-style="italic"> </text><text transform="translate(847.82 510.45) rotate(105.58)" font-size="27.77" fill="#1d1d1b" font-family="WolpePegasus-Italic, Wolpe Pegasus" font-style="italic"> </text><text transform="translate(824.59 592.72) rotate(117.32)" font-size="27.77" fill="#1d1d1b" font-family="WolpePegasus-Italic, Wolpe Pegasus" font-style="italic"> </text><text transform="matrix(-0.64, 0.77, -0.77, -0.64, 785.32, 668.73)" font-size="27.77" fill="#1d1d1b" font-family="WolpePegasus-Italic, Wolpe Pegasus" font-style="italic"> </text><text transform="translate(730.98 734.79) rotate(141.34)" font-size="27.77" fill="#1d1d1b" font-family="WolpePegasus-Italic, Wolpe Pegasus" font-style="italic"> </text><text transform="matrix(-0.89, 0.45, -0.45, -0.89, 664.3, 788.38)" font-size="27.77" fill="#1d1d1b" font-family="WolpePegasus-Italic, Wolpe Pegasus" font-style="italic"> </text><text transform="translate(587.88 826.69) rotate(164.79)" font-size="27.77" fill="#1d1d1b" font-family="WolpePegasus-Italic, Wolpe Pegasus" font-style="italic"> </text><text transform="translate(393.43 869.78) rotate(6.2)" font-size="29.15" font-family="WolpePegasus-Italic, Wolpe Pegasus" font-style="italic"> </text><text transform="translate(399.05 870.39) rotate(4.82)" font-size="29.15" font-family="WolpePegasus-Italic, Wolpe Pegasus" font-style="italic"> </text><text transform="matrix(1, 0.06, -0.06, 1, 404.67, 870.98)" font-size="29.15" font-family="WolpePegasus-Italic, Wolpe Pegasus" font-style="italic">R</text><text transform="translate(420.73 871.93) rotate(2.05)" font-size="29.15" font-family="WolpePegasus-Italic, Wolpe Pegasus" font-style="italic">o</text><text transform="matrix(1, 0, 0, 1, 433.32, 872.37)" font-size="29.15" font-family="WolpePegasus-Italic, Wolpe Pegasus" font-style="italic">u</text><text transform="translate(447.11 872.42) rotate(-2.12)" font-size="29.15" font-family="WolpePegasus-Italic, Wolpe Pegasus" font-style="italic">n</text><text transform="translate(461.29 871.9) rotate(-3.52)" font-size="29.15" font-family="WolpePegasus-Italic, Wolpe Pegasus" font-style="italic">d</text><text transform="translate(474.81 871.01) rotate(-4.92)" font-size="29.15" font-family="WolpePegasus-Italic, Wolpe Pegasus" font-style="italic"> </text><text transform="translate(480.45 870.58) rotate(-6.33)" font-size="29.15" font-family="WolpePegasus-Italic, Wolpe Pegasus" font-style="italic">2</text><text transform="translate(493.77 870.65) rotate(-12)" font-size="29.15" font-family="WolpePegasus-Italic, Wolpe Pegasus" font-style="italic"> </text><text transform="matrix(0.93, -0.38, 0.38, 0.93, 562.78, 856.73)" font-size="29.15" font-family="WolpePegasus-Italic, Wolpe Pegasus" font-style="italic"> </text><text transform="translate(641.85 824.35) rotate(-32.94)" font-size="29.15" font-family="WolpePegasus-Italic, Wolpe Pegasus" font-style="italic"> </text><text transform="matrix(0.71, -0.7, 0.7, 0.71, 713.33, 777.52)" font-size="29.15" font-family="WolpePegasus-Italic, Wolpe Pegasus" font-style="italic"> </text><text transform="matrix(0.55, -0.83, 0.83, 0.55, 774.46, 717.68)" font-size="29.15" font-family="WolpePegasus-Italic, Wolpe Pegasus" font-style="italic"> </text><text transform="translate(822.03 646.63) rotate(-67.37)" font-size="29.15" font-family="WolpePegasus-Italic, Wolpe Pegasus" font-style="italic"> </text><text transform="translate(854.76 567.7) rotate(-78.31)" font-size="29.15" font-family="WolpePegasus-Italic, Wolpe Pegasus" font-style="italic"> </text><text transform="translate(872.02 483.94) rotate(-90.03)" font-size="29.15" font-family="WolpePegasus-Italic, Wolpe Pegasus" font-style="italic"> </text><g clip-path="url(#clip-path)"><circle cx="440.58" cy="440.58" r="440.1" fill="none" stroke="#000" stroke-width="0.96"/></g><text transform="translate(76.32 423.2) rotate(-84.89)" font-size="26.89" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700">A</text><text transform="translate(78.15 404.47) rotate(-82.74)" font-size="26.89" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700">s</text><text transform="matrix(0.16, -0.99, 0.99, 0.16, 79.45, 394.38)" font-size="26.89" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700">c</text><text transform="translate(81.27 383.46) rotate(-79.13)" font-size="26.89" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700">e</text><text transform="translate(83.63 371.32) rotate(-76.96)" font-size="26.89" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700">n</text><text transform="translate(86.98 357.11) rotate(-74.79)" font-size="26.89" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700">d</text><text transform="translate(90.97 342.81) rotate(-72.61)" font-size="26.89" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700">a</text><text transform="translate(94.76 330.81) rotate(-70.44)" font-size="26.89" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700">n</text><text transform="matrix(0.37, -0.93, 0.93, 0.37, 99.69, 317.07)" font-size="26.89" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700">t</text><text transform="translate(102.27 308.44) rotate(-63.92)" font-size="26.89" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700"> </text><text transform="matrix(0.52, -0.86, 0.86, 0.52, 126.26, 261.82)" font-size="26.89" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700"> </text><text transform="matrix(0.53, -0.85, 0.85, 0.53, 129.32, 256.75)" font-size="26.89" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700"> </text><text transform="matrix(0.56, -0.83, 0.83, 0.56, 132.48, 251.43)" font-size="26.89" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700">D</text><text transform="translate(143.4 235.28) rotate(-53.2)" font-size="26.89" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700">e</text><text transform="matrix(0.62, -0.79, 0.79, 0.62, 150.93, 225.19)" font-size="26.89" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700">c</text><text transform="matrix(0.65, -0.76, 0.76, 0.65, 157.77, 216.48)" font-size="26.89" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700">e</text><text transform="matrix(0.67, -0.74, 0.74, 0.67, 165.74, 207.02)" font-size="26.89" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700">n</text><text transform="matrix(0.7, -0.71, 0.71, 0.7, 175.59, 196.24)" font-size="26.89" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700">d</text><text transform="matrix(0.73, -0.69, 0.69, 0.73, 186.04, 185.7)" font-size="26.89" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700">a</text><text transform="translate(195.2 177.08) rotate(-41.31)" font-size="26.89" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700">n</text><text transform="translate(206.23 167.5) rotate(-39.24)" font-size="26.89" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700">t</text><text transform="matrix(0.79, -0.61, 0.61, 0.79, 213.14, 161.86)" font-size="26.89" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700"> </text><text transform="translate(217.61 157.95) rotate(-35.12)" font-size="26.89" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700"> </text><text transform="translate(243.43 140.19) rotate(-32.38)" font-size="26.89" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700"> </text><text transform="translate(248.42 137.01) rotate(-31.01)" font-size="26.89" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700"> </text><text transform="matrix(0.86, -0.5, 0.5, 0.86, 253.48, 133.95)" font-size="26.89" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700"> </text><text transform="matrix(0.87, -0.49, 0.49, 0.87, 258.59, 130.97)" font-size="26.89" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700"> </text><text transform="matrix(0.88, -0.47, 0.47, 0.88, 263.73, 128.04)" font-size="26.89" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700"> </text><text transform="translate(268.93 125.22) rotate(-27.59)" font-size="26.89" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700"> </text><text transform="translate(274.18 122.49) rotate(-26.91)" font-size="26.89" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700"> </text><text transform="translate(279.45 119.81) rotate(-25.54)" font-size="26.89" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700"> </text><text transform="matrix(0.91, -0.42, 0.42, 0.91, 284.78, 117.25)" font-size="26.89" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700"> </text><text transform="translate(290.16 114.77) rotate(-24.18)" font-size="26.89" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700"> </text><text transform="translate(295.47 112.16) rotate(-21.44)" font-size="26.89" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700">M</text><text transform="translate(318.07 103.41) rotate(-18.7)" font-size="26.89" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700">o</text><text transform="translate(331.5 98.91) rotate(-16.64)" font-size="26.89" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700">o</text><text transform="translate(344.88 94.9) rotate(-13.88)" font-size="26.89" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700">n</text><text transform="matrix(0.99, -0.17, 0.17, 0.99, 358.95, 90.86)" font-size="26.89" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700"> </text><text transform="matrix(1, 0.01, -0.01, 1, 402.68, 81.52)" font-size="26.89" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700"> </text><text transform="translate(487.77 85.15) rotate(7.98)" font-size="26.89" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700"> </text><text transform="translate(493.62 85.97) rotate(8.7)" font-size="26.89" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700"> </text><text transform="translate(499.48 86.85) rotate(10.14)" font-size="26.89" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700">S</text><text transform="translate(513.07 89.34) rotate(12.31)" font-size="26.89" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700">u</text><text transform="translate(527.26 92.42) rotate(15.21)" font-size="26.89" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700">n</text><text transform="matrix(0.95, 0.31, -0.31, 0.95, 541.42, 96.05)" font-size="26.89" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700"> </text><text transform="matrix(0.89, 0.46, -0.46, 0.89, 571.34, 103.5)" font-size="26.89" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700"> </text><text transform="translate(645.75 144.93) rotate(34.67)" font-size="26.89" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700"> </text><text transform="translate(650.62 148.29) rotate(35.38)" font-size="26.89" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700"> </text><text transform="translate(655.43 151.73) rotate(36.09)" font-size="26.89" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700"> </text><text transform="matrix(0.78, 0.63, -0.63, 0.78, 660.33, 155.06)" font-size="26.89" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700">M</text><text transform="translate(679.1 170.38) rotate(41.73)" font-size="26.89" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700">e</text><text transform="translate(688.35 178.59) rotate(43.83)" font-size="26.89" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700">r</text><text transform="translate(695.9 185.79) rotate(45.22)" font-size="26.89" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700">c</text><text transform="matrix(0.68, 0.73, -0.73, 0.68, 703.74, 193.62)" font-size="26.89" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700">u</text><text transform="matrix(0.65, 0.76, -0.76, 0.65, 713.59, 204.29)" font-size="26.89" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700">r</text><text transform="translate(720.91 212.83) rotate(50.76)" font-size="26.89" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700">y</text><text transform="matrix(0.56, 0.83, -0.83, 0.56, 729.23, 221.53)" font-size="26.89" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700"> </text><text transform="translate(759.83 269.46) rotate(61.04)" font-size="26.89" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700"> </text><text transform="translate(762.69 274.64) rotate(62.41)" font-size="26.89" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700"> </text><text transform="translate(765.44 279.88) rotate(63.09)" font-size="26.89" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700"> </text><text transform="translate(768.1 285.16) rotate(63.77)" font-size="26.89" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700"> </text><text transform="matrix(0.42, 0.91, -0.91, 0.42, 770.7, 290.47)" font-size="26.89" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700"> </text><text transform="matrix(0.41, 0.91, -0.91, 0.41, 773.19, 295.84)" font-size="26.89" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700"> </text><text transform="translate(775.71 301.19) rotate(67.88)" font-size="26.89" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700">V</text><text transform="translate(781.74 315.99) rotate(69.93)" font-size="26.89" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700">e</text><text transform="translate(786.02 327.6) rotate(71.99)" font-size="26.89" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700">n</text><text transform="matrix(0.27, 0.96, -0.96, 0.27, 790.45, 341.28)" font-size="26.89" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700">u</text><text transform="translate(794.39 355.25) rotate(76.12)" font-size="26.89" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700">s</text><text transform="translate(798.42 364.86) rotate(82.37)" font-size="26.89" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700"> </text><text transform="translate(808.47 432.04) rotate(94.39)" font-size="26.89" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700"> </text><line x1="440.73" y1="1.61" x2="440.73" y2="440.57" fill="none" stroke="#1d1d1b" stroke-width="6"/><line x1="442.71" y1="442.38" x2="442.71" y2="846.03" fill="none" stroke="#000" stroke-width="0.33"/><line x1="440.71" y1="442.38" x2="440.71" y2="846.03" fill="none" stroke="#000" stroke-width="0.33"/><line x1="438.76" y1="442.38" x2="438.76" y2="846.03" fill="none" stroke="#000" stroke-width="0.33"/><line x1="842" y1="446.06" x2="39.99" y2="446.06" fill="none" stroke="#000" stroke-width="0.33"/><line x1="842" y1="444.06" x2="39.99" y2="444.06" fill="none" stroke="#000" stroke-width="0.33"/><line x1="842" y1="442.11" x2="39.99" y2="442.11" fill="none" stroke="#000" stroke-width="0.33"/><line x1="663.26" y1="105.1" x2="223.8" y2="781.81" fill="none" stroke="#000" stroke-width="0.33"/><line x1="661.59" y1="104.01" x2="222.13" y2="780.73" fill="none" stroke="#000" stroke-width="0.33"/><line x1="659.96" y1="102.95" x2="220.49" y2="779.67" fill="none" stroke="#000" stroke-width="0.33"/><line x1="438.49" y1="445.14" x2="87.2" y2="246.39" fill="none" stroke="#000" stroke-width="0.33"/><line x1="439.47" y1="443.4" x2="88.18" y2="244.65" fill="none" stroke="#000" stroke-width="0.33"/><line x1="440.43" y1="441.7" x2="89.14" y2="242.95" fill="none" stroke="#000" stroke-width="0.33"/><line x1="790.69" y1="641.75" x2="726.7" y2="605.55" fill="none" stroke="#1d1d1b" stroke-width="2.23"/><line x1="642.06" y1="789.82" x2="234.63" y2="98.14" fill="none" stroke="#000" stroke-width="0.33"/><line x1="643.78" y1="788.8" x2="236.35" y2="97.12" fill="none" stroke="#000" stroke-width="0.33"/><line x1="645.46" y1="787.82" x2="238.03" y2="96.13" fill="none" stroke="#000" stroke-width="0.33"/><line x1="51.78" y1="646.62" x2="442.42" y2="443.26" fill="none" stroke="#1d1d1b" stroke-width="6"/><g clip-path="url(#clip-path)"><path d="M631.63,164.7a16.59,16.59,0,1,0-16.57-16.87,16.57,16.57,0,0,0,16.57,16.87m0-36.38a19.92,19.92,0,1,1-19.95,19.93,19.92,19.92,0,0,1,19.95-19.93" transform="translate(-58.96 -52.44)" fill="#1d1d1b"/><path d="M631.65,143.69a4.43,4.43,0,1,1-4.44,4.43,4.44,4.44,0,0,1,4.44-4.43" transform="translate(-58.96 -52.44)" fill="#1d1d1b"/><path d="M435.43,113.62c7,3.63,10.78,8.89,11.11,16-.08,7.09-3.68,12.48-10.49,16.32,6.07.3,13.19-2.21,17.12-8.18a14.36,14.36,0,0,0-1.47-18c-4.14-4.5-9.61-6.45-16.27-6.14m2.31,34.61a25.26,25.26,0,0,1-6.58-.68,1.23,1.23,0,0,1-1.05-1.08,1.16,1.16,0,0,1,.94-1.16,20,20,0,0,0,5.57-2.58,16.4,16.4,0,0,0,6.55-8.42,13.65,13.65,0,0,0,.64-5.84,15.05,15.05,0,0,0-5-9.66,18.79,18.79,0,0,0-8.13-4.35c-.6-.16-1-.43-1.13-1a1.07,1.07,0,0,1,.77-1.19c.8-.23,1.61-.44,2.43-.6a22.52,22.52,0,0,1,4.1-.4,23.06,23.06,0,0,1,13.36,3.94,18,18,0,0,1,7.54,10.31,15.42,15.42,0,0,1,.5,5.23,16.94,16.94,0,0,1-4.71,10.58,21.4,21.4,0,0,1-9.94,6,23.76,23.76,0,0,1-5.86.93" transform="translate(-58.96 -52.44)" fill="#1d1d1b"/><path d="M807.5,296a7.91,7.91,0,1,0-7.9-8.29,7.89,7.89,0,0,0,7.9,8.29m1.25,8.32v1.88a.94.94,0,0,1-.94.94h-.71a.82.82,0,0,1-.82-.82v-2a.05.05,0,0,0-.06-.06h-2a.88.88,0,0,1-.87-.88v-.6a1,1,0,0,1,1-1h1.82s.07,0,.07-.06v-3.22s0-.05-.06-.06a10.44,10.44,0,0,1-8.81-7.94h0c-1-5.17.94-9,5.34-11.7a.06.06,0,0,0,0-.1,8.94,8.94,0,0,1-4-5.83.81.81,0,0,1,.72-1l.61-.06a1,1,0,0,1,1.16.76,6.33,6.33,0,0,0,2.17,3.52,6.49,6.49,0,0,0,10.44-3.43,1.12,1.12,0,0,1,1.2-.84l.31,0a1,1,0,0,1,.93,1.24,9,9,0,0,1-4,5.61.06.06,0,0,0,0,.1c4.41,2.76,6.29,6.64,5.22,11.84h0a10.46,10.46,0,0,1-8.76,7.76.06.06,0,0,0-.05.06v3.2s0,.07.06.07h1.68a1.11,1.11,0,0,1,1.11,1.11v.24a1.13,1.13,0,0,1-1.13,1.13h-1.68a.06.06,0,0,0-.06.06" transform="translate(-58.96 -52.44)" fill="#1d1d1b"/><path d="M878.73,446A10.65,10.65,0,1,0,868,456.61,10.63,10.63,0,0,0,878.73,446m-17.07,22.6v-3a.36.36,0,0,1,.37-.36h4a.37.37,0,0,0,.37-.37v-4a1.15,1.15,0,0,0-.93-1.13,14,14,0,1,1,5.06,0,.9.9,0,0,0-.73.9v4.17a.36.36,0,0,0,.36.36h4a.37.37,0,0,1,.37.37v3l-1,0h-3.36c-.25,0-.34.07-.34.33,0,1.45,0,2.54,0,4v.72c0,.45-3.36.41-3.36,0v-.85c0-1.45,0-2.39,0-3.83,0-.3-.1-.36-.37-.36" transform="translate(-58.96 -52.44)" fill="#1d1d1b"/><path d="M861.76,561.94a10.89,10.89,0,0,0,10.93-11.09,10.93,10.93,0,1,0-10.93,11.09m16.13-29.49h-5.18v-3.39h11v11h-3.38V535c-2.41,2.41-4.82,4.81-7.24,7.24.19.27.43.6.66.94A13.78,13.78,0,0,1,876,549.5a14.11,14.11,0,0,1-3.45,10.94,13.69,13.69,0,0,1-8.2,4.68,14,14,0,0,1-11.93-3.21,13.64,13.64,0,0,1-4.72-8,14,14,0,0,1,2.73-11.69,13.75,13.75,0,0,1,8.21-5.19,14.11,14.11,0,0,1,11.71,2.52c.16.12.26.2.44,0l6.89-6.9.19-.21" transform="translate(-58.96 -52.44)" fill="#1d1d1b"/><path d="M783.48,725.23l0-.86a1,1,0,0,1,1-1H785a9.11,9.11,0,0,0,5.33-1.93,13.6,13.6,0,0,0,4.71-7,12,12,0,0,0,.53-4.72,5.92,5.92,0,0,0-1.67-3.78,4.89,4.89,0,0,0-3.5-1.37,5.74,5.74,0,0,0-5.19,4,4.13,4.13,0,0,0,.15,2.46,1.74,1.74,0,0,0,.33.54,1.61,1.61,0,0,1,.46,1.18l0,.83a.81.81,0,0,1-1.08.76h0c-1.82-.72-2.55-2.43-2.66-4.51a6.83,6.83,0,0,1,1.46-4.55A8.38,8.38,0,0,1,789,702a7.48,7.48,0,0,1,6.31,1.53,8.1,8.1,0,0,1,2.89,5.12,12.38,12.38,0,0,1,.15,3.27,16.69,16.69,0,0,1-1.57,5.71,16.44,16.44,0,0,1-3.29,4.75c-.33.33-.68.64-1,1a.12.12,0,0,0,.07.21l8.59.15a.12.12,0,0,0,.12-.12l.34-19.49a1.47,1.47,0,0,1,1.5-1.44,1.28,1.28,0,0,1,1.26,1.3l-.35,19.7a.12.12,0,0,0,.12.12l2.69.05a.77.77,0,0,1,.76.79,2,2,0,0,1-2,1.93l-1.49,0a.13.13,0,0,0-.13.12l-.08,5a1.2,1.2,0,0,1-1.21,1.16h-.46a1.09,1.09,0,0,1-1.07-1.11l.08-5.12a.12.12,0,0,0-.12-.12l-16.66-.29a.93.93,0,0,1-.92-.95" transform="translate(-58.96 -52.44)" fill="#1d1d1b"/><path d="M638.12,847.25l-2.27,0a.33.33,0,0,1-.35-.33l-.34-19.36a.34.34,0,0,0-.34-.33l-2.31,0a.34.34,0,0,1-.35-.33l0-2a.32.32,0,0,1,.33-.34l2.3,0a.35.35,0,0,0,.33-.35l0-2.19a.35.35,0,0,1,.33-.35l2,0a.34.34,0,0,1,.34.33l0,2.17a.33.33,0,0,0,.35.33l4.25-.07a.34.34,0,0,1,.35.33l0,2a.35.35,0,0,1-.34.35l-4.23.07a.33.33,0,0,0-.33.35l.06,3.47a.33.33,0,0,0,.55.25A10,10,0,0,1,640.6,830a8.89,8.89,0,0,1,2.9-.85,6.16,6.16,0,0,1,4.31.91,7.22,7.22,0,0,1,2.65,3.46,10.57,10.57,0,0,1,.72,4.51,14.57,14.57,0,0,1-3.87,9.27,7.71,7.71,0,0,0-1.84,2.92,3.27,3.27,0,0,0-.17,1.55,1.5,1.5,0,0,0,1.24,1.06.61.61,0,0,0,.35-.11c.35-.28.68-.58,1-.88a3.33,3.33,0,0,0,.36-.39l1.18,1.15a1,1,0,0,1,0,1.44,4.57,4.57,0,0,1-2.32,1.39,3.51,3.51,0,0,1-2.77-.71,3.84,3.84,0,0,1-1.72-3.64,8.45,8.45,0,0,1,2.21-5,16.72,16.72,0,0,0,2.12-2.76,13.12,13.12,0,0,0,1.51-4.68,8.11,8.11,0,0,0-.93-5.09,3.29,3.29,0,0,0-2.57-1.82,6.32,6.32,0,0,0-2.79.37,7.63,7.63,0,0,0-3.93,3.41,2.35,2.35,0,0,0-.32,1.32c.08,3.38.13,6.77.19,10.15,0,.08,0,.16,0,.25" transform="translate(-58.96 -52.44)" fill="#1d1d1b"/><path d="M442.07,874.33a3.09,3.09,0,1,0-3.13-3,3.05,3.05,0,0,0,3.13,3m-1.83-17-3.08.06a.14.14,0,0,0-.14.12,10,10,0,0,1-5.06,7.26,9.44,9.44,0,0,1-4,1.24.61.61,0,0,1-.67-.6l0-1.86a.62.62,0,0,1,.54-.62,7,7,0,0,0,6.26-7.44,7,7,0,0,0-6.44-6.43.68.68,0,0,1-.62-.66l0-1.83a.56.56,0,0,1,.6-.58,9.75,9.75,0,0,1,6,2.3,10,10,0,0,1,3.48,5.88.15.15,0,0,0,.15.12l2.94-.05a.15.15,0,0,0,.14-.16l-.12-6.77a.8.8,0,0,1,.78-.8l1.57,0a.73.73,0,0,1,.74.71l.11,6.83a.16.16,0,0,0,.16.15l2.94-.05a.14.14,0,0,0,.14-.12,10,10,0,0,1,4.47-6.92,9.49,9.49,0,0,1,3.42-1.42,1.59,1.59,0,0,1,1.9,1.53,1.48,1.48,0,0,1-1.21,1.48A6.85,6.85,0,0,0,450.5,852a6.57,6.57,0,0,0-1,4.28,7,7,0,0,0,5.71,6.18,1.6,1.6,0,0,1,1.35,1.54v.18a1.34,1.34,0,0,1-1.5,1.36,9.85,9.85,0,0,1-5.05-2.22,10,10,0,0,1-3.47-5.88.15.15,0,0,0-.15-.12l-3.09.05c0,.09,0,.17,0,.25,0,2.48.09,5,.12,7.44,0,.2.07.26.25.32a5.93,5.93,0,0,1,4.42,4.94,6.13,6.13,0,0,1-4.8,7,6.19,6.19,0,0,1-7.38-4.92,6.46,6.46,0,0,1,4.52-7.08" transform="translate(-58.96 -52.44)" fill="#1d1d1b"/><path d="M274.66,796.51c-1-.12-2-.2-2.9-.37a8,8,0,0,1-4-1.85,8.76,8.76,0,0,1-2.58-4.34,21.42,21.42,0,0,1-.75-6.22c0-1.69.15-3.38.23-5.06,0-.29,0-.58.07-.94l-1.45,1.21a.55.55,0,0,1-.81-.11l-.91-1.23a.65.65,0,0,1,.1-.87L266,773.1a.74.74,0,0,1,1.08.15l3.38,4.75a.6.6,0,0,1-.1.8l-1.21,1a.56.56,0,0,1-.82-.12l-1-1.38c-.06.73-.14,1.38-.16,2,0,1.52-.11,3-.08,4.56a15.18,15.18,0,0,0,.87,5,5,5,0,0,0,3.79,3.37,26.35,26.35,0,0,0,2.67.36h.16l-.22-12.32s0,0,0,0l-1.11,1.13a.77.77,0,0,1-1.1,0l-.89-.88a.69.69,0,0,1,0-.92l3.82-4.38a.62.62,0,0,1,.92,0l4,4.2a.59.59,0,0,1,0,.82l-1,1.11a.53.53,0,0,1-.79,0l-1-1.09-.1,0,.21,12.29,1.3-.14a8.77,8.77,0,0,0,2.5-.69,5.24,5.24,0,0,0,2.81-3.55,13.21,13.21,0,0,0,.53-3.59c0-1.42,0-2.83-.08-4.24a30.8,30.8,0,0,0-.37-3.12l-1,1.46a.55.55,0,0,1-.8.13l-1.24-1a.6.6,0,0,1-.12-.8l3.41-5A.51.51,0,0,1,285,773l4.65,3.73a.57.57,0,0,1,.11.78l-1,1.35a.49.49,0,0,1-.73.11l-1.42-1.12c.09.8.1.85.26,2.54a40.64,40.64,0,0,1,.2,4.13,19.87,19.87,0,0,1-.69,5.64,7.92,7.92,0,0,1-5.68,5.76,15.06,15.06,0,0,1-3.19.52h-.2c0,1.33.05,2.64.07,4l4.27-.07a.61.61,0,0,1,.6.61l0,1.59a.56.56,0,0,1-.53.59l-4.32.07v.39c0,1.56.05,2.94.09,4.5a.51.51,0,0,1-.45.49c-.69,0-1.05,0-1.73,0a.52.52,0,0,1-.47-.5c0-1.57-.05-2.94-.08-4.51,0-.1,0-.2,0-.33l-4.15.07a.77.77,0,0,1-.75-.77l0-1.25a.74.74,0,0,1,.7-.77l4.16-.07Z" transform="translate(-58.96 -52.44)" fill="#1d1d1b"/><path d="M160.09,638.14h-5.44c-1,0-1,0-1,1v6.53h-2.85c-.46,0-.46,0-.46-.44v-7H144a1,1,0,0,1-.95-1v-1.36a.94.94,0,0,1,.95-1h6.37c.07,0,0-.29,0-.39,0-2.13,0-4.21,0-6.35,0-.27-.07-.34-.36-.38a15.24,15.24,0,0,1-12.9-12.29,8.36,8.36,0,0,1-.25-2.24c0-.68.31-.6.32-.68l2.1,0a.83.83,0,0,1,.84.77,11.9,11.9,0,0,0,4.88,8.92,11.44,11.44,0,0,0,7.9,2.3,12,12,0,0,0,11-11.11,1,1,0,0,1,1-.89h1.34a1,1,0,0,1,.95,1,15,15,0,0,1-3.84,9.18,14.85,14.85,0,0,1-8.86,4.91.94.94,0,0,0-.77.93v5.26c0,1.06,0,1,.95,1h5.42a1,1,0,0,1,.95,1v1.38a1,1,0,0,1-.95,1" transform="translate(-58.96 -52.44)" fill="#1d1d1b"/><path d="M152.12,618.8a6.32,6.32,0,1,0-6.25-6.32,6.29,6.29,0,0,0,6.25,6.32m-9.54-6.3a9.55,9.55,0,1,1,19.09,0,9.55,9.55,0,1,1-19.09,0" transform="translate(-58.96 -52.44)" fill="#1d1d1b"/><path d="M161.91,354.48V329.31a.57.57,0,0,0-1-.42l-9.81,10.24a.54.54,0,0,1-.76,0l-.72-.64a.62.62,0,0,1,0-.87l12.89-13.6a.55.55,0,0,1,.81,0l12.92,13.62a.62.62,0,0,1,0,.87l-.68.61a.55.55,0,0,1-.77,0L165,328.86a.57.57,0,0,0-1,.42v25.19a.58.58,0,0,1-.57.6h-1a.58.58,0,0,1-.57-.59" transform="translate(-58.96 -52.44)" fill="#1d1d1b"/><path d="M286.52,176.56v25.16a.56.56,0,0,0,1,.42l9.81-10.24a.55.55,0,0,1,.77,0l.71.64a.6.6,0,0,1,0,.86L285.92,207a.55.55,0,0,1-.8,0L272.2,193.36a.6.6,0,0,1,0-.86l.68-.61a.55.55,0,0,1,.77,0l9.78,10.26a.57.57,0,0,0,1-.42v-25.2A.59.59,0,0,1,285,176h1a.57.57,0,0,1,.56.59" transform="translate(-58.96 -52.44)" fill="#1d1d1b"/></g><line x1="821.14" y1="659.31" x2="438.78" y2="442.98" fill="none" stroke="#1d1d1b" stroke-width="6"/><line x1="441.03" y1="442.46" x2="797.4" y2="256.95" fill="none" stroke="#000" stroke-width="0.33"/><line x1="441.95" y1="444.23" x2="798.32" y2="258.72" fill="none" stroke="#000" stroke-width="0.33"/><line x1="442.85" y1="445.96" x2="799.22" y2="260.45" fill="none" stroke="#000" stroke-width="0.33"/>
  `;

    console.log("symbolsToPopulate", symbolsToPopulate);
    chartImg.append(...symbolsToPopulate);
    imgfrag.append(chartImg);

    const controls = document.createElement("div");
    controls.classList.add("controls");
    controls.id = "controls";

    const heading = document.createElement("h2");
    heading.classList.add("chart-heading");
    heading.textContent = `${chart.name}'s BirthChart`;
    controls.append(heading);

    const printButton = document.createElement("button");
    printButton.textContent = "print chart";
    printButton.classList.add("btn", "waves-effect", "waves-light", "add-data");
    printButton.addEventListener("click", () => {
      // window.print();
      printJS({
        printable: "chart",
        type: "html",
        css: "./styles/styles.css",
      });
    });
    controls.append(printButton);
    mountNode.innerHTML = "";
    mountNode.append(controls);
    mountNode.append(imgfrag);
    chart.img = imgfrag;
  }

  bcReport() {
    return `${this.Sun}  ${this.Moon} ${this.Ascendant} ${this.Mercury} ${this.Venus} ${this.Mars}  ${this.Jupiter}  ${this.Saturn}  ${this.Uranus}  ${this.Neptune}  ${this._id}`;
  }
}

export default BirthChart;
