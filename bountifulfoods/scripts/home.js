//Hambuger menu
function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
  }
  const x = document.getElementById("hamburgerBtn");
  x.onclick = toggleMenu;
  
//Last Modification
const options = {
  weekday: "long",
  day: "numeric",
  month: "long",
  year: "numeric",
};

document.getElementById("currentdate").textContent = new Date().toLocaleTimeString("en-US", options);

const currentYear1 = new Date();
document.querySelector("#year").textContent = currentYear1.getFullYear();

// DISPLAY NUMBER OF DRINKS IN THE HOME PAGE
const displayDrinks = document.querySelector("#total-drinks");
let numberOfDrinks = Number(window.localStorage.getItem("numDrinks-ls")) || 0;

if (displayDrinks !== null) {
  if (numberOfDrinks !== 0) {
    displayDrinks.innerHTML = numberOfDrinks;
  } else {
    displayDrinks.innerHTML = "You have not made any orders yet.";
  }
}