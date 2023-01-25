import { DataTypes } from 'sequelize'

export const defaultSchema = 'public'

/**
 * POKEMON CONSTANTS
 */
export type PokemonColumn = {
  pokedex_number: number
  name: string
  size: number
  weight: number
  stats: number
  picture?: string
}

export const pokemonColumns = {
  pokedexNumber: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'pokedex_number',
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  size: {
    type: DataTypes.DOUBLE,
    allowNull: false
  },
  weight: {
    type: DataTypes.DOUBLE,
    allowNull: false
  },
  stats: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  picture: {
    type: DataTypes.STRING,
    allowNull: true
  }
}

export const pokemonTableName = 'pokemon'
export const pokemonModelName = 'pokemon'

/**
 * SKILLS CONSTANTS
 */

export type SkillsColumn = {
  id?: number
  name: string
  description: string
  power: number
  precision: number
  pp_max: number
}
export const skillsColumns = {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false
  },
  power: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  precision: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  PPMax: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'pp_max'
  }
}

export const skillsTableName = 'skills'
export const skillsModelName = 'skills'

/**
 * USER TABLE CONSTANTS
 */

export type UserColumn = {
  id: number
  username: string
  password: string
}

export const userColumns = {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  }
}

export const userTableName = 'user'
export const userModelName = 'user'

/**
 * TYPE CONSTANTS
 */
export type TypeColumn = {
  id?: number
  name: string
}
export const typeColumns = {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  }
}

export const typeTableName = 'type'
export const typeModelName = 'type'

/**
 * ASSOCIATIVE TABLE CONSTANTS
 */

export const skillsPokemonTableName = `${skillsTableName}_${pokemonTableName}`
export const skillsPokemonModelName = `${skillsModelName}_${pokemonModelName}`

export type SkillsPokemonColumn = {
  pokedex_number: number
  skill_id: number
}

export const skillsPokemonColumns = {
  pokedexNumber: {
    type: DataTypes.INTEGER,
    field: 'pokedex_number',
    allowNull: false,
    references: {
      model: pokemonModelName,
      key: 'pokedex_number'
    }
  },
  skillId: {
    type: DataTypes.INTEGER,
    field: 'skill_id',
    allowNull: false,
    references: {
      model: skillsModelName,
      key: 'id'
    }
  }
}

export const typePokemonTableName = `${typeTableName}_${pokemonTableName}`
export const typePokemonModelName = `${typeModelName}_${pokemonModelName}`

export type TypePokemonColumn = {
  pokedex_number: number
  type_id: number
}

export const typePokemonColumns = {
  pokedexNumber: {
    type: DataTypes.INTEGER,
    field: 'pokedex_number',
    allowNull: false,
    references: {
      model: pokemonModelName,
      key: 'pokedex_number'
    }
  },
  typeId: {
    type: DataTypes.INTEGER,
    field: 'type_id',
    allowNull: false,
    references: {
      model: typeModelName,
      key: 'id'
    }
  }
}
