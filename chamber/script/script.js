const options = {
  weekday: "long",
  day: "numeric",
  month: "long",
  year: "numeric",
};
const currentYear = new Date();
document.getElementById("currentdate").textContent =
  new Date().toLocaleTimeString("en-US", options);
document.querySelector("#year").textContent = currentYear.getFullYear();

// Datetime for header
// Select the DOM elements to manipulate
const datefield = document.querySelector("time");
// derive the current date using a date object
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-UK", {
  dateStyle: "full",
}).format(now);
datefield.textContent = fulldate;
