function goBack() {
    window.history.back();
}


function login() {
    document.getElementById('login-form').addEventListener('submit', function(event) {
        event.preventDefault();

        var username = document.getElementById('username-login').value;
        var password = document.getElementById('password-login').value;

        const apiUrl = `https://iptechhaul-162e.restdb.io/rest/account?q={"username":"${username}","password":"${password}"}`;

        const settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://iptechhaul-162e.restdb.io/rest/account",
            "method": 'GET',
            "authorization": "Bearer 65c5781937a477ff7d030c61",
            "headers": {
                'Content-Type': 'application/json',
                'x-apikey': '65c5781937a477ff7d030c61',
                'Cache-Control': 'no-cache'
            },
        };

        fetch(apiUrl, settings)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log(data);
                
                // Check if any data is returned
                if (data.length > 0) {
                    document.getElementById('message-login').textContent = 'Login successful!';
                    // Redirect to home page after successful login
                    setTimeout(() => {
                        window.location.href = 'index.html';
                    }, 2000);
                } else {
                    // Unsuccessful login
                    document.getElementById('message-login').textContent = 'Invalid username or password. Please try again.';
                }
            })
            .catch(error => {
                // Handles errors
                console.error('Error fetching data:', error);
                document.getElementById('message-login').textContent = 'Login failed. Please try again.';
            });
        });
}

function signup(){
    document.getElementById('signup-form').addEventListener('submit', function(event) {
        event.preventDefault();

        var username = document.getElementById('username-signup').value;
        var password = document.getElementById('password-signup').value;

        const apiUrl = 'https://iptechhaul-162e.restdb.io/rest/account';

        const settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://iptechhaul-162e.restdb.io/rest/account",
            "method": "POST",
            "authorization": "Bearer 65c5781937a477ff7d030c61",
            "headers": {
                "content-type": "application/json",
                "x-apikey": "65c5781937a477ff7d030c61",
                "cache-control": "no-cache",
            },
            "processData": false,
            "body": JSON.stringify({
                "username": username,
                "password": password
            })
        };

        fetch(apiUrl, settings)
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Sign-up failed');
                }
            })
            .then(data => {
                // Successful sign-up
                document.getElementById('message-signup').textContent = 'Sign-up successful!';
                setTimeout(() => {
                    window.location.href = 'index.html'; // Waits for 2 seconds before going into page
                }, 2000);
            })
            .catch(error => {
                // Unsuccessful sign-up
                document.getElementById('message-signup').textContent = 'Sign-up failed. Please try again.';
            });
    });
};
