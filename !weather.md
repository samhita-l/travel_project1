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
    <script src="http://127.0.0.1:4200/travel_project/script.js"></script>
</body>
</html>