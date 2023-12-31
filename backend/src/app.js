const express = require('express');
const cors = require('cors');

const router = require('./router');

const app = express();

app.use(cors());
app.use(express.static('public'));
app.use('/pokemon', router);

module.exports = app;
