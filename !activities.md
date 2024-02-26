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
<body>

<input type="text" id="searchInput" onkeyup="searchTable()" placeholder="Search for activities...">

<table id="activityTable">
    <thead>
        <tr>
            <th>Activity</th>
            <th>Family Friendly</th>
            <th>Adult</th>
            <th>Indoors</th>
            <th>Outdoors</th>
        </tr>
    </thead>
    <tbody id="data-body">
        <!-- Data will be populated here -->
    </tbody>
</table>

<script>
function searchTable() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("searchInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("activityTable");
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

function fetchAllActivities() {
    let options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        credentials: 'include'
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
        const headers = Object.keys(data[0]);
        const dataBody = document.getElementById("data-body");
        data.forEach(item => {
            const row = document.createElement("tr");
            headers.forEach(header => {
                const cell = document.createElement("td");
                cell.textContent = item[header];
                row.appendChild(cell);
            });
            dataBody.appendChild(row);
        });
    })
    .catch(error => {
        console.error('Error fetching data:', error);
        // Handle error gracefully, for example:
        alert('Error fetching data. Please try again later.');
    });
}

window.onload = fetchAllActivities;
</script>