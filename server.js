const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname)));

app.post('/submit', (req, res) => {
    const { name, regNumber } = req.body;

    if (name !== name.toUpperCase()) {
        return res.status(400).json({ error: 'Name must be in uppercase letters.' });
    }

    console.log('Received submission:', { name, regNumber });
    res.status(200).json({ message: 'Registration successful!' });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});