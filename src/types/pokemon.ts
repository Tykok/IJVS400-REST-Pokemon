import Abilities from './ability'
import Type from './type'

type Pokemon = {
  pokedexNumber: number
  name: string
  size: number
  weight: number
  stats: object[]
  picture?: string
  types?: Type[]
  abilities?: Abilities[]
}

export default Pokemon
