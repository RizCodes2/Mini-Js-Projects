
const searchBtn = document.getElementById("search-btn");
const cityInput = document.getElementById("city-input");


// Elements to update
const cityName = document.getElementById("city-name");
const temp = document.getElementById("temp");
const description = document.getElementById("description");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");
const forecastContainer = document.getElementById("forecast-days");


async function getWeatherData(city) {
    try {
        // 1. Pehle City Name se Latitude aur Longitude nikalna
        
        const geoUrl = `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1&language=en&format=json`;
        const geoRes = await fetch(geoUrl);
        const geoData = await geoRes.json();

        console.log(geoData);

        if (!geoData.results) {
            alert("City not found!");
            return;
        }

        const { latitude, longitude, name, country } = geoData.results[0];
        cityName.innerText = `${name}, ${country}`;

        // 2. Ab Weather Data fetch karna
        const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code&daily=weather_code,temperature_2m_max&timezone=auto`;

        const weatherRes = await fetch(weatherUrl);
        const data = await weatherRes.json(); 
        console.log(data);
        // UI Update: Current Weather
        temp.innerText = `${Math.round(data.current.temperature_2m)}°C`;
        humidity.innerText = `${data.current.relative_humidity_2m}%`;
        wind.innerText = `${data.current.wind_speed_10m} km/h`;
        description.innerText = getWeatherDesc(data.current.weather_code);

        // 3. 5-Day Forecast Update
        updateForecast(data.daily);

    } catch (error) {
        console.error("Error fetching data:", error);
        alert("Problem in data fetching ... ");
    }
}

function updateForecast(daily) {
    forecastContainer.innerHTML = ""; // Purana data clear karein

    // Daily arrays mein se data nikalna (Pehle 5 din)

    for (let i = 0; i < 5; i++) {
        const date = new Date(daily.time[i]);
        const dayName = date.toLocaleDateString('en-US', { weekday: 'short' });
        const maxTemp = Math.round(daily.temperature_2m_max[i]);
        const code = daily.weather_code[i];

        const forecastHTML = `
            <div class="forecast-item">
                <p>${dayName}</p>
                <img src="${getIconUrl(code)}" alt="icon">
                <span>${maxTemp}°C</span>
            </div>
        `;
        forecastContainer.innerHTML += forecastHTML;
    }
}

// Weather code to description

function getWeatherDesc(code) {
    const codes = {
        0: "Clear Sky",
        1: "Mainly Clear", 2: "Partly Cloudy", 3: "Overcast",
        45: "Foggy", 48: "Rime Fog",
        51: "Drizzle", 61: "Rainy",
        71: "Snowfall", 95: "Thunderstorm"
    };
    return codes[code] || "Cloudy";
}



function getIconUrl(code) {
    if (code === 0) return "https://openweathermap.org/img/wn/01d.png";
    if (code <= 3) return "https://openweathermap.org/img/wn/02d.png";
    if (code >= 95) return "https://openweathermap.org/img/wn/11d.png";
    if (code >= 61) return "https://openweathermap.org/img/wn/10d.png";
    return "https://openweathermap.org/img/wn/03d.png";
}

// Event Listeners
searchBtn.addEventListener("click", () => {
    if (cityInput.value) getWeatherData(cityInput.value);
});

cityInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter" && cityInput.value) getWeatherData(cityInput.value);
});

