const express = require('express');
const cors = require('cors');
const fs = require('fs');
const app = express();

app.use(cors());
app.use(express.json());

app.post('/api/sos', (req, res) => {
    console.log("SOS Received:", req.body);
    res.send({ status: "SOS Received successfully" });
});

app.listen(3000, '0.0.0.0', () => {
    console.log('Kavach Server is listening on the network');
});