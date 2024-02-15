---
permalink: /about
---
<head>
 <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>About</title>
     <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body id='sandiego-background'>
<header class="header">
    <button class="about" onclick="gohomepage()">Home</button>
    <button class="signup" onclick="signup()" >Signup</button>
    <button class="login" onclick="login()">Login</button>
</header>
<div class="about-title-container">
    <h1 class="title">About</h1>
</div>
    <div style="text-align: center;">
     <p>Our website was designed to help people plan and visualize their trip to San Diego. Our theme was inspired by where we live, and we wanted to help share it with others. Our site gives information on the weather and activities in San Diego, and you can use that information along with our itinerary to plan when and where you want to go. The map embedded into our site makes directions to your activities easily accessible. Create an account on our site to save your travel plans, and you're all set for your next trip to San Diego!
     </p>
  <div id="comment-section">
  <form>
    <h2>Comments</h2>
    <div id="comments"></div>
    <textarea id="comment-input" placeholder="Add a comment..."></textarea>
  </form>
    <button onclick="addComment()">Post Comment</button>
</div>
<script src="http://127.0.0.1:4200/travel_project/script.js"></script>