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

export const createPokemon = async (pokemon: Pokemon): Promise<Pokemon> => {
  const newPokemon = await PokemonModel.create(pokemon)
  return newPokemon as unknown as Pokemon
}

export const updatePokemon = async (pokemon: Pokemon): Promise<Pokemon> => {
  const updatedPokemon = await PokemonModel.update(pokemon, {
    where: {
      pokedexNumber: pokemon.pokedexNumber
    }
  })
  return updatedPokemon as unknown as Pokemon
}

export const deletePokemonById = async (pokemonId: number): Promise<number> => {
  const deletedPokemon = await PokemonModel.destroy({
    where: {
      id: pokemonId
    }
  })
  return deletedPokemon
}
