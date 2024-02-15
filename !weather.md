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
        <button class="login" onclick="goWeather()">Weather</button>
        <button class="about" onclick="goActivities()">Activities</button>
    </header>
    <div id='weather-title-container'>
        <h1 class='title'>Weather</h1>
    </div>
    <div class="weather-container">
        <img src="weather/partlycloudy.png" id="weather-icon" alt="Weather Icon">
        <div id="temperature"></div>
    </div>
<script>
    function fetchWeatherData() {
        fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/San%20Diego?unitGroup=us&include=current&key=8HDWUMHK5VWRJUG5CEQA5RNMQ&contentType=json")
        .then(response => response.json())
        .then(data => {
            const currentWeather = data.currentConditions;
            const temperature = data.currentConditions.temp;
            // Update weather icon based on current weather condition
            const weatherIcon = document.getElementById('weather-icon');
            if (currentWeather === 'Clear') {
                weatherIcon.src = 'https://files.catbox.moe/l7i091.png';
            } else if (currentWeather === 'Partially Cloudy') {
                weatherIcon.src = 'https://files.catbox.moe/tuz6jh.png';
            } else if (currentWeather === 'Rain') {
                weatherIcon.src = 'https://files.catbox.moe/f9pt4r.png';
            } //else {
                //weatherIcon.src = 'weather/default.png'; // Default image for other conditions
            //}
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