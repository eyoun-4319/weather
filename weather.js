// JavaScript Document

const api = {
	key: "e0b35d5e45d6e820069747726618c80a",
	baseurl: "https://api.openweathermap.org/data/2.5",
}

const searchbox = document.querySelector('.search-box');
searchbox.addEventListener('keypress', setQuery);

function setQuery(evt) {
	if (evt.keyCode == 13) {
		getResults(searchbox.value);
	}
}

function getResults (query) {
	fetch(`${api.base}weather?q=${query}&units=imperial&APPID=${api.key}`)
	.then(weather => {
		return weather.json();
	}).then(displayResults);
}

function displayResults (weather) {
	console.log(weather);
	let city = document.querySelector('.location .city');
	city.innerText = `${weather.name}, ${weather.sys.country}`;
	
	let now = new Date();
	let dae = document.querySelector('.location .date');
	date.innerText = dateBuilder(now);
	
	let temp = document.querySelector('.current .temp');
	temp.innerHTML = `${Math.round(weather.main.temp_min)}&deg;f / ${math.round(weather.main.temp_max)}&deg;f`;
}

function dateBuilder (d) {
  let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  let day = days[d.getDay()];
  let date = d.getDate();
  let month = months[d.getMonth()];
  let year = d.getFullYear();

  return `${day} ${date} ${month} ${year}`;
}