document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    // Example validation
    if (username === 'admin' && password === 'admin123') {
        // Redirect to the homepage
        window.location.href = 'homepage.html'; // This line redirects to homepage.html
    } else {
        errorMessage.textContent = 'Invalid username or password!';
    }
});