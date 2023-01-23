import PokemonModel from '../db/models/pokemon.model'
import Pokemon from '../types/pokemon'

export const getPokemon = async (pokemonId: number): Promise<Pokemon> => {
  const currentPokemon = await PokemonModel.findByPk(pokemonId)
  return currentPokemon as unknown as Pokemon
}

export const getAllPokemon = async (): Promise<Pokemon[]> => {
  const allPokemon = await PokemonModel.findAll()
  return allPokemon as unknown as Pokemon[]
}
