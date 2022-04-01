import PokemonModel from './pokemon';

export const getAllPokemons = async (limit: number) => {
  return await PokemonModel.find({}).limit(limit);
};

export const getPokemonById = async (id: string) => {
  return await PokemonModel.findById(id);
};

export const getPokemonByName = async (name: string) => {
  return await PokemonModel.findOne({ name: name }).exec();
};

export const getAllPokemonTypes = async () => {
  const res = await PokemonModel.find({}, 'types').exec();
  const filteredArr = res.map(({ types }) => types);
  const types = [...new Set(filteredArr.flat())];
  return types;
};

export const filterPokemon = async (
  favorite?: boolean,
  types?: Array<string>
) => {
  return await PokemonModel.find({ favorite: favorite, types: types }).exec();
};
export const favoritePokemon = async (id: string) => {
  const q = await PokemonModel.findById(id);
  const update: { favorite?: boolean } = {};
  if (id) update.favorite = !q?.favorite;
  return await PokemonModel.findByIdAndUpdate(id, update);
};
