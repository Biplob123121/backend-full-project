const express = require('express');
const cors = require('cors');
require('./config/db');

const app = express();

// middleware
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/./views/index.html")
})



module.exports = app