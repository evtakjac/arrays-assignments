// HTML ELEMENTS
let firstNameEl = document.getElementById("first");
let lastNameEl = document.getElementById("last");
let randBtnEl = document.getElementById("rand");
let allBtnEl = document.getElementById("all");
// Universal Variables
let nicknames = [
  "Cheeselord",
  "The Great Deciever",
  "The Dragon of the West",
  "Fancy Pants",
  "Fuzzball",
  "Macho Man",
];
let output = 0;
let bandaidFix = 0;
// Event Listeners
randBtnEl.addEventListener("click", randNicks);
allBtnEl.addEventListener("click", allNicks);
// Functions
function randNicks() {
  document.getElementById("output").innerHTML = "";
  let randNum = (Math.random() * nicknames.length).toFixed();
  if (bandaidFix < 1) {
    firstNameEl = firstNameEl.value;
    lastNameEl = lastNameEl.value;
  }
  console.log(`${firstNameEl} ${lastNameEl} ${randNum}`);
  output = nicknames[randNum];
  document.getElementById(
    "output"
  ).innerHTML = `<span> ${firstNameEl} "${output}" ${lastNameEl} </span>`;
  bandaidFix++;
}

function allNicks() {
  document.getElementById("output").innerHTML = "";
  let firstNameVal = firstNameEl.value;
  let lastNameVal = lastNameEl.value;
  for (i = 0; i < nicknames.length; i++) {
    output = nicknames[i];
    document.getElementById(
      "output"
    ).innerHTML += `<span> ${firstNameVal} "${output}" ${lastNameVal} </span> <br>`;
  }
}
