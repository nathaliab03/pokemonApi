const express = require('express');
const getPokemonData = require('./models/pokemonApiDb');

const router = express.Router();

router.get('/', async (request, response) => {
  try {
    const pokemonName = request.query.pokemonName || 'Charizard';
    const pokemonData = await getPokemonData(pokemonName);
    return response.status(200).json(pokemonData);
  } catch (error) {
    return response.status(500).json({ error: 'Erro ao obter dados do Pokémon' });
  }
});

module.exports = router;