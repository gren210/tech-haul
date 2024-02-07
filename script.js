function goBack() {
    window.history.back();
}

function login() {
    // Get username and password from the form
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Make API call for authentication
    fetch('your_api_endpoint/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
    })
    .then(response => response.json())
    .then(data => {
        // Handle the API response
        if (data.success) {
            document.getElementById('result').innerText = 'Login successful!';
            // Redirect or perform other actions upon successful login
        } else {
            document.getElementById('result').innerText = 'Login failed. Please check your credentials.';
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
}