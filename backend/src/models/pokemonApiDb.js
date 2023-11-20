const axios = require('axios');

const getPokemonData = async () => {
  const pokemonName = 'Charizard'.toLowerCase(); // Pokemon API é case sensitive, dados precisam ser em minúsculo

  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    const setPokemon = {
      nome: pokemonName,
      id: response.data.id,
      type: response.data.types[0].type.name,
      img: response.data.sprites.front_default,
    };
    return setPokemon;
  } catch (error) {
    console.error('Erro ao buscar dados do Pokémon:', error.message);
    throw error; 
  }
};

module.exports = getPokemonData;