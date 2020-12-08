import { uuidv4, planets } from "./utilities.js";

class BirthChart {
  constructor({
    name,
    birthday,
    time,
    latitude,
    longitude,
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
    this.birthday = birthday;
    this.time = time;
    this.latitude = latitude;
    this.longitude = longitude;

    this.Sun =
      typeof Sun === "string"
        ? {
            sign: Sun,
            icon: BirthChart.getIconSVG(Sun),
            location: { x: 520, y: -169 },
            word: BirthChart.getSignWordSVG(Sun),
            wordLocation: { x: 530, y: -85 },
            viewBox: "-150 60 600 600",
          }
        : Sun;

    this.Moon =
      typeof Moon === "string"
        ? {
            sign: Moon,
            icon: BirthChart.getIconSVG(Moon),
            location: { x: 430, y: -190 },
            word: BirthChart.getSignWordSVG(Moon),
            wordLocation: { x: 315, y: -260 },
            viewBox: "-100 60 600 600",
          }
        : Moon;

    this.Ascendant =
      typeof Ascendant === "string"
        ? {
            sign: Ascendant,
            icon: BirthChart.getIconSVG(Ascendant),
            location: { x: 300, y: -65 },
            word: BirthChart.getSignWordSVG(Ascendant),
            wordLocation: { x: 80, y: 40 },
            viewBox: "-50 60 600 600",
          }
        : Ascendant;

    this.Mercury =
      typeof Mercury === "string"
        ? {
            sign: Mercury,
            icon: BirthChart.getIconSVG(Mercury),
            location: { x: 590, y: -130 },
            word: BirthChart.getSignWordSVG(Mercury),
            wordLocation: { x: 630, y: -5 },
            viewBox: "-100 60 600 600",
          }
        : Mercury;

    this.Venus =
      typeof Venus === "string"
        ? {
            sign: Venus,
            icon: BirthChart.getIconSVG(Venus),
            location: { x: 650, y: -65 },
            word: BirthChart.getSignWordSVG(Venus),
            wordLocation: { x: 700, y: 100 },
            viewBox: "-100 60 600 600",
          }
        : Venus;

    this.Mars =
      typeof Mars === "string"
        ? {
            sign: Mars,
            icon: BirthChart.getIconSVG(Mars),
            location: { x: 650, y: 30 },
            word: BirthChart.getSignWordSVG(Mars),
            wordLocation: { x: 680, y: 200 },

            viewBox: "-100 60 600 600",
          }
        : Mars;

    this.Jupiter =
      typeof Jupiter === "string"
        ? {
            sign: Jupiter,
            icon: BirthChart.getIconSVG(Jupiter),
            location: { x: 580, y: 100 },
            word: BirthChart.getSignWordSVG(Jupiter),
            wordLocation: { x: 590, y: 285 },
            viewBox: "-100 60 600 600",
          }
        : Jupiter;

    this.Saturn =
      typeof Saturn === "string"
        ? {
            sign: Saturn,
            icon: BirthChart.getIconSVG(Saturn),
            location: { x: 505, y: 150 },
            word: BirthChart.getSignWordSVG(Saturn),
            wordLocation: { x: 500, y: 340 },
            viewBox: "-100 60 600 600",
          }
        : Saturn;

    this.Uranus =
      typeof Uranus === "string"
        ? {
            sign: Uranus,
            icon: BirthChart.getIconSVG(Uranus),
            location: { x: 430, y: 140 },
            word: BirthChart.getSignWordSVG(Uranus),
            wordLocation: { x: 340, y: 500 },
            viewBox: "-150 60 600 600",
          }
        : Uranus;

    this.Neptune =
      typeof Neptune === "string"
        ? {
            sign: Neptune,
            icon: BirthChart.getIconSVG(Neptune),
            location: { x: 340, y: 90 },
            word: BirthChart.getSignWordSVG(Neptune),
            wordLocation: { x: 190, y: 410 },
            viewBox: "-100 60 600 600",
          }
        : Neptune;

    this.Pluto =
      typeof Pluto === "string"
        ? {
            sign: Pluto,
            icon: BirthChart.getIconSVG(Pluto),
            location: { x: 300, y: 20 },
            word: BirthChart.getSignWordSVG(Pluto),
            wordLocation: { x: 85, y: 250 },
            viewBox: "-100 60 600 600",
          }
        : Pluto;

    this.Descendant =
      typeof Descendant === "string"
        ? {
            sign: Descendant,
            icon: BirthChart.getIconSVG(Descendant),
            location: { x: 340, y: -150 },
            word: BirthChart.getSignWordSVG(Descendant),
            wordLocation: { x: 150, y: -140 },
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
    Ari
  </text>`;
        break;
      case "Taurus":
        return `<text transform="rotate(88.854 7.47 9.713)" font-size="252.05" font-family="WolpePegasus-Regular">
    Tau
  </text>`;
        break;
      case "Gemini":
        return `<text transform="rotate(88.854 7.47 9.713)" font-size="252.05" font-family="WolpePegasus-Regular">
    Gem
  </text>`;
        break;
      case "Cancer":
        return `<text transform="rotate(88.854 7.47 9.713)" font-size="252.05" font-family="WolpePegasus-Regular">
    Can
  </text>`;
        break;
      case "Leo":
        return `<text transform="rotate(88.854 2.112 15.074)" font-size="252.05" font-family="WolpePegasus-Regular">
    Leo
  </text>`;
        break;
      case "Virgo":
        return `<text transform="rotate(88.854 7.47 9.713)" font-size="252.05" font-family="WolpePegasus-Regular">
    Vir
  </text>`;
        break;
      case "Libra":
        return `<text transform="rotate(88.854 -11.61 29.074)" letter-spacing="25" font-size="252.05" font-family="WolpePegasus-Regular">
    Lib
  </text>`;
        break;
      case "Scorpio":
        return `<text transform="rotate(88.854 7.47 9.713)" font-size="252.05" font-family="WolpePegasus-Regular">
    Sco
  </text>`;
        break;
      case "Sagittarius":
        return `<text transform="rotate(88.854 7.47 9.713)" font-size="252.05" font-family="WolpePegasus-Regular">
    Sag
  </text>`;
        break;
      case "Capricorn":
        return `<text transform="rotate(88.854 .623 10.473)" font-size="252.05" font-family="WolpePegasus-Regular">
    Cap
  </text>`;
        break;
      case "Aquarius":
        return `<text transform="rotate(88.854 7.47 9.713)" font-size="252.05" font-family="WolpePegasus-Regular">
    Aqu
  </text>`;
        break;
      case "Pisces":
        return `<text transform="rotate(88.854 -14.881 32.32)" letter-spacing="25" font-size="252.05" font-family="WolpePegasus-Regular">
    Pis
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
      currentSymbol.setAttribute("width", "63");
      currentSymbol.classList.add("sign", "icon", "chart");
      currentSymbol.innerHTML = currentSign.icon;
      currentSymbol.location = currentSign.location;

      currentWord.setAttribute("viewBox", `${currentSign.viewBox}`);

      currentWord.setAttribute("width", "230");
      currentWord.classList.add(
        "sign",
        "word",
        "chart",
        `${sign.toLowerCase()}`,
      );
      currentWord.innerHTML = currentSign.word;
      currentWord.location = currentSign.wordLocation;
      const toRotate = currentWord.firstChild;
      toRotate.classList.add("inner-word", `${sign.toLowerCase()}`);
      const degrees = currentSign.wordRotation;
      toRotate.setAttribute("transform", `${degrees}`);
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
    chartImg.classList.add("bc-template", "materialboxed", "chart-outline");
    chartImg.setAttribute("viewBox", "-30 -30 1060 1060");
    chartImg.innerHTML = `<defs><clipPath id="clip-path" transform="translate(-0.83 -1)"><rect x="-1" y="1" width="997" height="997" fill="none"/></clipPath></defs><g clip-path="url(#clip-path)"><circle cx="496.67" cy="498.5" r="495.71" fill="none" stroke="#000" stroke-width="1.91"/><circle cx="497.19" cy="501.66" r="411.6" fill="none" stroke="#1d1d1b" stroke-width="6"/></g><text transform="matrix(0.13, 0.99, -0.99, 0.13, 30.62, 547.05)" font-size="34.45" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700">P</text><text transform="translate(33.34 567.79) rotate(80.62)" font-size="34.45" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700">l</text><text transform="translate(34.73 576.64) rotate(79.2)" font-size="34.45" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700">u</text><text transform="translate(38.25 594.91) rotate(77.08)" font-size="34.45" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700">t</text><text transform="translate(40.67 605.71) rotate(75.67)" font-size="34.45" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700">o</text><text transform="matrix(0.27, 0.96, -0.96, 0.27, 45.2, 623)" font-size="34.45" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700"> </text><text transform="translate(47.26 630.29) rotate(72.87)" font-size="34.45" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700"> </text><text transform="matrix(0.32, 0.95, -0.95, 0.32, 49.42, 637.56)" font-size="34.45" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700"> </text><text transform="translate(53.36 649.28) rotate(70.78)" font-size="34.45" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700"> </text><text transform="matrix(0.44, 0.9, -0.9, 0.44, 53.33, 657.57)" font-size="34.45" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700"> </text><text transform="translate(98.2 743.91) rotate(57.69)" font-size="34.45" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700"> </text><text transform="translate(102.29 750.71) rotate(55.64)" font-size="34.45" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700">N</text><text transform="matrix(0.6, 0.8, -0.8, 0.6, 117.11, 772.26)" font-size="34.45" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700">e</text><text transform="matrix(0.63, 0.78, -0.78, 0.63, 126.61, 784.95)" font-size="34.45" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700">p</text><text transform="translate(138.6 799.58) rotate(49.49)" font-size="34.45" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700">t</text><text transform="translate(146.03 808.28) rotate(47.44)" font-size="34.45" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700">u</text><text transform="translate(158.66 821.94) rotate(45.38)" font-size="34.45" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700">n</text><text transform="translate(171.83 835.23) rotate(42.64)" font-size="34.45" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700">e</text><text transform="matrix(0.75, 0.66, -0.66, 0.75, 183.49, 845.97)" font-size="34.45" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700"> </text><text transform="matrix(0.8, 0.6, -0.6, 0.8, 188.5, 851.83)" font-size="34.45" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700"> </text><text transform="matrix(0.85, 0.53, -0.53, 0.85, 244.24, 892.2)" font-size="34.45" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700"> </text><text transform="matrix(0.85, 0.52, -0.52, 0.85, 250.67, 896.23)" font-size="34.45" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700"> </text><text transform="translate(257.14 900.18) rotate(30.12)" font-size="34.45" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700"> </text><text transform="translate(263.69 903.98) rotate(29.42)" font-size="34.45" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700"> </text><text transform="translate(270.31 907.7) rotate(28.71)" font-size="34.45" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700"> </text><text transform="translate(276.96 911.32) rotate(27.3)" font-size="34.45" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700"> </text><text transform="matrix(0.89, 0.45, -0.45, 0.89, 283.69, 914.8)" font-size="34.45" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700"> </text><text transform="translate(290.41 918.34) rotate(24.46)" font-size="34.45" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700">U</text><text transform="translate(313.26 928.6) rotate(22.32)" font-size="34.45" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700">r</text><text transform="translate(325.62 933.7) rotate(20.17)" font-size="34.45" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700">a</text><text transform="translate(340.73 939.32) rotate(18.02)" font-size="34.45" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700">n</text><text transform="matrix(0.96, 0.27, -0.27, 0.96, 358.24, 945.07)" font-size="34.45" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700">u</text><text transform="translate(376.15 950.16) rotate(13.69)" font-size="34.45" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700">s</text><text transform="matrix(0.98, 0.17, -0.17, 0.98, 388.67, 953.92)" font-size="34.45" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700"> </text><text transform="matrix(1, 0.01, -0.01, 1, 440.06, 965.14)" font-size="34.45" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700"> </text><text transform="translate(544.91 963.28) rotate(-6.54)" font-size="34.45" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700"> </text><text transform="matrix(0.99, -0.14, 0.14, 0.99, 552.45, 962.5)" font-size="34.45" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700">S</text><text transform="translate(570.26 960) rotate(-10.09)" font-size="34.45" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700">a</text><text transform="translate(586.13 957.11) rotate(-11.51)" font-size="34.45" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700">t</text><text transform="matrix(0.97, -0.24, 0.24, 0.97, 597.34, 954.86)" font-size="34.45" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700">u</text><text transform="matrix(0.96, -0.27, 0.27, 0.96, 615.42, 950.44)" font-size="34.45" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700">r</text><text transform="translate(628.81 946.76) rotate(-17.83)" font-size="34.45" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700">n</text><text transform="matrix(0.95, -0.32, 0.32, 0.95, 646.6, 940.98)" font-size="34.45" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700"> </text><text transform="translate(647.18 940.78) rotate(-19.22)" font-size="34.45" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700"> </text><text transform="translate(654.33 938.27) rotate(-19.91)" font-size="34.45" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700"> </text><text transform="matrix(0.93, -0.36, 0.36, 0.93, 661.45, 935.66)" font-size="34.45" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700"> </text><text transform="matrix(0.93, -0.37, 0.37, 0.93, 668.51, 932.91)" font-size="34.45" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700"> </text><text transform="matrix(0.92, -0.4, 0.4, 0.92, 675.55, 930.1)" font-size="34.45" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700"> </text><text transform="matrix(0.91, -0.41, 0.41, 0.91, 682.51, 927.1)" font-size="34.45" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700"> </text><text transform="translate(689.43 924.01) rotate(-24.76)" font-size="34.45" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700"> </text><text transform="translate(696.32 920.85) rotate(-26.14)" font-size="34.45" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700"> </text><text transform="matrix(0.89, -0.45, 0.45, 0.89, 703.14, 917.52)" font-size="34.45" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700"> </text><text transform="matrix(0.89, -0.46, 0.46, 0.89, 709.9, 914.1)" font-size="34.45" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700"> </text><text transform="translate(716.62 910.61) rotate(-28.88)" font-size="34.45" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700"> </text><text transform="matrix(0.87, -0.49, 0.49, 0.87, 723.27, 906.97)" font-size="34.45" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700"> </text><text transform="matrix(0.86, -0.5, 0.5, 0.86, 729.85, 903.22)" font-size="34.45" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700"> </text><text transform="matrix(0.85, -0.52, 0.52, 0.85, 736.41, 899.41)" font-size="34.45" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700"> </text><text transform="translate(742.87 895.44) rotate(-32.31)" font-size="34.45" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700"> </text><text transform="matrix(0.84, -0.54, 0.54, 0.84, 749.27, 891.38)" font-size="34.45" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700"> </text><text transform="translate(755.63 887.25) rotate(-34.36)" font-size="34.45" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700"> </text><text transform="translate(761.89 882.98) rotate(-35.04)" font-size="34.45" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700"> </text><text transform="matrix(0.81, -0.58, 0.58, 0.81, 768.08, 878.62)" font-size="34.45" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700"> </text><text transform="matrix(0.8, -0.6, 0.6, 0.8, 774.24, 874.19)" font-size="34.45" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700">J</text><text transform="matrix(0.78, -0.63, 0.63, 0.78, 783.73, 867.09)" font-size="34.45" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700">u</text><text transform="matrix(0.75, -0.66, 0.66, 0.75, 798.17, 855.35)" font-size="34.45" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700">p</text><text transform="matrix(0.73, -0.69, 0.69, 0.73, 812.35, 842.84)" font-size="34.45" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700">i</text><text transform="translate(819.27 836.42) rotate(-44.62)" font-size="34.45" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700">t</text><text transform="translate(827.2 828.69) rotate(-45.99)" font-size="34.45" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700">e</text><text transform="matrix(0.67, -0.74, 0.74, 0.67, 838.24, 817.32)" font-size="34.45" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700">r</text><text transform="matrix(0.6, -0.8, 0.8, 0.6, 848.54, 807.81)" font-size="34.45" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700"> </text><text transform="matrix(0.53, -0.85, 0.85, 0.53, 890.37, 750.22)" font-size="34.45" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700"> </text><text transform="matrix(0.52, -0.85, 0.85, 0.52, 894.41, 743.81)" font-size="34.45" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700"> </text><text transform="translate(898.37 737.34) rotate(-59.88)" font-size="34.45" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700"> </text><text transform="translate(902.18 730.79) rotate(-60.58)" font-size="34.45" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700"> </text><text transform="translate(905.89 724.19) rotate(-61.29)" font-size="34.45" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700"> </text><text transform="matrix(0.46, -0.89, 0.89, 0.46, 909.54, 717.54)" font-size="34.45" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700"> </text><text transform="translate(913.02 710.81) rotate(-63.41)" font-size="34.45" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700"> </text><text transform="translate(916.4 704.03) rotate(-64.12)" font-size="34.45" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700"> </text><text transform="translate(919.72 697.2) rotate(-65.54)" font-size="34.45" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700"> </text><text transform="translate(922.87 690.31) rotate(-66.25)" font-size="34.45" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700"> </text><text transform="translate(926.11 683.45) rotate(-68.39)" font-size="34.45" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700">M</text><text transform="translate(937.4 654.13) rotate(-71.26)" font-size="34.45" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700">a</text><text transform="translate(942.54 638.85) rotate(-73.42)" font-size="34.45" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700">r</text><text transform="matrix(0.26, -0.97, 0.97, 0.26, 946.49, 625.53)" font-size="34.45" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700">s</text><text transform="translate(950.63 613.12) rotate(-79.21)" font-size="34.45" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700"> </text><text transform="matrix(0.01, -1, 1, 0.01, 963.64, 554.51)" font-size="34.45" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700"> </text><text transform="translate(48.12 476.31) rotate(-84.89)" font-size="33.11" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700">A</text><text transform="translate(50.36 453.24) rotate(-82.74)" font-size="33.11" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700">s</text><text transform="translate(51.97 440.83) rotate(-80.58)" font-size="33.11" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700">c</text><text transform="translate(54.2 427.37) rotate(-79.13)" font-size="33.11" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700">e</text><text transform="matrix(0.23, -0.97, 0.97, 0.23, 57.12, 412.42)" font-size="33.11" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700">n</text><text transform="matrix(0.26, -0.96, 0.96, 0.26, 61.25, 394.92)" font-size="33.11" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700">d</text><text transform="translate(66.15 377.32) rotate(-72.61)" font-size="33.11" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700">a</text><text transform="translate(70.81 362.54) rotate(-70.44)" font-size="33.11" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700">n</text><text transform="matrix(0.37, -0.93, 0.93, 0.37, 76.9, 345.62)" font-size="33.11" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700">t</text><text transform="translate(80.07 334.99) rotate(-63.92)" font-size="33.11" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700"> </text><text transform="matrix(0.52, -0.86, 0.86, 0.52, 109.61, 277.58)" font-size="33.11" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700"> </text><text transform="matrix(0.53, -0.85, 0.85, 0.53, 113.37, 271.34)" font-size="33.11" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700"> </text><text transform="matrix(0.56, -0.83, 0.83, 0.56, 117.27, 264.79)" font-size="33.11" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700">D</text><text transform="translate(130.71 244.9) rotate(-53.2)" font-size="33.11" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700">e</text><text transform="matrix(0.62, -0.79, 0.79, 0.62, 139.98, 232.48)" font-size="33.11" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700">c</text><text transform="translate(148.41 221.75) rotate(-49.67)" font-size="33.11" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700">e</text><text transform="matrix(0.67, -0.74, 0.74, 0.67, 158.23, 210.11)" font-size="33.11" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700">n</text><text transform="matrix(0.7, -0.71, 0.71, 0.7, 170.36, 196.83)" font-size="33.11" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700">d</text><text transform="matrix(0.73, -0.69, 0.69, 0.73, 183.22, 183.84)" font-size="33.11" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700">a</text><text transform="translate(194.51 173.23) rotate(-41.31)" font-size="33.11" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700">n</text><text transform="translate(208.09 161.44) rotate(-39.24)" font-size="33.11" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700">t</text><text transform="matrix(0.79, -0.61, 0.61, 0.79, 216.6, 154.49)" font-size="33.11" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700"> </text><text transform="translate(222.1 149.68) rotate(-35.12)" font-size="33.11" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700"> </text><text transform="translate(253.89 127.8) rotate(-32.38)" font-size="33.11" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700"> </text><text transform="translate(260.04 123.89) rotate(-31.01)" font-size="33.11" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700"> </text><text transform="matrix(0.86, -0.5, 0.5, 0.86, 266.27, 120.12)" font-size="33.11" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700"> </text><text transform="translate(272.57 116.45) rotate(-29.64)" font-size="33.11" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700"> </text><text transform="matrix(0.88, -0.47, 0.47, 0.88, 278.89, 112.84)" font-size="33.11" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700"> </text><text transform="translate(285.3 109.37) rotate(-27.59)" font-size="33.11" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700"> </text><text transform="translate(291.76 106.01) rotate(-26.91)" font-size="33.11" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700"> </text><text transform="translate(298.25 102.7) rotate(-25.54)" font-size="33.11" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700"> </text><text transform="translate(304.82 99.56) rotate(-24.86)" font-size="33.11" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700"> </text><text transform="translate(311.44 96.51) rotate(-24.18)" font-size="33.11" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700"> </text><text transform="matrix(0.93, -0.37, 0.37, 0.93, 317.98, 93.28)" font-size="33.11" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700">M</text><text transform="matrix(0.95, -0.32, 0.32, 0.95, 345.81, 82.52)" font-size="33.11" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700">o</text><text transform="translate(362.35 76.97) rotate(-16.64)" font-size="33.11" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700">o</text><text transform="translate(378.82 72.04) rotate(-13.88)" font-size="33.11" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700">n</text><text transform="translate(396.15 67.05) rotate(-9.72)" font-size="33.11" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700"> </text><text transform="translate(450 55.56) rotate(0.83)" font-size="33.11" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700"> </text><text transform="translate(554.78 60.03) rotate(7.98)" font-size="33.11" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700"> </text><text transform="translate(561.99 61.04) rotate(8.7)" font-size="33.11" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700"> </text><text transform="translate(569.2 62.12) rotate(10.14)" font-size="33.11" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700">S</text><text transform="translate(585.94 65.18) rotate(12.31)" font-size="33.11" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700">u</text><text transform="matrix(0.96, 0.26, -0.26, 0.96, 603.42, 68.98)" font-size="33.11" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700">n</text><text transform="matrix(0.95, 0.31, -0.31, 0.95, 620.85, 73.44)" font-size="33.11" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700"> </text><text transform="matrix(0.89, 0.46, -0.46, 0.89, 657.7, 82.63)" font-size="33.11" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700"> </text><text transform="matrix(0.82, 0.57, -0.57, 0.82, 749.32, 133.63)" font-size="33.11" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700"> </text><text transform="translate(755.32 137.78) rotate(35.38)" font-size="33.11" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700"> </text><text transform="translate(761.24 142.01) rotate(36.09)" font-size="33.11" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700"> </text><text transform="matrix(0.78, 0.63, -0.63, 0.78, 767.28, 146.12)" font-size="33.11" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700">M</text><text transform="matrix(0.75, 0.67, -0.67, 0.75, 790.4, 164.97)" font-size="33.11" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700">e</text><text transform="translate(801.79 175.09) rotate(43.83)" font-size="33.11" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700">r</text><text transform="translate(811.08 183.96) rotate(45.22)" font-size="33.11" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700">c</text><text transform="matrix(0.68, 0.73, -0.73, 0.68, 820.74, 193.6)" font-size="33.11" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700">u</text><text transform="matrix(0.65, 0.76, -0.76, 0.65, 832.87, 206.74)" font-size="33.11" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700">r</text><text transform="translate(841.88 217.25) rotate(50.76)" font-size="33.11" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700">y</text><text transform="matrix(0.56, 0.83, -0.83, 0.56, 852.13, 227.97)" font-size="33.11" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700"> </text><text transform="translate(889.81 286.99) rotate(61.04)" font-size="33.11" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700"> </text><text transform="translate(893.34 293.37) rotate(62.41)" font-size="33.11" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700"> </text><text transform="translate(896.71 299.82) rotate(63.09)" font-size="33.11" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700"> </text><text transform="translate(900 306.32) rotate(63.77)" font-size="33.11" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700"> </text><text transform="translate(903.2 312.87) rotate(65.14)" font-size="33.11" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700"> </text><text transform="matrix(0.41, 0.91, -0.91, 0.41, 906.27, 319.48)" font-size="33.11" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700"> </text><text transform="translate(909.37 326.07) rotate(67.88)" font-size="33.11" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700">V</text><text transform="translate(916.78 344.29) rotate(69.93)" font-size="33.11" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700">e</text><text transform="translate(922.05 358.58) rotate(71.99)" font-size="33.11" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700">n</text><text transform="matrix(0.27, 0.96, -0.96, 0.27, 927.52, 375.43)" font-size="33.11" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700">u</text><text transform="translate(932.36 392.65) rotate(76.12)" font-size="33.11" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700">s</text><text transform="translate(937.33 404.47) rotate(82.37)" font-size="33.11" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700"> </text><text transform="matrix(-0.08, 1, -1, -0.08, 949.7, 487.2)" font-size="33.11" font-family="WolpePegasus-Bold, Wolpe Pegasus" font-weight="700"> </text><g clip-path="url(#clip-path)"><line x1="496.86" x2="496.86" y2="497.71" fill="none" stroke="#1d1d1b" stroke-width="6"/><line x1="499.29" y1="499.93" x2="499.29" y2="997" fill="none" stroke="#000" stroke-width="0.33"/><line x1="496.83" y1="499.93" x2="496.83" y2="997" fill="none" stroke="#000" stroke-width="0.33"/><line x1="494.43" y1="499.93" x2="494.43" y2="997" fill="none" stroke="#000" stroke-width="0.33"/></g><line x1="991" y1="504.46" x2="3.37" y2="504.46" fill="none" stroke="#000" stroke-width="0.33"/><line x1="991" y1="502" x2="3.37" y2="502" fill="none" stroke="#000" stroke-width="0.33"/><line x1="991" y1="499.6" x2="3.37" y2="499.6" fill="none" stroke="#000" stroke-width="0.33"/><line x1="770.89" y1="84.59" x2="229.72" y2="917.92" fill="none" stroke="#000" stroke-width="0.33"/><line x1="768.83" y1="83.25" x2="227.66" y2="916.58" fill="none" stroke="#000" stroke-width="0.33"/><line x1="766.82" y1="81.94" x2="225.65" y2="915.28" fill="none" stroke="#000" stroke-width="0.33"/><line x1="494.1" y1="503.32" x2="61.51" y2="258.58" fill="none" stroke="#000" stroke-width="0.33"/><line x1="495.31" y1="501.19" x2="62.72" y2="256.44" fill="none" stroke="#000" stroke-width="0.33"/><line x1="496.49" y1="499.1" x2="63.9" y2="254.35" fill="none" stroke="#000" stroke-width="0.33"/><line x1="927.8" y1="745.44" x2="849.01" y2="700.86" fill="none" stroke="#1d1d1b" stroke-width="2.23"/><line x1="744.79" y1="927.78" x2="243.06" y2="76.02" fill="none" stroke="#000" stroke-width="0.33"/><line x1="746.9" y1="926.53" x2="245.18" y2="74.77" fill="none" stroke="#000" stroke-width="0.33"/><line x1="748.97" y1="925.31" x2="247.25" y2="73.55" fill="none" stroke="#000" stroke-width="0.33"/><line x1="59.49" y1="729.78" x2="498.94" y2="501.02" fill="none" stroke="#1d1d1b" stroke-width="6"/><g clip-path="url(#clip-path)"><path d="M660.16,94.42a20.43,20.43,0,1,0-20.4-20.78,20.4,20.4,0,0,0,20.4,20.78m.07-44.81a24.53,24.53,0,1,1-24.57,24.54,24.54,24.54,0,0,1,24.57-24.54" transform="translate(-0.83 -1)" fill="#1d1d1b"/><path d="M660.19,68.55A5.45,5.45,0,1,1,654.73,74a5.46,5.46,0,0,1,5.46-5.44" transform="translate(-0.83 -1)" fill="#1d1d1b"/><path d="M418.56,31.51c8.62,4.47,13.28,11,13.69,19.66-.11,8.72-4.54,15.36-12.93,20.09,7.48.37,16.25-2.72,21.09-10.08a17.69,17.69,0,0,0-1.81-22.11c-5.1-5.54-11.84-7.94-20-7.56m2.85,42.62a30.87,30.87,0,0,1-8.11-.84A1.51,1.51,0,0,1,412,72a1.41,1.41,0,0,1,1.16-1.42A24.79,24.79,0,0,0,420,67.36,20.09,20.09,0,0,0,428.09,57a16.83,16.83,0,0,0,.79-7.2,18.52,18.52,0,0,0-6.15-11.89,23.12,23.12,0,0,0-10-5.36c-.74-.19-1.28-.53-1.39-1.25a1.32,1.32,0,0,1,.95-1.47c1-.28,2-.53,3-.73a26.57,26.57,0,0,1,5-.49,28.39,28.39,0,0,1,16.45,4.85,22.15,22.15,0,0,1,9.29,12.69,19.24,19.24,0,0,1,.61,6.45,20.83,20.83,0,0,1-5.79,13A26.36,26.36,0,0,1,428.62,73a29.12,29.12,0,0,1-7.21,1.14" transform="translate(-0.83 -1)" fill="#1d1d1b"/><path d="M876.74,256.08A9.74,9.74,0,1,0,867,245.87a9.71,9.71,0,0,0,9.72,10.21m1.54,10.25v2.31a1.16,1.16,0,0,1-1.16,1.16h-.87a1,1,0,0,1-1-1v-2.45a.07.07,0,0,0-.08-.07h-2.43a1.08,1.08,0,0,1-1.08-1.08v-.74a1.24,1.24,0,0,1,1.24-1.24h2.24a.08.08,0,0,0,.08-.08v-4a.07.07,0,0,0-.07-.07c-5.61-1.06-9.3-4.23-10.85-9.78h0c-1.19-6.37,1.16-11.1,6.58-14.41a.08.08,0,0,0,0-.13,11,11,0,0,1-4.86-7.18,1,1,0,0,1,.88-1.18l.76-.07a1.25,1.25,0,0,1,1.41.94,7.83,7.83,0,0,0,2.68,4.32,8,8,0,0,0,12.85-4.22,1.39,1.39,0,0,1,1.48-1l.39,0a1.24,1.24,0,0,1,1.14,1.52,11,11,0,0,1-4.87,6.91.08.08,0,0,0,0,.13c5.42,3.4,7.74,8.17,6.43,14.58h0c-1.61,5.42-5.26,8.52-10.79,9.55a.09.09,0,0,0-.06.08v3.94a.08.08,0,0,0,.08.08h2.07a1.37,1.37,0,0,1,1.37,1.37v.3a1.39,1.39,0,0,1-1.39,1.39h-2.08a.08.08,0,0,0-.07.08" transform="translate(-0.83 -1)" fill="#1d1d1b"/><path d="M964.45,440.82a13.11,13.11,0,1,0-13.27,13.06,13.08,13.08,0,0,0,13.27-13.06m-21,27.83V465a.46.46,0,0,1,.46-.45h4.87a.46.46,0,0,0,.45-.46v-4.92a1.41,1.41,0,0,0-1.14-1.39,17.29,17.29,0,1,1,6.23.05,1.12,1.12,0,0,0-.91,1.1V464a.45.45,0,0,0,.45.45h4.88a.46.46,0,0,1,.46.45v3.69l-1.27,0h-4.14c-.3,0-.41.08-.4.4,0,1.78,0,3.13,0,4.91v.89c0,.55-4.13.5-4.13,0v-1c0-1.78,0-2.93,0-4.72,0-.36-.12-.44-.45-.43" transform="translate(-0.83 -1)" fill="#1d1d1b"/><path d="M943.56,583.59A13.41,13.41,0,0,0,957,569.93a13.46,13.46,0,1,0-13.45,13.66m19.86-36.31h-6.37V543.1H970.6v13.54h-4.16V550.4l-8.92,8.91c.24.35.54.75.81,1.17a16.85,16.85,0,0,1,2.79,7.79,17.35,17.35,0,0,1-4.25,13.47,16.85,16.85,0,0,1-10.1,5.77,17.24,17.24,0,0,1-14.69-4,16.88,16.88,0,0,1-5.82-9.86,17.24,17.24,0,0,1,3.37-14.4,17,17,0,0,1,10.11-6.38,17.32,17.32,0,0,1,14.42,3.1c.19.14.32.25.54,0,2.82-2.85,5.66-5.67,8.49-8.51l.23-.25" transform="translate(-0.83 -1)" fill="#1d1d1b"/><path d="M847.16,784.67l0-1.06a1.22,1.22,0,0,1,1.25-1.19h.63a11.19,11.19,0,0,0,6.57-2.37,16.78,16.78,0,0,0,5.79-8.66,14.65,14.65,0,0,0,.65-5.8,7.23,7.23,0,0,0-2.05-4.66,6,6,0,0,0-4.31-1.69,7.07,7.07,0,0,0-6.4,4.92,5.19,5.19,0,0,0,.19,3,1.94,1.94,0,0,0,.41.66,2,2,0,0,1,.56,1.46l0,1a1,1,0,0,1-1.33.94h0c-2.24-.89-3.14-3-3.28-5.55a8.49,8.49,0,0,1,1.8-5.61,10.28,10.28,0,0,1,6.32-4,9.17,9.17,0,0,1,7.77,1.89,10,10,0,0,1,3.56,6.31,15.06,15.06,0,0,1,.18,4,20.73,20.73,0,0,1-1.93,7,20.43,20.43,0,0,1-4,5.85c-.41.41-.84.79-1.29,1.19a.15.15,0,0,0,.09.26l10.58.18a.14.14,0,0,0,.15-.14l.42-24a1.81,1.81,0,0,1,1.84-1.78,1.58,1.58,0,0,1,1.55,1.61l-.42,24.26a.15.15,0,0,0,.14.15l3.32.06a1,1,0,0,1,.93,1,2.42,2.42,0,0,1-2.46,2.38l-1.84,0a.15.15,0,0,0-.15.15l-.11,6.2a1.46,1.46,0,0,1-1.49,1.43h-.56a1.35,1.35,0,0,1-1.33-1.37l.11-6.3a.15.15,0,0,0-.14-.15l-20.53-.36a1.15,1.15,0,0,1-1.13-1.17" transform="translate(-0.83 -1)" fill="#1d1d1b"/><path d="M668.16,934.93l-2.8.05a.42.42,0,0,1-.43-.41l-.41-23.83a.42.42,0,0,0-.43-.41l-2.84,0a.43.43,0,0,1-.43-.41l0-2.41a.43.43,0,0,1,.41-.43l2.83,0a.41.41,0,0,0,.41-.42l0-2.7a.43.43,0,0,1,.41-.43l2.41,0a.41.41,0,0,1,.42.41l0,2.67a.42.42,0,0,0,.43.41l5.24-.09a.41.41,0,0,1,.42.41l0,2.44a.41.41,0,0,1-.41.42l-5.22.09a.41.41,0,0,0-.4.43l.07,4.27a.42.42,0,0,0,.68.32,11.73,11.73,0,0,1,2.68-1.6,11.26,11.26,0,0,1,3.58-1,7.62,7.62,0,0,1,5.3,1.13,8.77,8.77,0,0,1,3.26,4.26,12.74,12.74,0,0,1,.89,5.56A17.87,17.87,0,0,1,679.48,935a9.75,9.75,0,0,0-2.27,3.59,4,4,0,0,0-.21,1.91,1.84,1.84,0,0,0,1.54,1.31.71.71,0,0,0,.42-.14c.43-.34.84-.71,1.25-1.08a4.91,4.91,0,0,0,.43-.48l1.46,1.41a1.25,1.25,0,0,1,0,1.78,5.8,5.8,0,0,1-2.86,1.72,4.39,4.39,0,0,1-3.42-.89,4.69,4.69,0,0,1-2.11-4.48,10.43,10.43,0,0,1,2.72-6.12,20.6,20.6,0,0,0,2.61-3.4,16,16,0,0,0,1.86-5.75,10.07,10.07,0,0,0-1.15-6.28,4.09,4.09,0,0,0-3.16-2.24,7.92,7.92,0,0,0-3.44.46,9.37,9.37,0,0,0-4.83,4.2,2.8,2.8,0,0,0-.4,1.62q.13,6.25.23,12.5c0,.1,0,.2,0,.31" transform="translate(-0.83 -1)" fill="#1d1d1b"/><path d="M426.74,968.28a3.8,3.8,0,1,0-.16-7.6,3.8,3.8,0,0,0,.16,7.6m-2.26-20.87-3.79.07a.17.17,0,0,0-.17.14,12.32,12.32,0,0,1-6.23,9,12,12,0,0,1-5,1.53.77.77,0,0,1-.84-.75l0-2.29a.75.75,0,0,1,.66-.75,8.59,8.59,0,0,0,7.71-9.18,8.62,8.62,0,0,0-7.93-7.91.84.84,0,0,1-.76-.81l0-2.26a.71.71,0,0,1,.75-.72,12.12,12.12,0,0,1,7.32,2.84,12.24,12.24,0,0,1,4.28,7.24.19.19,0,0,0,.18.15l3.62-.07a.17.17,0,0,0,.18-.18l-.14-8.34a1,1,0,0,1,1-1l1.94,0a.88.88,0,0,1,.9.87l.15,8.43a.18.18,0,0,0,.18.18l3.63-.07a.16.16,0,0,0,.17-.15,12.34,12.34,0,0,1,5.5-8.52,12.17,12.17,0,0,1,4.22-1.75,2,2,0,0,1,2.33,1.89,1.83,1.83,0,0,1-1.49,1.83,8.39,8.39,0,0,0-5.63,4,8.11,8.11,0,0,0-1.21,5.26,8.59,8.59,0,0,0,7,7.61,2,2,0,0,1,1.66,1.9v.23a1.64,1.64,0,0,1-1.84,1.67,12,12,0,0,1-6.22-2.74,12.24,12.24,0,0,1-4.27-7.23.18.18,0,0,0-.18-.15l-3.81.07c0,.1,0,.2,0,.3l.15,9.16c0,.25.09.32.31.39a7.3,7.3,0,0,1,5.43,6.09,7.61,7.61,0,0,1-15,2.58,7.93,7.93,0,0,1,5.56-8.71" transform="translate(-0.83 -1)" fill="#1d1d1b"/><path d="M220.58,872.45c-1.22-.16-2.4-.25-3.56-.46a9.91,9.91,0,0,1-4.9-2.27,11,11,0,0,1-3.18-5.35,26.06,26.06,0,0,1-.91-7.66c0-2.08.17-4.16.27-6.24,0-.35,0-.71.09-1.14l-1.78,1.48a.68.68,0,0,1-1-.13l-1.12-1.52a.8.8,0,0,1,.12-1.08l5.33-4.46a.91.91,0,0,1,1.34.18l4.16,5.86a.73.73,0,0,1-.13,1l-1.48,1.19a.71.71,0,0,1-1-.14L211.59,850c-.07.91-.17,1.7-.19,2.5-.06,1.87-.14,3.75-.1,5.62a18.52,18.52,0,0,0,1.07,6.21,6.21,6.21,0,0,0,4.67,4.15c1.07.24,2.19.3,3.29.44h.19l-.27-15.17s0,0,0,0l-1.37,1.4a.93.93,0,0,1-1.34,0L216.39,854a.84.84,0,0,1,0-1.13l4.71-5.4a.74.74,0,0,1,1.12,0l5,5.17a.75.75,0,0,1,0,1L225.88,855a.66.66,0,0,1-1,0l-1.24-1.35-.12.05.27,15.13c.53-.05,1.06-.1,1.59-.17a10.69,10.69,0,0,0,3.08-.85,6.47,6.47,0,0,0,3.46-4.37,16.13,16.13,0,0,0,.65-4.42c0-1.74,0-3.49-.1-5.23a37.1,37.1,0,0,0-.45-3.84c-.41.6-.81,1.2-1.23,1.8a.68.68,0,0,1-1,.17l-1.52-1.18a.73.73,0,0,1-.15-1l4.2-6.19a.61.61,0,0,1,.9-.15L239,848a.7.7,0,0,1,.13,1L238,850.65a.61.61,0,0,1-.9.14l-1.75-1.39c.12,1,.13,1.05.32,3.14.16,1.69.26,3.38.26,5.08a24.6,24.6,0,0,1-.86,6.94,9.75,9.75,0,0,1-7,7.1,18.1,18.1,0,0,1-3.93.63l-.24,0c0,1.63.06,3.25.09,4.89l5.25-.09a.76.76,0,0,1,.74.76l0,2a.7.7,0,0,1-.66.73l-5.32.09c0,.19,0,.33,0,.48,0,1.92.06,3.62.1,5.54a.61.61,0,0,1-.54.6c-.85,0-1.29,0-2.14,0a.64.64,0,0,1-.58-.62c0-1.93-.06-3.61-.1-5.55v-.41l-5.12.09a.92.92,0,0,1-.91-.95l0-1.53a.92.92,0,0,1,.86-1l5.11-.09Z" transform="translate(-0.83 -1)" fill="#1d1d1b"/><path d="M79.5,677.43H72.8c-1.2-.06-1.2-.06-1.17,1.18v8H68.12c-.56,0-.56,0-.56-.54v-8.67H59.68a1.18,1.18,0,0,1-1.17-1.18v-1.67a1.17,1.17,0,0,1,1.17-1.18h7.85c.09,0,.06-.35.06-.47,0-2.63,0-5.2,0-7.82,0-.35-.08-.43-.43-.48a18.28,18.28,0,0,1-10.06-4.71,18.56,18.56,0,0,1-5.84-10.42,10.53,10.53,0,0,1-.3-2.76c0-.84.38-.74.4-.83h2.58a1.05,1.05,0,0,1,1,1,14.65,14.65,0,0,0,6,11,14.12,14.12,0,0,0,9.73,2.83A14.83,14.83,0,0,0,84.25,647a1.18,1.18,0,0,1,1.17-1.09h1.65a1.18,1.18,0,0,1,1.17,1.27A18.83,18.83,0,0,1,72.6,664.56a1.16,1.16,0,0,0-.94,1.15v6.47c0,1.3,0,1.18,1.17,1.18H79.5a1.18,1.18,0,0,1,1.17,1.19v1.69a1.18,1.18,0,0,1-1.17,1.19" transform="translate(-0.83 -1)" fill="#1d1d1b"/><path d="M69.68,653.61A7.79,7.79,0,1,0,62,645.82a7.75,7.75,0,0,0,7.69,7.79m-11.74-7.76a11.76,11.76,0,1,1,23.51.06,11.76,11.76,0,1,1-23.51-.06" transform="translate(-0.83 -1)" fill="#1d1d1b"/><path d="M81.74,328.11v-31a.69.69,0,0,0-1.19-.51L68.47,309.22a.68.68,0,0,1-1,0l-.88-.79a.75.75,0,0,1,0-1.06l15.88-16.76a.67.67,0,0,1,1,0l15.91,16.78a.76.76,0,0,1,0,1.07l-.84.75a.68.68,0,0,1-1,0l-12-12.63a.69.69,0,0,0-1.19.51v31a.71.71,0,0,1-.69.73H82.44a.72.72,0,0,1-.7-.73" transform="translate(-0.83 -1)" fill="#1d1d1b"/><path d="M235.19,109v31a.69.69,0,0,0,1.19.51l12.08-12.61a.69.69,0,0,1,.95,0l.88.79a.76.76,0,0,1,0,1.07l-15.88,16.75a.67.67,0,0,1-1,0l-15.91-16.78a.75.75,0,0,1,0-1.06l.84-.76a.69.69,0,0,1,.95,0c4,4.21,8,8.41,12.05,12.63a.69.69,0,0,0,1.19-.51V109a.71.71,0,0,1,.69-.73h1.19a.71.71,0,0,1,.69.73" transform="translate(-0.83 -1)" fill="#1d1d1b"/></g><line x1="925.05" y1="744.29" x2="494.46" y2="500.67" fill="none" stroke="#1d1d1b" stroke-width="6"/><line x1="497.23" y1="500.03" x2="936.07" y2="271.59" fill="none" stroke="#000" stroke-width="0.33"/><line x1="498.37" y1="502.21" x2="937.2" y2="273.77" fill="none" stroke="#000" stroke-width="0.33"/><line x1="499.47" y1="504.34" x2="938.31" y2="275.9" fill="none" stroke="#000" stroke-width="0.33"/>`;

    chartImg.append(...symbolsToPopulate);
    imgfrag.append(chartImg);

    const controls = document.createElement("div");
    controls.classList.add("controls");
    controls.id = "controls";

    const heading = document.createElement("h2");
    heading.classList.add("chart-heading");
    heading.textContent = `${chart.name}`;
    controls.append(heading);

    const birthday = document.createElement("ul");
    birthday.classList.add("birthday");
    const date = document.createElement("li");
    date.textContent = `Birthday: ${chart.birthday}`;
    const time = document.createElement("li");
    time.textContent = `Time: ${chart.time}`;
    const location = document.createElement("li");
    location.textContent = `Lat: ${chart.latitude.toFixed(
      2,
    )}, Long: ${chart.longitude.toFixed(2)}`;
    console.log(date, time);
    birthday.append(date, time, location);
    // heading.append(birthday);

    const printButton = document.createElement("button");
    printButton.textContent = "print chart";
    printButton.classList.add("btn", "waves-effect", "waves-light", "add-data");
    printButton.addEventListener("click", () => {
      window.print();
      // printJS({
      //   printable: "chart",
      //   type: "html",
      //   css: "./styles/styles.css",
      // });
    });

    const transButton = document.createElement("button");
    transButton.textContent = "Remove outline";
    transButton.classList.add("btn", "waves-effect", "waves-light", "add-data");
    transButton.addEventListener("click", () => {
      const outline = document.getElementById("chart");
      const children = outline.childNodes;
      for (const child of children) {
        if (!child.classList.contains("sign")) {
          child.classList.toggle("transparent");
        } else {
          return;
        }
      }
      // console.log("children", children);
      // children.classList.add("transparent");
      // outline.classList.add("transparent");
    });

    controls.append(printButton, transButton);
    mountNode.innerHTML = "";
    mountNode.append(controls);
    mountNode.append(imgfrag);
    mountNode.append(birthday);
    chart.img = imgfrag;
  }

  bcReport() {
    return `${this.Sun}  ${this.Moon} ${this.Ascendant} ${this.Mercury} ${this.Venus} ${this.Mars}  ${this.Jupiter}  ${this.Saturn}  ${this.Uranus}  ${this.Neptune}  ${this._id}`;
  }
}

export default BirthChart;
