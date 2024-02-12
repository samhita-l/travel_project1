---
permalink: /login
---

<html>
<head>
    <title>Login</title>
</head>
<body class='login-signup-background'>
<div class="form-container">
    <h2 id="pageTitle">Login</h2>
    <form>
        <input type="text" id="name" class="type" placeholder="Full Name"><br>
        <input type="text" id="user" class="type" placeholder="Username"><br>
        <input type="password" id="pass" class="type" placeholder="Password">
    </form>
    <button class="submit" onclick="login()">Log In</button>
    <p id="error"></p>
    <button class="switch" onclick="goSignup()">Don't Have an Account? Signup</button>
</div>
</body>
<script src="http://127.0.0.1:4200/travel_project/script.js"></script>