const express = require('express');

const router = express.Router();

router.get('/', (require, response) => response.status(200).send('router ok'))

module.exports = router