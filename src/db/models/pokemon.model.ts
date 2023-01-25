import { Model } from 'sequelize'
import sequelizeConnection from '../connexion'
import { defaultSchema, pokemonColumns, pokemonModelName, pokemonTableName } from '../db.constants'
import SkillsModel from './skills.model'
import TypeModel from './type.model'

const sequelize = sequelizeConnection

class PokemonModel extends Model {}

PokemonModel.init(pokemonColumns, {
  sequelize,
  schema: defaultSchema,
  modelName: pokemonModelName,
  tableName: pokemonTableName,
  timestamps: false
})

PokemonModel.belongsToMany(SkillsModel, { through: 'skills_pokemon', foreignKey: 'pokedex_number', timestamps: false })
PokemonModel.belongsToMany(TypeModel, { through: 'type_pokemon', foreignKey: 'pokedex_number', timestamps: false })
SkillsModel.belongsToMany(PokemonModel, { through: 'skills_pokemon', foreignKey: 'skill_id', timestamps: false })
TypeModel.belongsToMany(PokemonModel, { through: 'type_pokemon', foreignKey: 'type_id', timestamps: false })

export default PokemonModel
