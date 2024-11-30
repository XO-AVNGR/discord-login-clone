document.getElementById('login-form').addEventListener('submit', (e) => {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Send the data to a backend server
    fetch('http://your-server-url.com/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
    })
        .then(response => response.json())
        .then(data => {
            alert(data.message);
        })
        .catch(error => {
            console.error('Error:', error);
            alert('An error occurred. Please try again.');
        });
});
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

let tempDatabase = [];

app.post('/api/login', (req, res) => {
    const { email, password } = req.body;
    tempDatabase.push({ email, password });
    res.json({ message: 'Login credentials stored temporarily.' });
});

// View temporary database
app.get('/api/database', (req, res) => {
    res.json(tempDatabase);
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
