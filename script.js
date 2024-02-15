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
function goMap() {
    window.location.href = "http://127.0.0.1:4200/travel_project/map";
}
function goItinerary() {
    window.location.href = "http://127.0.0.1:4200/travel_project/itinerary";
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
method: 'GET',
headers: {
    'Content-Type': 'application/json;charset=utf-8'
},
credentials: 'include'
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
    let dataContainer = document.getElementById("data");
    dataContainer.textContent = data;  // Assuming 'data' is the property you want to display
})
.catch(error => {
    console.error('Error fetching itinerary:', error);
    // Handle error
});
}

//Weather JavaScript
function fetchWeatherData() {
    fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/San%20Diego?unitGroup=us&include=current&key=8HDWUMHK5VWRJUG5CEQA5RNMQ&contentType=json")
    .then(response => response.json())
    .then(data => {
        const currentWeather = data.currentConditions;
        const temperature = data.currentConditions.temp;
        // Update weather icon based on current weather condition
        const weatherIcon = document.getElementById('weather-icon');
        if (currentWeather === 'Clear') {
            weatherIcon.src = 'weather/sun.png';
        } else if (currentWeather === 'Partially Cloudy') {
            weatherIcon.src = 'weather/partlycloudy.png';
        } else if (currentWeather === 'Rain') {
            weatherIcon.src = 'weather/rain.png';
        } /* else {
            weatherIcon.src = 'weather/default.png'; // Default image for other conditions
        } */
        // Display temperature
        document.getElementById('temperature').textContent = `Temperature: ${temperature}°F`;
    })
    .catch(error => console.error('Error fetching weather data:', error));
}
    // Fetch weather data initially
    fetchWeatherData();
    // Refresh weather data every minute
    setInterval(fetchWeatherData, 60000); // 60000 milliseconds = 1 minute