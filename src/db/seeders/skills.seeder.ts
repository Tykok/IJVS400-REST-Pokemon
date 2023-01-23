import { QueryInterface } from 'sequelize/types'
import { SkillsColumn, SkillsPokemonColumn, skillsPokemonTableName, skillsTableName } from '../db.constants'

const lines: SkillsColumn[] = [
  {
    id: 1,
    name: 'Quick attack',
    description:
      'Quick Attack inflicts damage. It has a priority of +1, so it is used before all moves that do not have increased priority.',
    power: 40,
    pp_max: 20,
    precision: 100
  },
  {
    id: 2,
    name: 'Vine Whip',
    description: 'Vine Whip inflicts damage and has no secondary effect. Its PP is 10, and it has a power of 35.',
    power: 45,
    pp_max: 25,
    precision: 100
  },
  {
    id: 3,
    name: 'Razor leaf',
    description: 'Razor Leaf deals damage and has an increased critical hit ratio.',
    power: 55,
    pp_max: 25,
    precision: 95
  },
  {
    id: 4,
    name: 'Take down',
    description: 'Take Down inflicts damage, and the user receives recoil damage equal to ¼ of the damage done to the target.',
    power: 90,
    pp_max: 20,
    precision: 85
  }
]

const linesOfAssociation: SkillsPokemonColumn[] = [
  { pokedex_number: 1, skill_id: 1 },
  { pokedex_number: 1, skill_id: 2 },
  { pokedex_number: 1, skill_id: 3 },
  { pokedex_number: 1, skill_id: 4 }
]

export const up = async (queryInterface: QueryInterface) => {
  await queryInterface.bulkInsert(skillsTableName, lines)
  await queryInterface.bulkInsert(skillsPokemonTableName, linesOfAssociation)
}

export const down = async (queryInterface: QueryInterface) => {
  return await queryInterface.dropTable(skillsTableName)
}
