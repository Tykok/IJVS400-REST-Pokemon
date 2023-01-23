import Pokemon from './pokemon'

type Ability = {
  id: number
  name: string
  description: string
  power: number
  precision: number
  pp_max: number
  pokemons?: Pokemon[]
}

export default Ability
