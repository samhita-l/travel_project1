---
permalink: /login
---

<html>
<head>
    <title>Login</title>
</head>
<div class="form-container">
    <h2 id="pageTitle">Login</h2>
    <form>
        <input type="text" id="name" class="type" placeholder="Full Name"><br>
        <input type="text" id="user" class="type" placeholder="Username"><br>
        <input type="password" id="pass" class="type" placeholder="Password">
    </form>
    <button class="submit" onclick="signup()">Log In</button>
    <p id="error"></p>
    <button class="switch" onclick="switchToSignup()">Switch to Signup</button>
</div>
<script>
    function switchToSignup() {
        window.location.href = "http://127.0.0.1:4200/demonstration_frontend/signup";
    }
    function signup() {
        data = {
            "name": document.getElementById("name").value,
            "uid": document.getElementById("user").value,
            "password": document.getElementById("pass").value,
        }
        let OPTIONS = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(data),
            credentials: 'include'
        }
        fetch('http://127.0.0.1:8086/api/users/authenticate', OPTIONS)
        .then(response => {
            if (response.ok) {
                // Handle successful login
                const headers = response.headers;
                const headerEntries = [...headers.entries()]
                console.log('Response Headers:', headerEntries)
                console.log('All Cookies:', document.cookie);
                document.getElementById("error").innerHTML = ""
                const jwtCookie = getCookie('jwt');
                if (jwtCookie) {
                    console.log('JWT Token:', jwtCookie);
                } else {
                    console.log('JWT Token not found');
                }
                // Redirect to the desired page after successful login
                window.location.href = "http://127.0.0.1:4200/travel_project/home";
            }
            else {
                // Handle incorrect login information
                document.getElementById("error").innerHTML = "Incorrect Login Information";
                // You can also redirect to an error page or display a 403 error here
            }
        })
        .catch(error => {
            console.error("Error:", error);
        });
    }
    function getCookie(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
    }
</script>
</html>