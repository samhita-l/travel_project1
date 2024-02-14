// Get cookie function

function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}

// All of the functions that switch to a different page

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
function goItinerary() {
    window.location.href = "http://127.0.0.1:4200/travel_project/itinerary";
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
    let sign_up = fetch('http://127.0.0.1:8086/api/users/', options);
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

//Itinerary code

// Initialize Quill
var quill = new Quill('#activities', {
    theme: 'snow' // Use the 'snow' theme for rich text editing
});

//Updating text
function itinerary() {
    data = {
        "uid": document.getElementById("uid").value,
        "itinerary": document.getElementById("activities").value,
    }
    let options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(data)
    }
    fetch("http://127.0.0.1:8008/api/users/itinerary", options)
        .then(response => {
            let access = response.status !== 401 && response.status !== 403;
            return response.json().then(data => ({ data, access }));
        })
        .then(({ data, access }) => {
            console.log(access)
            if (access) {
                document.getElementById("data").textContent = "Data Successfully Changed";
            } else {
                document.getElementById("data").textContent = "Something went wrong";
            }
        })
}
