import db from './connect';
import PokemonModel from './pokemon';
import {
  getAllPokemons,
  getPokemonById,
  getPokemonByName,
  favoritePokemon,
  getAllPokemonTypes,
  filterPokemon,
} from './utils';

export default {
  db,
  PokemonModel: PokemonModel,
  pokemon: {
    getPokemonById,
    getAllPokemons,
    getPokemonByName,
    getAllPokemonTypes,
    filterPokemon,
    favoritePokemon,
  },
};
