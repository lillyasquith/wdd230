//WEATHER API
// select HTML elements in the document
const currentTemp = document.querySelector("#temp");
const weatherIcon = document.querySelector("#weather-icon");
const weatherDesc = document.querySelector("figcaption");
const currentSpeed = document.querySelector("#speed");
const humidity = document.querySelector("#humid");

//create an "url" variable using const that stores the API call
const weatherUrl =
  "https://api.openweathermap.org/data/2.5/weather?lat=37.93836&lon=-121.71035&units=imperial&appid=c997a331d2044e07373c41f6ea65c0c4";
  //write a defined asynchronous function that will use fetch() to request the given weather api url and then try to convert the response using a JSON parser that is built-in
async function apiFetch() {
  try {
    const response = await fetch(weatherUrl);
    if (response.ok) {
      const data = await response.json();
      //console.log(data); // this is for testing the call
      displayResults(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}
apiFetch();

function displayResults(weatherData) {
  currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;
  currentSpeed.innerHTML = `<strong>${weatherData.wind.speed.toFixed(0)}</strong> mph`;
  humidity.innerHTML = weatherData.main.humidity.toFixed(0);

  const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
  const description = weatherData.weather[0].description;

  weatherIcon.setAttribute("src", iconsrc);
  weatherIcon.setAttribute("alt", "desc");
  weatherDesc.textContent = description;
}

// Select the DOM elements to manipulate
const datefield = document.getElementById("today");
// derive the current date using a date object
let date = new Date();
const currentDate = new Date();
let day = date.toLocaleString('en-us', {weekday: 'long'});
datefield.textContent = day;


// (3) day temperature forecast
const forecastUrl = 
  "https://api.openweathermap.org/data/2.5/forecast?lat=37.93836&lon=-121.71035&units=imperial&appid=c997a331d2044e07373c41f6ea65c0c4"
async function fetchForecastData() {
  try {
    const response = await fetch(forecastUrl);
    if (response.ok) {
      const data = await response.json();
      showWeatherdata(data.forecastData);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}
fetchForecastData();

const forecastcards = document.getElementById("cards");

function showWeatherdata(forecastData) {
  forecastcards.innerHTML = "";

  let filteredEl = forecastData.filter((weather) => 
  weather.temp && weather.humidity && weather.speed);

  filteredEl = filteredEl.slice(0,3);

  filteredEl.forEach ((card) => {
    let unit = document.createElement("div");
    let icon = document.createElement("img");
    let temp = document.createElement("h2");
    let desc = document.createElement("figcaption")
    let windspeed = document.createElement("p");
    let humidity = document.createElement("p");

    temp.innerHTML = `<strong>${card.main.temp.toFixed(
      0
    )}</strong>`;
    windspeed.innerHTML = `<strong>${card.wind.speed.toFixed(
      0
    )}</strong> mph`;
    humidity.innerHTML = card.main.humidity.toFixed(
      0
    )
    const iconsrc = `https://openweathermap.org/img/w/${card.weather[0].icon}.png`;
    const description = card.weather[0].description;
  
    icon.setAttribute("src", iconsrc);
    icon.setAttribute("alt", "desc");
    desc.textContent = description;
  
    unit.appendChild(icon);
    unit.appendChild(temp);
    unit.appendChild(desc);
    unit.appendChild(windspeed);
    unit.appendChild(humidity);
  
    forecastcards.appendChild(unit);

  });
}