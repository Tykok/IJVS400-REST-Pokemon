
import { userColumns, defaultSchema, userModelName, userTableName } from '../../constants'
import { Model } from 'sequelize'
import { sequelizeConnection } from '../connexion'

const sequelize = sequelizeConnection

class UserModel extends Model {}

UserModel.init(
  userColumns,
  {
    sequelize,
    schema: defaultSchema,
    modelName: userModelName,
    tableName: userTableName,
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
)

export default UserModel
