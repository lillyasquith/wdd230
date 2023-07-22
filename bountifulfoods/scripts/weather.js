//WEATHER API
// select HTML elements in the document
// const currentTemp = document.querySelector("#temp");
// const weatherIcon = document.querySelector("#weather-icon");
// const weatherDesc = document.querySelector("figcaption");
// const currentSpeed = document.querySelector("#speed");
// const humidity = document.querySelector("#humid");

// //create an "url" variable using const that stores the API call
// const weatherUrl =
//   "https://api.openweathermap.org/data/2.5/weather?lat=37.93836&lon=-121.71035&units=imperial&appid=c997a331d2044e07373c41f6ea65c0c4";
//   //write a defined asynchronous function that will use fetch() to request the given weather api url and then try to convert the response using a JSON parser that is built-in
// async function apiFetch() {
//   try {
//     const response = await fetch(weatherUrl);
//     if (response.ok) {
//       const data = await response.json();
//       //console.log(data); // this is for testing the call
//       displayResults(data);
//     } else {
//       throw Error(await response.text());
//     }
//   } catch (error) {
//     console.log(error);
//   }
// }
// apiFetch();

// function displayResults(weatherData) {
//   currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;
//   currentSpeed.innerHTML = `<strong>${weatherData.wind.speed.toFixed(0)}</strong> mph`;
//   humidity.innerHTML = weatherData.main.humidity.toFixed(0);

//   const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
//   const description = weatherData.weather[0].description;

//   weatherIcon.setAttribute("src", iconsrc);
//   weatherIcon.setAttribute("alt", "desc");
//   weatherDesc.textContent = description;
// }


// (3) day temperature forecast

const today = document.querySelector(".date1");
let d = new Date();
let day1 = d.toLocaleString('en-us', {weekday: 'long'});
today.textContent = day1;

const tmr = document.querySelector(".date2");
let tomorrow = new Date(d)
tomorrow.setDate(tomorrow.getDate()+ 1)
let day2 = tomorrow.toLocaleString('en-us', {weekday: 'long'});
tmr.textContent = day2;

const tfd = document.querySelector(".date3");
let thefollowingDay = new Date(d)
thefollowingDay.setDate(thefollowingDay.getDate()+ 2)
let day3 = thefollowingDay.toLocaleString('en-us', {weekday: 'long'});
tfd.textContent = day3;

const forecastUrl = 
  "https://api.openweathermap.org/data/2.5/forecast?lat=37.93836&lon=-121.71035&units=imperial&appid=c997a331d2044e07373c41f6ea65c0c4"
async function fetchForecastData() {
  try {
    const response = await fetch(forecastUrl);
    if (response.ok) {
      const data = await response.json();
      showWeatherdata(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}
fetchForecastData();
function showWeatherdata(weatherData) {

  const forecastData = weatherData.list;

  for (let i = 1; i <= 3; i++) {

    const dayData = forecastData[i * 8 - 1];

    const temp = dayData.main.temp.toFixed(0);

    const desc = dayData.weather[0].description;

    const humid = dayData.main.humidity.toFixed(0);

    const iconsrc = `https://openweathermap.org/img/wn/${
      dayData.weather[0].icon
    }@2x.png`;

    document.querySelector(`#day${i}-temp`).textContent = temp + "°F";

    document.querySelector(`#day${i}-figcaption`).textContent = desc;

    document.querySelector(`#day${i}-icon`).setAttribute("src", iconsrc);

    document.querySelector(`#day${i}-icon`).setAttribute("alt", desc);

    document.querySelector(`#day${i}-humid`).textContent = humid;
  }

}

