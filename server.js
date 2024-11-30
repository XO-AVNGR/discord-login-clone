const express = require('express');
const app = express();

// Serve static files (e.g., HTML, CSS, JS) from the "public" directory
app.use(express.static('public'));

// Define a route for the root URL
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html'); // Make sure you have an "index.html" in your project
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
