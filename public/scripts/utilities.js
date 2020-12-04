export async function makeCall(url = "", options = {}) {
  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw response;
    }
    const data = await response.json();
    return data;
  } catch (err) {
    return response;
  }
}

export const descDict = Object.freeze({
  Aries: "Libra",
  Taurus: "Scorpio",
  Gemini: "Sagittarius",
  Cancer: "Capricorn",
  Leo: "Aquarius",
  Virgo: "Pisces",
  Libra: "Aries",
  Scorpio: "Taurus",
  Sagittarius: "Gemini",
  Capricorn: "Cancer",
  Aquarius: "Leo",
  Pisces: "Virgo",
});

export const zodiacSymbols = Object.freeze(Object.keys(descDict));

export const planets = ['Sun',
'Moon',
'Ascendant',
'Mercury',
'Venus',
'Mars',
'Jupiter',
'Saturn',
'Uranus',
'Neptune',
'Pluto',
'Descendant'];

export function uuidv4() {
  return "xxxxx".replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}


export function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive 
}

export function getRandomPlanet() {
  const Rn = getRandomIntInclusive(0, planets.length - 1);
  let planetToCall = planets[Rn];
  // console.log("planetToCall", planetToCall);
  return planetToCall;
}

export function getRandomSign() {
  const Rn = getRandomIntInclusive(0, zodiacSymbols.length - 1);
  let signToCall = zodiacSymbols[Rn];
  // console.log("signToCall", signToCall);
  return signToCall;
}

export function isElement(obj) {
  try {
    //Using W3 DOM2 (works for FF, Opera and Chrome)
    return obj instanceof HTMLElement;
  }
  catch(e){
    //Browsers not supporting W3 DOM2 don't have HTMLElement and
    //an exception is thrown and we end up here. Testing some
    //properties that all elements have (works on IE7)
    return (typeof obj==="object") &&
      (obj.nodeType===1) && (typeof obj.style === "object") &&
      (typeof obj.ownerDocument ==="object");
  }
}