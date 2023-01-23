import Pokemon from './pokemon'

type Abilities = {
  id: number
  name: string
  description: string
  power: number
  precision: number
  pp_max: number
  pokemons?: Pokemon[]
}

export default Abilities
