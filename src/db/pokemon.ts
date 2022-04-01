import { Schema, model, Model, Document } from 'mongoose';

export type Attack = { name: String; type: String; damage: Number };

export type Attacks = { special: [Attack]; fast: [Attack] };

export type Evolutions = { id: Number; name: String };

export type EvolutionRequirements = { amount: Number; name: String };

export type Dimension = { minimum: String; maximum: String };

const attackSchema: Schema = new Schema<Attack>({
  name: {
    type: String,
    required: true,
  },

  type: {
    type: String,
    required: true,
  },
  damage: {
    type: Number,
    required: true,
  },
});
const attacksSchema: Schema = new Schema<Attacks>({
  special: {
    type: [attackSchema],
    required: true,
  },
  fast: {
    type: [attackSchema],
    required: true,
  },
});
const evolutionsSchema: Schema = new Schema<Evolutions>({
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
});
const evolutionRequirementsSchema: Schema = new Schema<EvolutionRequirements>({
  amount: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
});
const dimensionSchema: Schema = new Schema<Dimension>({
  minimum: {
    type: String,
    required: true,
  },
  maximum: {
    type: String,
    required: true,
  },
});

const pokemonSchema: Schema = new Schema<IPokemon>({
  id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  classification: {
    type: String,
    required: true,
  },
  fleeRate: {
    type: Number,
    required: true,
  },
  maxCP: {
    type: Number,
    required: true,
  },
  maxHP: {
    type: Number,
    required: true,
  },
  attacks: {
    type: attacksSchema,
    required: true,
  },
  evolutions: {
    type: [evolutionsSchema],
    required: true,
  },
  evolutionRequirements: {
    type: evolutionRequirementsSchema,
    required: true,
  },
  height: {
    type: dimensionSchema,
    required: true,
  },
  weight: {
    type: dimensionSchema,
    required: true,
  },
  weaknesses: {
    type: [String],
    required: true,
  },
  resistant: {
    type: [String],
    required: true,
  },
  types: {
    type: [String],
    required: true,
  },

  favorite: {
    type: Boolean,
    required: true,
  },
});

export interface IPokemon extends Document {
  _id: String;
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

const PokemonModel: Model<IPokemon> = model('Pokemon', pokemonSchema);
export default PokemonModel;
