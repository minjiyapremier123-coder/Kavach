const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path'); // Added path module to handle file locations reliably
const app = express();

app.use(cors());
app.use(express.json());

// 1. Serve static files (like your service worker sw.js or manifest.json) from the root folder
app.use(express.static(__dirname));

// 2. Serve your specific HTML file when someone visits the main URL (/)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'FINALFRONTEND.html'));
});

// Your existing SOS route handler
app.post('/api/sos', (req, res) => {
    console.log("SOS Received:", req.body);
    res.send({ status: "SOS Received successfully" });
});

// 3. Use the deployment platform's port or fall back to 3000 for local testing
const PORT = process.env.PORT || 3000;

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Kavach Server is listening on port ${PORT}`);
});