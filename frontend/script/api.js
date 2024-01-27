const url = 'http://localhost:3333/pokemon'

function convertSerchedPokemonToHtml(pokemonData){
  return `
  <div class='card m-1'>
    <div class="resultHeader">
      <img src="${pokemonData.img}" alt="Imagem Frontal do Pokémon" srcset="">
      <h5 class="pokemonSearched text-center card-title">${pokemonData.nome}</h5>
    </div>

    <ul class="list-group list-group-flush">
      <li class="list-group-item"><strong>Id:</strong> ${pokemonData.id}</li>
      <li class="list-group-item"><strong>Tipo:</strong> ${pokemonData.type}</li>
      <li class="list-group-item"><strong>Hp:</strong> ${pokemonData.hp}</li>
      <li class="list-group-item"><strong>Atk:</strong> ${pokemonData.atk}</li>
      <li class="list-group-item"><strong>Def:</strong> ${pokemonData.def}</li>
    </ul>
  </div>
  `
}

function clearPokemonList(){
  result.innerHTML = '';
  pokemonAdd = []
}

const result = document.querySelector('.result');

var pokemonAdd = [];

async function search() {
  const pokemonName = document.getElementById('pokemonName').value;
  const response = await fetch(`${url}?pokemonName=${pokemonName}`);
  const pokemonData = await response.json();
  
  const errorMessage = document.querySelector('span.errorMessage');
  errorMessage.innerHTML = ''

  try {
    if (response.ok) {    
      if(pokemonAdd.includes(pokemonData.id))
      {
        throw new Error('Pokemon já adicionado')
      } 
      else 
      {
        result.innerHTML += convertSerchedPokemonToHtml(pokemonData)    
        pokemonAdd.push(pokemonData.id)
      }
    } else {
      console.error('Erro ao buscar dados do Pokémon:', response.statusText);
      throw new Error('Pokémon não existe')
    }

    document.getElementById('pokemonName').value = ''
  }
  catch(error){
    errorMessage.innerHTML = `<br> ${error.message}`;
    errorMessage.style.color = 'red'
  }
}