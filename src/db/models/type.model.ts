import { Model } from 'sequelize'
import { sequelizeConnection } from '../connexion'
import { defaultSchema, typeColumns, typeModelName, typeTableName } from '../db.constants'

const sequelize = sequelizeConnection

class TypeModel extends Model {}

TypeModel.init(typeColumns, {
  sequelize,
  schema: defaultSchema,
  modelName: typeModelName,
  tableName: typeTableName,
  timestamps: false
})

export default TypeModel
