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