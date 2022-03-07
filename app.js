let now = new Date();
let days = [
  "Sunday",
  "Monday",
  "Tueday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
let hour = now.getHours();
if (hour < 10) {
  hour = `0${hour}`;
}
let minute = now.getMinutes();
if (minute < 10) {
  minute = `0${minute}`;
}
let h3 = document.querySelector("h3");
h3.innerHTML = ` ${day} ${hour}:${minute} `;

function showTemperature(response) {
  let temperature = Math.round(response.data.main.temp);
  let temp = document.querySelector("#temp");
  temp.innerHTML = `${temperature} <sup>°c</sup>`;
  let humidity = response.data.main.humidity;
  let humid = document.querySelector("#humidity");
  humid.innerHTML = `${humidity}%`;
  let windSpeed = Math.round(response.data.wind.speed);
  let wind = document.querySelector("#wind");
  wind.innerHTML = `${windSpeed}`;
  let notice = response.data.weather[0].description;
  let note = document.querySelector("#note");
  note.innerHTML = `${notice}`;
  document.querySelector("#place").innerHTML = response.data.name;
}

function search(city) {
let apiKey = `9941e27eb40543810ee2a95e3ea433af`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&&units=metric`;
  axios.get(apiUrl).then(showTemperature);
}


search("Abuja");

function password(event) {
  event.preventDefault();
  let city = document.querySelector("#search").value;
  search(city);
let signUp = document.querySelector("#form");
signUp.addEventListener("submit", password);

 }


function searchLocation(position){
  let apiKey = `9941e27eb40543810ee2a95e3ea433af`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&&units=metric`;
  axios.get(apiUrl).then(showTemperature);
}
function locationTemperature(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchLocation);
}

let myLocation = document.querySelector("#clickButton");
myLocation.addEventListener("click", locationTemperature);

