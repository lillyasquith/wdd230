const options = { weekday: "long", day: "numeric", month: "long", year: "numeric" };
const currentYear = new Date;
document.getElementById("currentdate").textContent = new Date().toLocaleTimeString("en-US", options);
document.querySelector("#year").textContent = currentYear.getFullYear();