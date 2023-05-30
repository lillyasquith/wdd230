//Get the two input values of temperature and wind speed
let speedElement = document.getElementById("speed");
const speed = 5;
speedElement.innerHTML = `${speed} mph`;
console.log(speed);

let tempElement = document.getElementById("temp");
const temp = 50;
tempElement.innerHTML = `${temp} °F`;

//Compute the windchill
let windchill =
  35.74 +
  0.6215 * temp -
  35.75 * Math.pow(speed, 0.16) +
  0.4275 * temp * Math.pow(speed, 0.16);

//Round the answer down to interger
windchill = Math.round(windchill);

//Check to make sure they meet the specification limits  (<=50°F and >3.0mph) allowed to officially calculate the wind chill, and
if (temp <= 50 && speed > 3.0) {
  document.querySelector("#wc").textContent = `${windchill}° F`;
  // OR this is another way to display the windchill to console
  //  const wc = document.querySelector("#wc");
  //  console.log(windchill);
  //  wc.innerHTML = `${windchill}°F`;
}
//either calculate and display the wind chill factor value or display "N/A" (not applicable) if the input values did not meet the requirements.
else {
  document.querySelector("#wc").textContent = "N/A";
}
