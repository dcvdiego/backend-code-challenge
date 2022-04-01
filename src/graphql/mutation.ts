import db from '../db';
import {
  Attacks,
  Dimension,
  EvolutionRequirements,
  Evolutions,
} from '../db/pokemon';

const mutation = {
  favoritePokemon: async ({ name }: { name: string }, context: any) => {
    try {
      const pokemon = await db.pokemon.favoritePokemon(name);
      if (!pokemon) {
        return {
          data: null,
          ok: false,
          error: 'Pokemon not found, gotta catch them all',
        };
      }
      return {
        data: pokemon,
        ok: true,
        error: '',
      };
    } catch (error: any) {
      return {
        data: null,
        ok: false,
        error: error.message,
      };
    }
  },
};

export default mutation;
