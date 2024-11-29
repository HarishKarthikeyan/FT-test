const weatherElement = document.getElementById('weather');

// Replace with your OpenWeather API key
// const apiKey = 'a0d935ffcc7fcd7223d3cec50d8c51f5';
// const city = 'Pune'; 
// const units = 'metric'; 

// Function to fetch and display weather data
async function fetchWeather() {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=Pune&appid=a0d935ffcc7fcd7223d3cec50d8c51f5`
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data.main.temp)
    let temp = data.main.temp
    displayWeather(temp);
  } catch (error) {
    weatherElement.textContent = `Error fetching weather data: ${error.message}`;
  }
}

function displayWeather(data) {
  weatherElement.textContent = `${data}`;
}

setInterval(fetchWeather, 30000);

fetchWeather();
