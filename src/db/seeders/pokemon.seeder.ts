import { QueryInterface } from 'sequelize/types'
import { PokemonColumn, pokemonTableName } from '../db.constants'

const lines: PokemonColumn[] = [
  {
    pokedex_number: 1,
    name: 'bulbasaur',
    size: 0.7,
    stats: 318,
    weight: 6.9,
    picture: 'https://i.pinimg.com/originals/41/a3/fe/41a3fedd08cac8dc62de4f54f75d2d00.png'
  }
]

export const up = async (queryInterface: QueryInterface) => {
  await queryInterface.bulkInsert(pokemonTableName, lines)
}

export const down = async (queryInterface: QueryInterface) => {
  await queryInterface.dropTable(pokemonTableName)
}
