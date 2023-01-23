import { QueryInterface } from 'sequelize/types'
import { pokemonColumns, pokemonTableName, skillsColumns, skillsTableName, typeColumns, typeTableName } from '../db.constants'

export const up = async (queryInterface: QueryInterface) => {
  await queryInterface.createTable(pokemonTableName, pokemonColumns)
  await queryInterface.createTable(skillsTableName, skillsColumns)
  await queryInterface.createTable(typeTableName, typeColumns)
}

export const down = async (queryInterface: QueryInterface) => {
  await queryInterface.dropTable(pokemonTableName)
  await queryInterface.dropTable(skillsTableName)
  await queryInterface.dropTable(typeTableName)
}
