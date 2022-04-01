import { filterByFavorite } from './../db/utils';
import { GraphQLError } from 'graphql';
import db from '../db/';

const query = {
  pokemons: async (
    { limit, page }: { limit: number; page: number },
    context: any
  ) => {
    return await db.pokemon.getAllPokemons(limit, page);
  },
  pokemon: async ({ id }: { id: string }, context: any) => {
    return await db.pokemon.getPokemonById(id);
  },
  pokemonName: async ({ name }: { name: string }, context: any) => {
    return await db.pokemon.getPokemonByName(name);
  },
  pokemonNameSearch: async ({ name }: { name: string }, context: any) => {
    return await db.pokemon.getPokemonBySearch(name);
  },
  filterByFavorite: async (
    { favorite }: { favorite: boolean },
    context: any
  ) => {
    return await db.pokemon.filterByFavorite(favorite);
  },
  filterByType: async ({ type }: { type: string }, context: any) => {
    return await db.pokemon.filterByType(type);
  },
  types: async (context: any) => {
    return await db.pokemon.getAllPokemonTypes();
  },
};

export default query;
