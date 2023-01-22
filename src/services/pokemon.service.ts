import PokemonModel from "db/models/pokemon.model";
import Pokemon from "types/pokemon";

export const getPokemon = async (pokemon: Pokemon): Promise<Pokemon> => {
  const currentPokemon = await PokemonModel.findByPk(pokemon.pokedexNumber);
  return currentPokemon as unknown as Pokemon;
};
