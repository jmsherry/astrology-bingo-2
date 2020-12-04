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

export function printPageArea(areaID){
  const printContent = document.getElementById(areaID);
  var printWindow = window.open('', '', 'width=900,height=650');
  printWindow.document.write(printContent.innerHTML);
  printWindow.document.close();
  printWindow.focus();
  printWindow.print();
  printWindow.close();
}
