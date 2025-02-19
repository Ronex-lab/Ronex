const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Serve static files (e.g., HTML, CSS, JS)
app.use(express.static(path.join(__dirname)));

// Explicitly handle the root URL
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'registration-form.html'));
});

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