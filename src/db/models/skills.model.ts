import { Model } from 'sequelize'
import sequelizeConnection from '../connexion'
import { defaultSchema, skillsColumns, skillsModelName, skillsTableName } from '../db.constants'

const sequelize = sequelizeConnection

class SkillsModel extends Model {}

SkillsModel.init(skillsColumns, {
  sequelize,
  schema: defaultSchema,
  modelName: skillsModelName,
  tableName: skillsTableName,
  timestamps: false
})

export default SkillsModel
