//const axios = require('axios').default;
import axios from 'https://cdn.jsdelivr.net/npm/axios@1.3.5/+esm';


function search() {
   var pokemonName = document.querySelector('input#pokemonName').value
   var result = document.querySelector('section.result')
    
    
    axios.get(`https://pokeapi.co/api/v2/pokemon/ditto`)
       .then(function (response){
           console.log(response.data)
       }) 


    result.innerHTML = `
    <img src="">
    <div class="characteristics">
       <h2>${pokemonName}</h2>
       <p>type: </p>
    
    `


    document.querySelector('input#pokemonName').value = ''
}
