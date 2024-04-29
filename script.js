// Get cookie function

function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}

// All of the functions that switch to a different page

function gohomepage() {
    window.location.href = "http://127.0.0.1:4200/travel_project/index.html";
}
function goLogin() {
    window.location.href = "http://127.0.0.1:4200/travel_project/login";
}
function goSignup() {
    window.location.href = "http://127.0.0.1:4200/travel_project/signup";
}
function goHome() {
    window.location.href = "http://127.0.0.1:4200/travel_project/home";
}
function goWeather() {
    window.location.href = "http://127.0.0.1:4200/travel_project/weather";
}
function goActivities() {
    window.location.href = "http://127.0.0.1:4200/travel_project/activities";
}
function goMap() {
    window.location.href = "http://127.0.0.1:4200/travel_project/map";
}
function goItinerary() {
    window.location.href = "http://127.0.0.1:4200/travel_project/itinerary";
}
function goTracker() {
    window.location.href = "http://127.0.0.1:4200/travel_project/tracker"
}

//Comments
function addComment() {
    var input = document.getElementById('comment-input');
    var comment = input.value.trim();
    if (comment) {
      var commentsContainer = document.getElementById('comments');
      var newComment = document.createElement('p');
      newComment.textContent = comment;
      commentsContainer.appendChild(newComment);
      input.value = ''; // Clear input field
    } else {
      alert('Please enter a comment.');
    }
  }

// Functions for signup and login
function signup() {
    data = {
        "name": document.getElementById("name").value,
        "uid": document.getElementById("user").value,
        "password": document.getElementById("pass").value,
        }
    let options = {
    method: 'POST',
    headers: {
        'Content-Type':
            'application/json;charset=utf-8'
    },
    body: JSON.stringify(data)
}
    let sign_up = fetch('http://127.0.0.1:8086/api/users/', options); // Update port to 8086
    // Local: http://127.0.0.1:8086/api/users/
    // Deployed: https://SanDiegoTravel.stu.nighthawkcodingsociety.com/api/users/
    sign_up.then(response => {
        if (response.status === 200) {
            window.location.href = "http://127.0.0.1:4200/travel_project/login"
        }
        else if (response.status === 400) {
            document.getElementById("error").innerHTML = "You already have an account! Go to the login page."
        }
    }
        ) 
}

function login() {
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
    fetch('http://127.0.0.1:4200/api/users/authenticate', OPTIONS) // Update port to 8086
    // LocaL: http://127.0.0.1:4200/api/users/authenticate
    // Deployed: https://SanDiegoTravel.stu.nighthawkcodingsociety.com/api/users/authenticate
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