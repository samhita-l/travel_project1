---
permalink: /activities
---
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Search Table</title>
<style>
    table {
        border-collapse: collapse;
        width: 100%;
    }
    th, td {
        border: 1px solid #ddd;
        padding: 8px;
        text-align: left;
    }
    tr:nth-child(even) {
        background-color: #f2f2f2;
    }
    input[type=text] {
        width: 100%;
        padding: 12px 20px;
        margin: 8px 0;
        box-sizing: border-box;
    }
</style>
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

<script>
function searchTable() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("searchInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("activity-table");
    tr = table.getElementsByTagName("tr");

    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0]; // Change index to match the column you want to search
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }       
    }
}

function displayActivityTable() {
    let options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
    };
    fetch("http://127.0.0.1:8086/api/activities/", options)
    .then(response => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error('Network response was not ok.');
        }
    })
    .then(data => {
        const tableBody = document.querySelector("#activity-table tbody");
        tableBody.innerHTML = ""; // Clear the existing table data
        data.forEach(activity => {
            const row = tableBody.insertRow();
            const nameCell = row.insertCell(0);
            const familyFriendlyCell = row.insertCell(1);
            const adultFriendlyCell = row.insertCell(2);
            const indoorsCell = row.insertCell(3);
            const outdoorsCell = row.insertCell(4);
                
            nameCell.textContent = activity.name;
            familyFriendlyCell.textContent = activity.family;
            adultFriendlyCell.textContent = activity.adult;
            indoorsCell.textContent = activity.indoors;
            outdoorsCell.textContent = activity.outdoors;
        });
    })
    .catch(error => {
        console.error('Error:', error);
        alert(error);
    });
}


window.onload = displayActivityTable;
</script>