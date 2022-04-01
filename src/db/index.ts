import db from './connect';
import PokemonModel from './pokemon';
import {
  getAllPokemons,
  getPokemonById,
  getPokemonByName,
  getPokemonBySearch,
  favoritePokemon,
  getAllPokemonTypes,
  filterByFavorite,
  filterByType,
} from './utils';

export default {
  db,
  PokemonModel: PokemonModel,
  pokemon: {
    getPokemonById,
    getAllPokemons,
    getPokemonByName,
    getAllPokemonTypes,
    getPokemonBySearch,
    filterByFavorite,
    filterByType,
    favoritePokemon,
  },
};
