
import { QueryInterface } from 'sequelize/types'
import { userColumns, userTableName } from '../../constants'

export const up = async (queryInterface: QueryInterface): Promise<void> => {
  await queryInterface.createTable(userTableName, userColumns)
}

export const down = async (queryInterface: QueryInterface): Promise<void> => {
  await queryInterface.dropTable(userTableName)
}
