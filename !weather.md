---
permalink: /weather
---

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Weather</title>
    <link rel="icon" type="image/x-icon" href="data:,">
</head>
<body class='sandiego-background'>
    <header class="header">
        <button class="signup" onclick="goHome()" >Home</button>
        <button class="login" onclick="goMap()">Map</button>
        <button class="about" onclick="goItinerary()">Itinerary</button>
    </header>
    <div id='weather-title-container'>
        <h1 class='title'>Weather</h1>
    </div>
    <br>
    <div class="weather-container">
        <img src="https://files.catbox.moe/l7i091.png" id="weather-icon" alt="Weather Icon">
        <div id="temperature"></div>
    </div>
<script>
    function fetchWeatherData() {
    fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/San%20Diego?unitGroup=us&include=current&key=8HDWUMHK5VWRJUG5CEQA5RNMQ&contentType=json")
    .then(response => response.json())
    .then(data => {
        console.log("Current conditions data:", data.currentConditions);
        const currentWeather = data.currentConditions.conditions; // Access the conditions property
        const temperature = data.currentConditions.temp;
        // Update weather icon based on current weather condition
        const weatherIcon = document.getElementById('weather-icon');
        if (currentWeather === 'Clear') {
            weatherIcon.src = 'https://files.catbox.moe/l7i091.png';
        } else if (currentWeather === 'Partially Cloudy') {
            weatherIcon.src = 'https://files.catbox.moe/tuz6jh.png';
        } else if (currentWeather === 'Rain') {
            weatherIcon.src = 'https://files.catbox.moe/f9pt4r.png';
        } // No need for default icon setting here
        // Display temperature
        document.getElementById('temperature').textContent = `Temperature: ${temperature}°F`;
    })
    .catch(error => console.error('Error fetching weather data:', error));
}
        // Fetch weather data initially
        fetchWeatherData();
        // Refresh weather data every minute
        setInterval(fetchWeatherData, 60000); // 60000 milliseconds = 1 minute
</script>
</body>