# Challenges Coding Exercise Backend

We have provided you with Pokemon data in a json file. Your mission is to create a database and expose the database to a API. Basically, you need to:

- Design the database to store information for the Pokemon data
- Load the database with the data
- Implement the API Interface withe the following features:

  - Query pokemons with the options:
    - Pagination
    - Search by name
    - Filter by pokemon type
    - Filter by favorite
  - Query a pokemon by id
  - Query a pokemon by name
  - Query list of pokemon types
  - Mutation to mark/unmark pokemon as favorite

- **Tests** are important and if time allows it, we'd like to see _some_ test coverage.

### Technology

Remember that our technology stack is:

- Loopback.io (Javascript and Typescript)
- MongoDB / PostgreSQL

Be careful with your decisitions. You can use the framework that you prefer, but please write the challenge in JS or TS. You can choose MongoDB or PostgreSQL like database, be free but take in consideration the best database to store the data provided in the JSON file.

### My Take:

I decided to go for MongoDB for this task since the file is given in JSON and there is no need for the relational capabilities of PostgreSQL

I simply created a cluster in MongoDB, where the pokemon database resides, this database contains the pokemons collection (pokemon.pokemons), and each document represents a Pokemon

I loaded the database with the data using a combination of mongoimport for the json file, and mongosh to add a favorite field to all documents for its functionality

The API interface was done with Node.js, Express server, and GraphQL, using mongoose to connect and interact with the database and type-safety with TypeScript

To run this you must do:

```
npm run build:watch
```

and then:

```
npm run dev
```

.env doesn't really work (dotenv broken 😢), but the DB_URL is the MongoDB cluster URL where pokemons is the collection

Example API queries below:
When I do this query

```GraphQL
query {
 	pokemons(limit: 2, page:2) {
  	name
  	types
}
  pokemonNameSearch(name: "abra") {
    name
  }
  filterByType(type: "Flying") {
    name
  }
  filterByFavorite(favorite:true) {
    name
  }
  pokemon(id:"151") {
    name
    classification
  }
  pokemonName(name:"Dragonite") {
    name
    favorite
  }
  types
}
```

I get this:

```JSON
{
  "data": {
    "pokemons": [
      {
        "name": "Charizard",
        "types": [
          "Fire",
          "Flying"
        ]
      },
      {
        "name": "Pidgeotto",
        "types": [
          "Normal",
          "Flying"
        ]
      }
    ],
    "pokemonNameSearch": [
      {
        "name": "Kadabra"
      },
      {
        "name": "Abra"
      }
    ],
    "filterByType": [
      {
        "name": "Charizard"
      },
      {
        "name": "Pidgeotto"
      },
      {
        "name": "Fearow"
      },
      {
        "name": "Pidgeot"
      },
      {
        "name": "Butterfree"
      },
      {
        "name": "Pidgey"
      },
      {
        "name": "Spearow"
      },
      {
        "name": "Zubat"
      },
      {
        "name": "Golbat"
      },
      {
        "name": "Farfetch'd"
      },
      {
        "name": "Doduo"
      },
      {
        "name": "Dodrio"
      },
      {
        "name": "Scyther"
      },
      {
        "name": "Gyarados"
      },
      {
        "name": "Articuno"
      },
      {
        "name": "Moltres"
      },
      {
        "name": "Aerodactyl"
      },
      {
        "name": "Zapdos"
      },
      {
        "name": "Dragonite"
      }
    ],
    "filterByFavorite": [
      {
        "name": "Bulbasaur"
      }
    ],
    "pokemon": {
      "name": "Mew",
      "classification": "New Species Pokémon"
    },
    "pokemonName": {
      "name": "Dragonite",
      "favorite": false
    },
    "types": [
      "Grass",
      "Poison",
      "Fire",
      "Flying",
      "Normal",
      "Water",
      "Bug",
      "Electric",
      "Ground",
      "Fairy",
      "Fighting",
      "Psychic",
      "Rock",
      "Steel",
      "Ice",
      "Ghost",
      "Dragon"
    ]
  }
}
```

When I do this mutation:

```GraphQL
mutation {
  favoritePokemon(name:"Dragonite") {
    data {
      name
      favorite
    }
  }
}
```

I should get

```JSON
{
  "data": {
    "favoritePokemon": {
      "data": {
        "name": "Dragonite",
        "favorite": true
      }
    }
  }
}
```

where the favorite value should alternate everytime the mutation occurs

Testing will be done using Jest
