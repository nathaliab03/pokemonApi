const axios = require('axios');

const getPokemonData = async (pokemonName) => {
  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`);
    const setPokemon = {
      nome: response.data.species.name,
      id: response.data.id,
      type: response.data.types[0].type.name,
      img: response.data.sprites.front_default,
      hp: response.data.stats[0].base_stat,
      atk: response.data.stats[1].base_stat,
      def: response.data.stats[2].base_stat,
    };
    return setPokemon;
  } catch (error) {
    console.error('Erro ao buscar dados do Pokémon:', error.message);
    throw error;
  }
};

module.exports = getPokemonData;
