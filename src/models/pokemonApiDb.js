const axios = require('axios')

const pokemonData = () => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/ditto`)
    .then(function(response){
        console.log(response.data)
    })
}

pokemonData()

module.exports = {
    pokemonData
}