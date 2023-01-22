import { QueryInterface } from "sequelize/types";
import { Skills, skillsTableName } from "../db.constants";

const lines: Skills[] = [
  {
    description: "A test description",
    name: "Test",
    power: 25,
    pp_max: 50,
    precision: 20,
  },
];

export const up = async (
  queryInterface: QueryInterface
): Promise<number | object> => {
  return await queryInterface.bulkInsert(skillsTableName, lines);
};

export const down = async (queryInterface: QueryInterface): Promise<void> => {
  return await queryInterface.dropTable(skillsTableName);
};
