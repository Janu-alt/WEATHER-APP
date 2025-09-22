const apiKey = "https://api.weatherxu.com"; // Replace with your actual OpenWeatherMap API key
const weatherBox = document.getElementById("weatherBox");

async function getWeather() {
  const city = document.getElementById("cityInput").value.trim();
  if (!city) return alert("Please enter a city name");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("City not found");

    const data = await response.json();

    // Set values
    document.getElementById("cityName").textContent = data.name;
    document.getElementById("temperature").textContent = `${Math.round(data.main.temp)}°C`;
    document.getElementById("humidity").textContent = `${data.main.humidity}%`;
    document.getElementById("wind").textContent = `${data.wind.speed} km/h`;

    const iconCode = data.weather[0].icon;
    document.getElementById("weatherIcon").src = `http://openweathermap.org/img/wn/${iconCode}@2x.png`;

    weatherBox.style.display = "block";
  } catch (error) {
    alert(error.message);
    weatherBox.style.display = "none";
  }
}

