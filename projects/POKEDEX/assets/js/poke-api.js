const pokeApi = {};

function convertPokeApiDetailPokemon(pokeDetail) {
  const pokemon = new Pokemon();
  pokemon.number = pokeDetail.order;
  pokemon.name = pokeDetail.name;

  const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name);
  const [type] = types;

  pokemon.types = types;
  pokemon.type = type;

  pokemon.photo = pokeDetail.sprites.other.dream_world.front_default;

  return pokemon;
}

pokeApi.getPokemonDetail = (pokemon) => {
  return fetch(pokemon.url)
    .then((response) => response.json())
    .then(convertPokeApiDetailPokemon);
};

pokeApi.getPokemons = async () => {
  const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

  const response = await fetch(url);
  const jsonBody = await response.json();
  const pokemons = jsonBody.results;
  const detailRequests = pokemons.map(pokeApi.getPokemonDetail);
  const pokemonsDetails = await Promise.all(detailRequests);
  return pokemonsDetails;
};
