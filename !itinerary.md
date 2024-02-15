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
        <h2>Your Itinerary:</h2>
        <div id="data"></div>
    </div>
    </div>
<script>
    function itinerary() {
            // Get the text content from the textarea
            let text = document.getElementById("itinerary").value;
            // Create an object with the text data and a unique UID (timestamp)
            let data = {
                "itinerary": text
            };
            // Configure fetch options
            let options = {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify(data),
                credentials: 'include'
            };
            // Send the text data to the backend
            fetch('http://127.0.0.1:8086/api/users/itinerary', options)
                .then(response => {
                    if (response.ok) {
                        // Handle successful submission
                        document.getElementById("error").innerHTML = "Itinerary updated!";
                        // Fetch updated images after submission
                        fetchItinerary()
                    } else {
                        // Handle submission error
                        return response.json().then(errorData => {
                            if (errorData && errorData.message) {
                                document.getElementById("error").innerHTML = errorData.message;
                            } else {
                                document.getElementById("error").innerHTML = "Error submitting itinerary";
                            }
                        });
                    }
                })
                .catch(error => {
                    console.error("Error:", error);
                    document.getElementById("error").innerHTML = "Error submitting itinerary";
                });
        }
        function fetchItinerary() {
    let options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
    };
    fetch("http://127.0.0.1:8086/api/users/itinerary", options)
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Network response was not ok.');
            }
        })
        .then(data => {
            let itemlist = [];
            data.forEach(entry => {
                if (entry.includes("///")) {
                    let splitEntries = entry.split("///");
                    itemlist = itemlist.concat(splitEntries);
                } else {
                    itemlist.push(entry);
                }
            });
            let dataContainer = document.getElementById("data");
            dataContainer.innerHTML = "";  // Clear previous content
            // Create a box for each item in the array
            itemlist.forEach(item => {
                let box = document.createElement("div");
                box.className = "data-box";
                box.textContent = item;  // Assuming 'itinerary' is the property you want to display
                dataContainer.appendChild(box);
            });
        })
        .catch(error => {
            console.error("Error:", error);
            document.getElementById("data").textContent = "Error fetching itinerary";
        });
}
