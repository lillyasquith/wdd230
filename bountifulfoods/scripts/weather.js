//WEATHER API
// select HTML elements in the document
const currentTemp = document.querySelector("#temp");
const weatherIcon = document.querySelector("#weather-icon");
const weatherDesc = document.querySelector("figcaption");
const humidity = document.querySelector("#humid");

//create an "url" variable using const that stores the API call
const url =
  "https://api.openweathermap.org/data/2.5/weather?lat=37.93836&lon=-121.71035&units=imperial&appid=c997a331d2044e07373c41f6ea65c0c4";

//write a defined asynchronous function that will use fetch() to request the given weather api url and then try to convert the response using a JSON parser that is built-in
async function apiFetch() {
  try {
    const response = await fetch(url);
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
function displayResults(weatherData) {
  currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(
    0
  )}</strong>`;
  humidity.innerHTML = weatherData.main.humidity.toFixed(
    0
  )

  const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
  const description = weatherData.weather[0].description;

  weatherIcon.setAttribute("src", iconsrc);
  weatherIcon.setAttribute("alt", "desc");
  weatherDesc.textContent = description;
}
apiFetch();