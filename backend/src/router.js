const express = require('express');
const pokemonData = require('./models/pokemonApiDb')

const router = express.Router();

router.get('/', (require, response) => response.status(200).send(pokemonData))

module.exports = router