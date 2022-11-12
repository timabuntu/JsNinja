const offset = 0;
const limit = 10;
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

function convertPokemonToLi(pokemon) {
  return `
        <li class="pokemon">
          <span class="number">#001</span>
          <span class="name">${pokemon.name}</span>

          <div class="detail">
            <ol class="types">
              <li class="type">poison</li>
              <li class="type">grass</li>
            </ol>
            <img
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
              alt='${pokemon.name}'
            />
          </div>
      </li>
  `;
}

const pokemonList = document.querySelector("#pokemonList");

pokeApi.getPokemons().then((pokemons = []) => {
  const newList = pokemons.map((pokemon) => {
    return convertPokemonToLi(pokemon);
  });

  const newHtml = newList.join("");

  pokemonList.innerHTML += newHtml;
});
