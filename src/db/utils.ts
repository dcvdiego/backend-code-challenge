import PokemonModel from './pokemon';

export const getAllPokemons = async (limit: number, page: number) => {
  return await PokemonModel.find({})
    .limit(limit)
    .skip((page - 1) * limit);
};

export const getPokemonById = async (id: string) => {
  return await PokemonModel.findOne({ id: id });
};

export const getPokemonByName = async (name: string) => {
  return await PokemonModel.findOne({ name: name }).exec();
};
export const getPokemonBySearch = async (name: string) => {
  return await PokemonModel.find({
    name: { $regex: '.*' + name + '.*', $options: 'i' },
  }).exec();
};

export const getAllPokemonTypes = async () => {
  const res = await PokemonModel.find({}, 'types').exec();
  const filteredArr = res.map(({ types }) => types);
  const types = [...new Set(filteredArr.flat())];
  return types;
};

export const filterByFavorite = async (favorite: boolean) => {
  return await PokemonModel.find({ favorite: favorite }).exec();
};
export const filterByType = async (type: string) => {
  return await PokemonModel.find({ types: type }).exec();
};
export const favoritePokemon = async (name: string) => {
  const query = await PokemonModel.findOne({ name: name }).exec();
  const update: { favorite?: boolean } = {};
  if (name) update.favorite = !query?.favorite;
  return await PokemonModel.findByIdAndUpdate(query?._id, update);
};
