import PokemonModel from '../db/models/pokemon.model'
import SkillsModel from '../db/models/skills.model'
import Ability from '../types/ability'

export const getPokemonAbilites = async (pokemonId: number): Promise<Ability[]> => {
  const abilities = (await PokemonModel.findOne({
    where: { pokedex_number: pokemonId },
    include: [
      {
        model: SkillsModel,
        attributes: ['id', 'name', 'description', 'power', 'precision', 'pp_max'],
        through: {
          attributes: []
        }
      }
    ]
  })) as unknown as { pokemon: PokemonModel; skills: SkillsModel[] }

  return abilities.skills as unknown as Ability[]
}

export const getAllPokemonAbilities = async (): Promise<Ability[]> => {
  const allAbilities = await SkillsModel.findAll()
  return allAbilities as unknown as Ability[]
}
