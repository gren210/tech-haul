function goBack() {
    window.history.back();
}

const apiKey = '65c5781937a477ff7d030c61';

function login(){
    document.getElementById('login-form').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting

        // Get input values
        var username = document.getElementById('username-login').value;
        var password = document.getElementById('password-login').value;

        // Make API request for authentication
        fetch('https://iptechhaul-162e.restdb.io/rest/account', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username: username, password: password }),
        })
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Login failed');
            }
        })
        .then(data => {
            // Handle successful authentication
            document.getElementById('message-login').textContent = 'Login successful!';
        })
        .catch(error => {
            // Handle failed authentication
            document.getElementById('message-login').textContent = 'Invalid username or password. Please try again.';
        });
    });
}

function signup(){
    document.getElementById('signup-form').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting

        // Get input values
        var username = document.getElementById('username-signup').value;
        var password = document.getElementById('password-signup').value;

        // Make API request for sign-up
        const corsProxyUrl = 'https://cors-anywhere.herokuapp.com/';
        const apiUrl = 'https://iptechhaul-162e.restdb.io/rest/account';

        fetch(corsProxyUrl + apiUrl, {
            method: 'POST',
            headers: {
                'x-apikey': apiKey,
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({ username: username, password: password }),
        })
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Sign-up failed');
            }
        })
        .then(data => {
            // Handle successful sign-up
            document.getElementById('message-signup').textContent = 'Sign-up successful!';
        })
        .catch(error => {
            // Handle failed sign-up
            document.getElementById('message-signup').textContent = 'Sign-up failed. Please try again.';
        });
    });
};