const express = require('express');
const app = express();
const PORT = 5000; // Backend port

app.use(express.json());

app.get('/api/info', (req, res) => {
    res.json({ message: 'Info Page' });
});

app.get('/api/info/:userId', (req, res) => {
    res.json({ message: `Info for User ID: ${req.params.userId}` });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});