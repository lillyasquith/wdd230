const options = { weekday: "long", day: "numeric", month: "long", year: "numeric" };
document.getElementById("currentdate").textContent = new Date().toLocaleTimeString("en-US", options);
alert(document.lastModified);