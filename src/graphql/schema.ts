import { buildSchema } from 'graphql';

const schema = buildSchema(`
    type Query {
        pokemons(limit: Int, page: Int): [Pokemon]
        pokemon(id: String): Pokemon
        pokemonName(name: String): Pokemon
        pokemonNameSearch(name: String): [Pokemon]
        filterByFavorite(favorite: Boolean): [Pokemon]
        filterByType(type: String): [Pokemon]
        types: [String]
    }
    type Mutation {
        favoritePokemon(name: String): PokemonResponse
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
