//Get the two input values of temperature and wind speed
// let speedElement = document.getElementById("speed");
// const speed = 5;
// speedElement.innerHTML = `${speed} mph`;
// console.log(speed);

// let tempElement = document.getElementById("temp");
// const temp = 50;
// tempElement.innerHTML = `${temp} °F`;

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

//WEATHER API
// select HTML elements in the document
const currentTemp = document.querySelector("#temp");
const currentSpeed = document.querySelector("#speed");
const weatherIcon = document.querySelector("#weather-icon");
const weatherDesc = document.querySelector("figcaption");

//create an "url" variable using const that stores the API call
const url =
  "https://api.openweathermap.org/data/2.5/weather?q=Tooele&units=imperial&appid=c997a331d2044e07373c41f6ea65c0c4";

//write a defined asynchronous function that will use fetch() to request the given weather api url and then try to convert the response using a JSON parser that is built-in
async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log(data); // this is for testing the call
      displayResults(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}
function displayResults(weatherData) {
  currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(
    0
  )}</strong>`;
  currentSpeed.innerHTML = `<strong>${weatherData.wind.speed.toFixed(
    0
  )}</strong> mph`;

  const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
  const desc = weatherData.weather[0].description;

  weatherIcon.setAttribute("src", iconsrc);
  weatherIcon.setAttribute("alt", "desc");
  weatherDesc.textContent = desc;
}
apiFetch();
