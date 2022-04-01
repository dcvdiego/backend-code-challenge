import db from '../db';
import {
  Attacks,
  Dimension,
  EvolutionRequirements,
  Evolutions,
} from '../db/pokemon';

const mutation = {
  favoritePokemon: async ({ id }: Pokemon & { id: string }, context: any) => {
    try {
      const pokemon = await db.pokemon.favoritePokemon(id);
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

interface Pokemon {
  id: String;
  name: String;
  classification: String;
  fleeRate: Number;
  maxCP: Number;
  maxHP: Number;
  attacks: Attacks;
  evolutions: [Evolutions];
  evolutionRequirements: EvolutionRequirements;
  height: Dimension;
  weight: Dimension;
  weaknesses: [String];
  resistant: [String];
  types: [String];
  favorite: Boolean;
}

export default mutation;
