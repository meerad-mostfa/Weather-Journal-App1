

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 8000;
const host = '127.0.0.1';

// Middleware
app.use(express.static('website'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// Data storage
let projectData = {};

// POST route
app.post('/add', (req, res) => {
    projectData = req.body;
    console.log(projectData);
    res.status(200).send('POST received');
});

// GET route
app.get('/get', (req, res) => {
    res.send(projectData);
});

// Server listening
const server = app.listen(port, host, () => {
    console.log(` Server is running ➜  http://${host}:${port}`);
});
