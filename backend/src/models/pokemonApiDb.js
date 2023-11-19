const axios = require('axios')

const pokemonName = 'Charizard'.toLowerCase() // Pokemon API é case sensitive, dados precisam ser em minúsculo

 const pokemonData = () => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    .then(function(response){
        const setPokemon = {
            nome: pokemonName,
            id: response.data.id,
            type: response.data.types[0].type.name,
            img: response.data.sprites.front_default
        }

        showPokemonData(setPokemon)
            
    }) 
}

function showPokemonData(setPokemon) {
    console.log(setPokemon.nome)
    console.log(setPokemon.id)
    console.log(setPokemon.type)
    console.log(setPokemon.img)
}

pokemonData()

module.exports = {
    pokemonData
}