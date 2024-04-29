---
permalink: /tracker
---

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Activity Logger</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 0;
            padding: 0;
            background-color: white; /* White background */
        }
        .header {
            display: flex;
            justify-content: space-around;
            align-items: center;
            padding: 10px 0;
        }
        .header button {
            background-color: white;
            color: black;
            border: 2px solid black;
            border-radius: 5px;
            padding: 10px 20px;
            font-size: 16px;
            cursor: pointer;
            transition: background-color 0.3s, color 0.3s;
        }
        .header button:hover {
            background-color: black;
            color: white;
        }
        #tracker-title-container {
            background-image: url('https://files.catbox.moe/yv91bj.png');
            background-size: cover;
            background-repeat: no-repeat;
            background-position: top;
            color: black; /* Black text */
            padding: 50px 20px;
            text-align: center;
        }
        #tracker {
            width: 70%; /* Adjust width as needed */
            margin: 0 auto; /* Center the textarea */
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 8px;
        }
        .tracker-container {
            text-align: center;
        }
        .data-container {
            border: 2px solid #ccc; /* Border style */
            padding: 20px; /* Padding inside the container */
            margin: 20px auto; /* Center the container */
            max-width: 600px; /* Maximum width of the container */
        }
        .tracker-buttons {
            padding: 10px 20px; /* Padding around the button text */
            background-color: #007bff; /* Button background color */
            color: white; /* Button text color */
            border: none; /* Remove button border */
            border-radius: 5px; /* Rounded corners */
            cursor: pointer; /* Show pointer cursor on hover */
            transition: background-color 0.3s ease; /* Smooth transition for background color */
        }
        /* Hover effect for the button */
        .tracker-buttons:hover {
            background-color: #0056b3; /* Darker background color on hover */
        }
        .form-group {
            margin-bottom: 1rem;
            display: flex;
            flex-direction: column;
            text-align: left;
        }
        .form-control {
            width: 100%;
            padding: 0.5rem 0.75rem;
            font-size: 1rem;
            line-height: 1.5;
            color: #495057;
            background-color: #fff;
            background-clip: padding-box;
            border: 1px solid #ced4da;
            border-radius: 0.25rem;
            transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
        }
        .form-control:focus {
            color: #495057;
            background-color: #fff;
            border-color: #80bdff;
            outline: 0;
            box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
        }
        .form-control::placeholder {
            color: #6c757d;
            opacity: 1;
        }
    </style>
</head>
<body>
    <header class="header">
        <button onclick="goHome()" >Home</button>
        <button onclick="goWeather()">Weather</button>
        <button onclick="goItinerary()">Itinerary</button>
    </header>
    <div id='tracker-title-container'>
        <h1 class='title'>Time Tracker</h1>
    </div>
    <br>
    <div class="tracker-container">
        <div class="form-group">
            <label for="activity">Activity:</label>
            <input type="text" class="form-control" id="activity">
        </div>
        <div class="form-group">
            <label for="hours">Hours:</label>
            <input type="number" class="form-control" id="hours" min="0" max="24">
        </div>
        <button class="tracker-buttons" onclick="logActivity()">Log Activity</button>
        <br>
        <br>
        <div class="data-container">
            <h2 class="subtitle">Your Logged Activities:</h2>
            <div id="logsContainer"></div> <!-- Here's the missing logsContainer -->
        </div>
        <div class="mt-4">
            <canvas id="pieChart" width="400" height="400"></canvas>
        </div>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <script>
        // Function to log activity
        function logActivity() {
            const activity = document.getElementById('activity').value;
            const hours = parseInt(document.getElementById('hours').value);
            // Save the log in localStorage
            const logs = JSON.parse(localStorage.getItem('logs')) || [];
            logs.push({ activity: activity, hours: hours });
            localStorage.setItem('logs', JSON.stringify(logs));
            // Update the logs section
            updateLogs(logs);
            // Update the pie chart
            updatePieChart(logs);
        }
        function updateLogs(logs) {
            const logsContainer = document.getElementById('logsContainer');
            logsContainer.innerHTML = '';
            logs.forEach(log => {
                const logDiv = document.createElement('div');
                logDiv.innerHTML = `<h3>${log.activity}</h3><p>Hours: ${log.hours}</p>`;
                logsContainer.appendChild(logDiv);
            });
        }
        function updatePieChart(logs) {
            const totalHours = logs.reduce((total, log) => total + log.hours, 0);
            const remainingHours = 24 - totalHours;
            const pieChartCanvas = document.getElementById('pieChart');
            const ctx = pieChartCanvas.getContext('2d');
            const labels = ['Logged Hours', 'Remaining Hours'];
            const colors = ['#36a2eb', '#ff6384'];
            const data = {
                labels: labels,
                datasets: [{
                    data: [totalHours, remainingHours],
                    backgroundColor: colors
                }]
            };
            const options = {
                responsive: true,
                maintainAspectRatio: false
            };
            if (window.pieChart) {
                // Check if pieChart instance exists and has a destroy method
                if (typeof window.pieChart.destroy === 'function') {
                    console.log('Destroying existing pieChart:', window.pieChart);
                    window.pieChart.destroy(); // Destroy existing chart if it exists
                } else {
                    console.warn('Unable to destroy pieChart: destroy method is not available.', window.pieChart);
                }
            } else {
                console.log('No existing pieChart found.');
            }
            window.pieChart = new Chart(ctx, {
                type: 'pie',
                data: data,
                options: options
            });
        }
    </script>
</body>
</html>