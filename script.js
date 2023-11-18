import axios from 'https://cdn.jsdelivr.net/npm/axios@1.3.5/+esm';


function search() {
    var pokemonName = document.querySelector('input#pokemonName').value
    var result = document.querySelector('section.result')
    
        axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`)
       .then(function (response){
           console.log(response.data)
       }) 

    result.innerHTML = `
       <img src="">
        <div class="characteristics">
        <h1>${pokemonName}</h1>
        <p><b>Tipo:</b> </p>
        <p><b>Tipo:</b> </p>
       </div>
       
    `

    document.querySelector('input#pokemonName').value = ''
 
}
