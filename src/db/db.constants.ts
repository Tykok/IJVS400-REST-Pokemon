import { DataTypes } from "sequelize";

export const defaultSchema = "public";

/**
 * POKEMON CONSTANTS
 */
export type Pokemon = {
  pokedex_number: number;
  name: string;
  size: number;
  weight: number;
  stats: number;
  picture?: string;
};

export const pokemonColumns = {
  pokedexNumber: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: "pokedex_number",
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  size: {
    type: DataTypes.DOUBLE,
    allowNull: false,
  },
  weight: {
    type: DataTypes.DOUBLE,
    allowNull: false,
  },
  stats: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  picture: {
    type: DataTypes.STRING,
    allowNull: true,
  },
};

export const pokemonTableName = "pokemon";
export const pokemonModelName = "pokemon";

/**
 * SKILLS CONSTANTS
 */

export type Skills = {
  name: string;
  description: string;
  power: number;
  precision: number;
  pp_max: number;
};
export const skillsColumns = {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  power: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  precision: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  PPMax: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: "pp_max",
  },
};

export const skillsTableName = "skills";
export const skillsModelName = "skills";

/**
 * TYPE CONSTANTS
 */
export type Type = {
  name: string;
};
export const typeColumns = {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
};

export const typeTableName = "type";
export const typeModelName = "type";
