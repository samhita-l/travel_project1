---
permalink: /activities
---
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Activities</title>
</head>
<body class='sandiego-background'>
    <header class="header">
        <button onclick="goHome()" >Home</button>
        <button onclick="goWeather()">Weather</button>
        <button onclick="goItinerary()">Itinerary</button>
    </header>

<div id='activity-title-container'>
    <h1 class='title'>Activities</h1>
</div>

<input type="text" id="searchInput" onkeyup="searchTable()" placeholder="Search for activities...">
    <table id="activity-table">
        <thead>
            <tr>
                <th>Name</th>
                <th>Family Friendly</th>
                <th>Adult Friendly</th>
                <th>Indoors</th>
                <th>Outdoors</th>
            </tr>
        </thead>
        <tbody>
            <!-- Table body will be populated dynamically -->
        </tbody>
    </table>

<script src="http://127.0.0.1:4200/travel_project/script.js"></script>