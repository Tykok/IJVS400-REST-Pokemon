import { Model } from 'sequelize'
import { sequelizeConnection } from '../connexion'
import { defaultSchema, pokemonColumns, pokemonModelName, pokemonTableName } from '../db.constants'

const sequelize = sequelizeConnection

class PokemonModel extends Model {}

PokemonModel.init(pokemonColumns, {
  sequelize,
  schema: defaultSchema,
  modelName: pokemonModelName,
  tableName: pokemonTableName,
  timestamps: false
})

export default PokemonModel
