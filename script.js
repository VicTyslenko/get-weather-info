

const API_TOKEN = '00555d7aa30c0bf2ab4a4e855b5b9a2b';
const API_URL = 'https://api.openweathermap.org';
const ICON_URL = 'http://openweathermap.org/img/wn/';
const icons = {
	'01d': 'weather-icon-clear-sky', /*clear sky*/
	'02d': 'weather-icon-few-clouds', /*few clouds*/
	'03d': 'weather-icon-scattered-clouds', /*scattered clouds*/
	'04d': 'weather-icon-broken-clouds', /*broken clouds*/
	'09d': 'weather-icon-shower-rain', /*shower rain*/
	'10d': 'weather-icon-rain', /*rain*/
	'11d': 'weather-icon-thunderstorm', /*thunderstorm*/
	'13d': 'weather-icon-snow', /*snow*/
	'50d': 'weather-icon-mist', /*mist*/
	'01n': 'weather-icon-night-clear-sky',/*clear sky*/
	'02n': 'weather-icon-night-few-clouds',/*few clouds*/
	'03n': 'weather-icon-night-scattered-clouds',/*scattered clouds*/
	'04n': 'weather-icon-broken-clouds',/*broken clouds*/
	'09n': 'weather-icon-night-shower-rain',/*shower rain*/
	'10n': 'weather-icon-night-rain',/*rain*/
	'11n': 'weather-icon-night-thunderstorm',/*thunderstorm*/
	'13n': 'weather-icon-night-snow',/*snow*/
	'50n': 'weather-icon-night-mist',/*mist*/
}
const MONTHS = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ]

const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const city = document.querySelector('.city');
const month = document.querySelector('#month');
const day = document.querySelector('#day');
const sidebar = document.querySelector('#sidebar');

const renderWeatherWidget = (url) => {
	fetch(url)
		.then((response)=>response.json())
		.then((data) => {
			console.log(data);
			const {name, weather,dt,main } = data
			const date = new Date(dt * 1000);
			// console.log(date);
			
			const currentClass = icons[weather[0].icon]
			if (currentClass){
				weatherIcon.className = 'weather-icon'
			}
			weatherIcon.classList.add(currentClass) // icons[weather[0].icon] =>> weather-icon-night-scattered-clouds
			temperature.innerHTML = Number.parseInt(main.temp);
			city.innerHTML = name;
			description.innerHTML = weather[0].description
			day.innerHTML = date.getDate();
			month.innerHTML = MONTHS[date.getMonth()]
		})
  
}

sidebar.addEventListener('input', (e) => {
	const id = e.target.getAttribute('id');
	
	renderWeatherWidget(`${API_URL}/data/2.5/weather?id=${id}&units=metric&appid=${API_TOKEN}`)
})