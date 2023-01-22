
import { userTableName } from '../../constants'
import { QueryInterface } from 'sequelize/types'

const lines = [
  { id: 1, first_name: 'Test', last_name: 'Test', login: 'login', password: 'password' }
]

export const up = async (queryInterface: QueryInterface): Promise<void> => {
  await queryInterface.bulkInsert(userTableName, lines)
}

export const down = async (queryInterface: QueryInterface): Promise<void> => {
  await queryInterface.dropTable(userTableName)
}
