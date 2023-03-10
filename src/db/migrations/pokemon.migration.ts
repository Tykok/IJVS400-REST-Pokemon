import { QueryInterface } from 'sequelize/types'
import {
  pokemonColumns,
  pokemonTableName,
  skillsColumns,
  skillsPokemonColumns,
  skillsPokemonTableName,
  skillsTableName,
  typeColumns,
  typePokemonColumns,
  typePokemonTableName,
  typeTableName,
  userColumns,
  userTableName
} from '../db.constants'

export const up = async (queryInterface: QueryInterface) => {
  await queryInterface.createTable(pokemonTableName, pokemonColumns)
  await queryInterface.createTable(skillsTableName, skillsColumns)
  await queryInterface.createTable(skillsPokemonTableName, skillsPokemonColumns)
  await queryInterface.createTable(typeTableName, typeColumns)
  await queryInterface.createTable(typePokemonTableName, typePokemonColumns)
  await queryInterface.createTable(userTableName, userColumns)
}

export const down = async (queryInterface: QueryInterface) => {
  await queryInterface.dropTable(skillsPokemonTableName)
  await queryInterface.dropTable(typePokemonTableName)
  await queryInterface.dropTable(typeTableName)
  await queryInterface.dropTable(skillsTableName)
  await queryInterface.dropTable(pokemonTableName)
  await queryInterface.dropTable(userTableName)
}
