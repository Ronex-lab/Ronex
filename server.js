const express = require('express');
const path = require('path'); // Import the 'path' module
const app = express();
const port = process.env.PORT || 3000; // Use environment variable for port

// Middleware to parse JSON
app.use(express.json());

// Serve static files (e.g., HTML, CSS)
app.use(express.static(path.join(__dirname)));

// Handle form submission
app.post('/submit', (req, res) => {
    const { name, regNumber } = req.body;

    // Ensure name is in uppercase
    if (name !== name.toUpperCase()) {
        return res.status(400).json({ error: 'Name must be in uppercase letters.' });
    }

    // Save data (in this example, we just log it)
    console.log('Received submission:', { name, regNumber });

    // Respond with success
    res.status(200).json({ message: 'Registration successful!' });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});