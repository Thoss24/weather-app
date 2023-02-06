import display from "./display";
import weather from "./weather";

const city = document.getElementById('search-city');
const searchCityButton = document.getElementById('search-city-button');

searchCityButton.addEventListener('click', async () => {
    if (city.value === "") {
        alert("Please enter location")
        return
    }
    const weatherInfo = await weather.getWeather(city.value)
});




