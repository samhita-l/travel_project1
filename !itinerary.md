---
permalink: /itinerary
---
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <h1>Travel Itinerary</h1>
  <link href="https://cdn.quilljs.com/1.3.6/quill.snow.css" rel="stylesheet">
</head>
<body>
<header class="header">
    <button class="signup" onclick="home()" >Home</button>
    <button class="login" onclick="weather()">Weather</button>
    <button class="about" onclick="activities()">Activities</button>
</header>
<div id="container">
    <!--This allows the user to select the day they are planning activities for-->
    <label for="daySelector">Day:</label>
    <select id="daySelector">
    <option value="Monday">Monday</option>
    <option value="Tuesday">Tuesday</option>
    <option value="Wednesday">Wednesday</option>
    <option value="Thursday">Thursday</option>
    <option value="Friday">Friday</option>
    <option value="Saturday">Saturday</option>
    <option value="Sunday">Sunday</option>
    </select>
    <br>
    <br>
    <label for="timeSelector">Time:</label>
    <select id="timeSelector">
    <option value="1:00 AM">1:00 AM</option>
    <option value="2:00 AM">2:00 AM</option>
    <option value="3:00 AM">3:00 AM</option>
    <option value="4:00 AM">4:00 AM</option>
    <option value="5:00 AM">5:00 AM</option>
    <option value="6:00 AM">6:00 AM</option>
    <option value="7:00 AM">7:00 AM</option>
    <option value="8:00 AM">8:00 AM</option>
    <option value="9:00 AM">9:00 AM</option>
    <option value="10:00 AM">10:00 AM</option>
    <option value="11:00 AM">11:00 AM</option>
    <option value="12:00 PM">12:00 PM</option>
    <option value="1:00 PM">1:00 PM</option>
    <option value="2:00 PM">2:00 PM</option>
    <option value="3:00 PM">3:00 PM</option>
    <option value="4:00 PM">4:00 PM</option>
    <option value="5:00 PM">5:00 PM</option>
    <option value="6:00 PM">6:00 PM</option>
    <option value="7:00 PM">7:00 PM</option>
    <option value="8:00 PM">8:00 PM</option>
    <option value="9:00 PM">9:00 PM</option>
    <option value="10:00 PM">10:00 PM</option>
    <option value="11:00 PM">11:00 PM</option>
    <option value="12:00 AM">12:00 AM</option>
    </select>
    <br>
    <br>
    <label for="richText">Activities:</label>
    <div id="richText"></div>
    <!-- Quill library -->
    <script src="https://cdn.quilljs.com/1.3.6/quill.js"></script>
    <script src="http://127.0.0.1:4200/travel_project/script.js"></script>
    <script>
    // Initialize Quill
    var quill = new Quill('#richText', {
        theme: 'snow' // Use the 'snow' theme for rich text editing
    });
    </script>
</div>

</body>