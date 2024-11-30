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
