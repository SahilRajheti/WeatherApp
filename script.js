const apiKey = "a57aa2372adae9c9c09c7f91a370d114";

async function getWeather() {
  const city = document.getElementById("cityInput").value.trim();
  const weatherBox = document.getElementById("weatherInfo");
  const icon = document.getElementById("weatherIcon");

  if (city === "") {
    weatherBox.innerHTML = "<p>Please enter a city name.</p>";
    icon.style.display = "none";
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.cod === "404") {
      weatherBox.innerHTML = "<p>City not found. Try again.</p>";
      icon.style.display = "none";
      document.body.className = "";
      return;
    }

    // Weather icon and background
    const mainWeather = data.weather[0].main.toLowerCase();
    let iconUrl = "";

   // ==============================
// 1️⃣ Service Worker Registration
// ==============================
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/SahilRajheti/service-worker.js')
      .then(reg => console.log('Service Worker registered successfully!', reg))
      .catch(err => console.log('Service Worker registration failed:', err));
  });
}

// ==============================
// 2️⃣ Function: Set Weather Theme
// ==============================
function setWeatherTheme(weather) {
  const root = document.documentElement;

  if (weather === 'clear') {       // Sunny / Clear
    root.style.setProperty('--bg-color', '#87CEEB');       // light sky blue
    root.style.setProperty('--primary-color', '#0d6efd');  // buttons
    root.style.setProperty('--text-color', '#333');        // text
  } 
  else if (weather === 'rain') {   // Rainy
    root.style.setProperty('--bg-color', '#6A7FDB');       // slate blue
    root.style.setProperty('--primary-color', '#1E90FF');  
    root.style.setProperty('--text-color', '#fff');
  } 
  else if (weather === 'clouds') { // Cloudy
    root.style.setProperty('--bg-color', '#B0C4DE');       // soft gray
    root.style.setProperty('--primary-color', '#4682B4');  
    root.style.setProperty('--text-color', '#333');
  } 
  else if (weather === 'snow') {   // Snow
    root.style.setProperty('--bg-color', '#F0F8FF');       // very light gray
    root.style.setProperty('--primary-color', '#ADD8E6');  
    root.style.setProperty('--text-color', '#333');
  } 
  else if (weather === 'night') {  // Night
    root.style.setProperty('--bg-color', '#1E3A8A');       // deep blue
    root.style.setProperty('--primary-color', '#00c6ff');  
    root.style.setProperty('--text-color', '#fff');
  } 
  else {                           // Default
    root.style.setProperty('--bg-color', '#87CEEB');
    root.style.setProperty('--primary-color', '#0d6efd');
    root.style.setProperty('--text-color', '#333');
  }
}

// ==============================
// 3️⃣ Function: Fetch Weather Data
// ==============================
document.getElementById('getWeatherBtn').addEventListener('click', () => {
  const city = document.getElementById('cityInput').value.trim();
  const apiKey = 'a57aa2372adae9c9c09c7f91a370d114'; // Your API key

  if (city === '') {
    alert('Please enter a city name');
    return;
  }

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
    .then(res => res.json())
    .then(data => {
      if (data.cod !== 200) {
        alert('City not found!');
        return;
      }

      const weather = data.weather[0].main.toLowerCase(); // e.g., "clear", "rain"
      setWeatherTheme(weather); // Update theme dynamically

      // Display weather info
      document.getElementById('weatherResult').innerHTML = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <p>Temperature: ${data.main.temp}°C</p>
        <p>Weather: ${data.weather[0].main}</p>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>Wind Speed: ${data.wind.speed} m/s</p>
      `;
    })
    .catch(err => {
      console.error(err);
      alert('Error fetching weather data');
    });
});

// End of getWeather function
