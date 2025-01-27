const api = "b9eab96489e75774124984081d1c3c2e";
const url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


const searchInput = document.querySelector(".search input");
const searchButton = document.querySelector(".search button");
const defaultCity = "New York";

async function weather(city) {
    try {
        const response = await fetch(`${url}${city}&appid=${api}`);
        const data = await response.json();

        const weatherDescription = data.weather[0].description;
        const weatherIconCode = data.weather[0].icon;
        const weatherIconUrl = `https://openweathermap.org/img/wn/${weatherIconCode}@2x.png`;

        // Update the HTML with weather data
        document.querySelector("#city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = data.main.temp + "°C";
        document.querySelector(".wind").innerHTML = data.wind.speed + " Km/h";
        document.querySelector(".humadity").innerHTML = data.main.humidity + "%";
        document.querySelector(".weather-description").innerHTML = weatherDescription;
        document.querySelector(".weather-icon").src = weatherIconUrl;
    } catch (error) {
        console.error("Error fetching weather data:", error);
    }
}

window.onload = () => {
    weather(defaultCity);
};

searchButton.addEventListener("click", () => {
    const city = searchInput.value;
    if (city) {
        weather(city);
    }
});
