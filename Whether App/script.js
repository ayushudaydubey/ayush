const apiKey = "add39081d202c5d9f2cc8041da210050";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?appid=" + apiKey + "&units=standard&q=";

const searchBtn = document.querySelector(".search button");
const searchBox = document.querySelector(".search input");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city);
    
    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else {
        let data = await response.json();

        // Kelvin se Celsius me convert karna
        let tempInCelsius = data.main.temp - 273.15;

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(tempInCelsius) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".Wind").innerHTML = data.wind.speed + " km/h";

        // Weather type ke hisaab se image change karna
        const weatherType = data.weather[0].main;

        if (weatherType == "Clouds") {
            weatherIcon.src = "images/clouds.png";
            
        } else if (weatherType == "Clear") {
            weatherIcon.src = "images/clear.png";
        } else if (weatherType == "Rain") {
            weatherIcon.src = "images/rain.png";
        } else if (weatherType == "Drizzle") {
            weatherIcon.src = "images/drizzle.png";
        } else if (weatherType == "Mist") {
            weatherIcon.src = "images/mist.png";
        }

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});
