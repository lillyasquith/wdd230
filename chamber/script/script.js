//Datetime for footer
const options = {
  weekday: "long",
  day: "numeric",
  month: "long",
  year: "numeric",
};

document.getElementById("currentdate1").textContent =
  new Date().toLocaleTimeString("en-US", options);

document.getElementById("currentdate2").textContent =
  new Date().toLocaleTimeString("en-US", options);

const currentYear1 = new Date();
document.querySelector("#year1").textContent = currentYear1.getFullYear();
const currentYear2 = new Date();
document.querySelector("#year2").textContent = currentYear2.getFullYear();

// Datetime for header
// Select the DOM elements to manipulate
const datefield = document.querySelector("time");
// derive the current date using a date object
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-UK", {
  dateStyle: "full",
}).format(now);
datefield.textContent = fulldate;

//Hambuger menu
function toggleMenu() {
  document.getElementById("primaryNav").classList.toggle("open");
  document.getElementById("hamburgerBtn").classList.toggle("open");
}
const x = document.getElementById("hamburgerBtn");
x.onclick = toggleMenu;

//Banner displays only on Mondays or Tuesdays
let weekDay = now.getDay();
let message;
if (weekDay == 1 || weekDay == 2) {
  message = document.getElementById("banner").innerHTML;
} else {
  message = document.getElementById("banner").remove();
}
