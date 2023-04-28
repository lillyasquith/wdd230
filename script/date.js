const options = { weekday: "long", day: "numeric", month: "long", year: "numeric" };
const currentYear = new Date;
document.getElementById("currentdate").textContent = new Date().toLocaleTimeString("en-US", options);
document.querySelector("#year").textContent = currentYear.getFullYear();
// alert(document.lastModified); // No need to include the alert in JavaScript for the last modified date