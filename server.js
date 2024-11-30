const express = require('express');
const bodyParser = require('body-parser'); // Import bodyParser to parse POST data
const app = express();
const path = require('path');

app.use(bodyParser.urlencoded({ extended: true })); // Middleware to parse URL-encoded data

// Serve the index.html at the root route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Handle POST request for login
app.post('/login', (req, res) => {
  const { email, password } = req.body; // Capture email and password from form
  console.log('User email:', email);
  console.log('User password:', password);
  res.send('Login successful'); // Temporary response, you can redirect or do other processing
});

// Use dynamic port provided by Render or fallback to port 3000 locally
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html')); // Or the appropriate HTML file
});
app.use(express.static(path.join(__dirname, 'public')));  // Or wherever your assets are stored
