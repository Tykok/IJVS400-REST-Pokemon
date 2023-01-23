import PokemonModel from '../db/models/pokemon.model'
import Pokemon from '../types/pokemon'

export const getPokemon = async (pokemonId: number): Promise<Pokemon> => {
  const currentPokemon = await PokemonModel.findOne({
    where: {
      pokedex_number: pokemonId
    }
  })
  if (!currentPokemon) throw new Error('Pokemon not found')
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

export const updatePokemon = async (pokemonId: number, pokemon: Pokemon): Promise<Pokemon> => {
  const updatedPokemon = await PokemonModel.update(pokemon, {
    where: {
      pokedexNumber: pokemonId
    }
  })
  return updatedPokemon as unknown as Pokemon
}

export const deletePokemonById = async (pokemonId: number): Promise<number> => {
  const deletedPokemon = await PokemonModel.destroy({
    where: {
      pokedex_number: pokemonId
    }
  })
  return deletedPokemon
}
