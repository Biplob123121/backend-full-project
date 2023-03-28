const express = require('express');
const cors = require('cors');
require('./config/db');

const brandRouter = require('./routes/brand.route');
const storeRouter = require('./routes/store.route');
const categoryRuoter = require('./routes/category.route');

const app = express();

// middleware
app.use(cors());
app.use(express.json());

app.use('/api/v1/brands', brandRouter)
app.use('/api/v1/stores', storeRouter)
app.use('/api/v1/categories', categoryRuoter)




app.get('/', (req, res) => {
    res.sendFile(__dirname + "/./views/index.html")
})



module.exports = app