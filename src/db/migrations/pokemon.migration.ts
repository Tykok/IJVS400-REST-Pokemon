import { QueryInterface } from "sequelize/types";
import { pokemonColumns, pokemonTableName } from "../db.constants";

export const up = async (queryInterface: QueryInterface): Promise<void> => {
  return await queryInterface.createTable(pokemonTableName, pokemonColumns);
};

export const down = async (queryInterface: QueryInterface): Promise<void> => {
  return await queryInterface.dropTable(pokemonTableName);
};
