---
permalink: /tracker
---

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Activity Logger</title>
</head>
<body>
    <div class="container mt-5">
        <h1 class="mb-4">Activity Logger</h1>
        <div class="form-group">
            <label for="activity">Activity:</label>
            <input type="text" class="form-control" id="activity">
        </div>
        <div class="form-group">
            <label for="hours">Hours:</label>
            <input type="number" class="form-control" id="hours" min="0" max="24">
        </div>
        <button class="btn btn-primary" onclick="logActivity()">Log Activity</button>
        <div id="logsContainer" class="mt-4"></div>
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
