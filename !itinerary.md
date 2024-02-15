---
permalink: /itinerary
---
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://cdn.quilljs.com/1.3.6/quill.snow.css" rel="stylesheet">
</head>
<body class='sandiego-background'>
    <header class="header">
        <button class="signup" onclick="goHome()" >Home</button>
        <button class="login" onclick="goWeather()">Weather</button>
        <button class="about" onclick="goActivities()">Activities</button>
    </header>
    <div id='itinerary-title-container'>
        <h1 class='title'>Travel Itinerary</h1>
    </div>
    <br>
    <br>
    <div class="itinerary-container">
        <h2 id="subtitle">Itinerary:</h2>
        <form>
            <textarea id="itinerary" class="input" placeholder="Start planning your itinerary here!"></textarea><br>
        </form>
        <button class="submit" onclick="itinerary()">Save</button>
        <p id="error"></p>
    <div class="data-container">
        <h2 id='subtitle'>Your Itinerary:</h2>
        <div id="data"></div>
    </div>
    </div>
<script src="http://127.0.0.1:4200/travel_project/script.js"></script>