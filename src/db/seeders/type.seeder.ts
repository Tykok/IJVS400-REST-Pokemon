import { QueryInterface } from 'sequelize/types'
import { TypeColumn, TypePokemonColumn, typePokemonTableName, typeTableName } from '../db.constants'

const lines: TypeColumn[] = [
  { id: 1, name: 'Normal' },
  { id: 2, name: 'Fire' },
  { id: 3, name: 'Water' },
  { id: 4, name: 'Grass' },
  { id: 5, name: 'Electric' },
  { id: 6, name: 'Ice' },
  { id: 7, name: 'Fighting' },
  { id: 8, name: 'Poison' },
  { id: 9, name: 'Ground' },
  { id: 10, name: 'Flying' },
  { id: 11, name: 'Psychic' },
  { id: 12, name: 'Bug' },
  { id: 13, name: 'Rock' },
  { id: 14, name: 'Ghost' },
  { id: 15, name: 'Dark' },
  { id: 16, name: 'Dragon' },
  { id: 17, name: 'Steel' },
  { id: 18, name: 'Fairy' }
]

const linesOfAssociation: TypePokemonColumn[] = [
  { pokedex_number: 1, type_id: 1 },
  { pokedex_number: 1, type_id: 4 }
]
export const up = async (queryInterface: QueryInterface) => {
  await queryInterface.bulkInsert(typeTableName, lines)
  await queryInterface.bulkInsert(typePokemonTableName, linesOfAssociation)
}

export const down = async (queryInterface: QueryInterface) => {
  await queryInterface.dropTable(typePokemonTableName)
  await queryInterface.dropTable(typeTableName)
}
