import { QueryInterface } from 'sequelize/types'
import { Type, typeTableName } from '../db.constants'

const lines: Type[] = [
  { name: 'Normal' },
  { name: 'Fire' },
  { name: 'Water' },
  { name: 'Grass' },
  { name: 'Electric' },
  { name: 'Ice' },
  { name: 'Fighting' },
  { name: 'Poison' },
  { name: 'Ground' },
  { name: 'Flying' },
  { name: 'Psychic' },
  { name: 'Bug' },
  { name: 'Rock' },
  { name: 'Ghost' },
  { name: 'Dark' },
  { name: 'Dragon' },
  { name: 'Steel' },
  { name: 'Fairy' }
]

export const up = async (queryInterface: QueryInterface): Promise<number | object> => {
  return await queryInterface.bulkInsert(typeTableName, lines)
}

export const down = async (queryInterface: QueryInterface) => {
  return await queryInterface.dropTable(typeTableName)
}
