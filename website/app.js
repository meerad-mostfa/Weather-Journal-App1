
    const apiKey = 'd9acfd94f6cc474e1be2ab599b9e1e0a'; // استرجاع مفتاح API من OpenWeatherMap

document.getElementById('generate').addEventListener('click', () => {
    const zipCode = document.getElementById('zip').value;
    const feelings = document.getElementById('feelings').value;

    getWeatherData(zipCode)
        .then((data) => {
            const temperature = data.main.temp;
            const date = new Date().toLocaleDateString();

            updateUI(date, temperature, feelings);
        })
        .catch((error) => {
            console.error('Error fetching weather data:', error);
        });
});

async function getWeatherData(zipCode) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&appid=${apiKey}&units=metric`;

    const response = await fetch(apiUrl);

    if (response.ok) {
        return response.json();
    } else {
        throw new Error('Unable to fetch weather data.');
    }
}

function updateUI(date, temperature, feelings) {
    document.getElementById('date').textContent = `Date: ${date}`;
    document.getElementById('temp').textContent = `Temperature: ${temperature}°C`;
    document.getElementById('content').textContent = `Feeling: ${feelings}`;
}
