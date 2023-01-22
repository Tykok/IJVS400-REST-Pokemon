import { QueryInterface } from "sequelize/types";
import { typeColumns, typeTableName } from "../db.constants";

export const up = async (queryInterface: QueryInterface): Promise<void> => {
  // Create pokemon-type table
  return await queryInterface.createTable(typeTableName, typeColumns);
};

export const down = async (queryInterface: QueryInterface): Promise<void> => {
  return await queryInterface.dropTable(typeTableName);
};
