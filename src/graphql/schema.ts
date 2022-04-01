import { buildSchema } from 'graphql';

const schema = buildSchema(`
    type Query {
        pokemons(limit: Int): [Pokemon]
        pokemon(id: ID!): Pokemon
        pokemonName(name: String): Pokemon
        filterPokemon(favorite: Boolean, types: [String]): [Pokemon]
        types: [String]
    }
    type Mutation {
        favoritePokemon(id: ID!, name: String, favorite: Boolean): PokemonResponse
    }
    type Attack { name: String type: String damage: Int }


type Attacks { special: [Attack ] fast: [Attack ] }

type Evolutions { id: Int name: String }

type EvolutionRequirements { amount: Int name: String }

type Dimension { minimum: String maximum: String }

    type Pokemon {
        _id: ID!
        id: String
  name: String
  classification: String
  fleeRate: Float
  maxCP: Int
  maxHP: Int
  attacks: Attacks
  evolutions: [Evolutions ]
  evolutionRequirements: EvolutionRequirements
  height: Dimension
  weight: Dimension
  weaknesses: [String ]
  resistant: [String ]
  types: [String ]
  favorite: Boolean
    }

    type Pokemons {
        pokemons: [Pokemon]
    }
    type PokemonResponse {
        data: Pokemon
        error: String
        ok: Boolean
    }
`);

export default schema;
