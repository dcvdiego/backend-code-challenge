import db from '../db/';

const query = {
  pokemons: async ({ limit }: { limit: number }, context: any) => {
    return await db.pokemon.getAllPokemons(limit);
  },
  pokemon: async ({ id }: { id: string }, context: any) => {
    return await db.pokemon.getPokemonById(id);
  },
  pokemonName: async ({ name }: { name: string }, context: any) => {
    return await db.pokemon.getPokemonByName(name);
  },
  filterPokemon: async (
    { favorite }: { favorite?: boolean },
    { types }: { types?: Array<string> },
    context: any
  ) => {
    return await db.pokemon.filterPokemon(favorite, types);
  },
  types: async (context: any) => {
    return await db.pokemon.getAllPokemonTypes();
  },
};

export default query;
