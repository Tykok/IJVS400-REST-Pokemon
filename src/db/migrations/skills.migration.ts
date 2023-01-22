import { QueryInterface } from "sequelize/types";
import { skillsColumns, skillsTableName } from "../db.constants";

export const up = async (queryInterface: QueryInterface): Promise<void> => {
  // Create pokemon-skills table
  return await queryInterface.createTable(skillsTableName, skillsColumns);
};

export const down = async (queryInterface: QueryInterface): Promise<void> => {
  return await queryInterface.dropTable(skillsTableName);
};
