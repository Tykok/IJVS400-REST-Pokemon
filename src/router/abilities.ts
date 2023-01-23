import express = require('express')
import { getAllPokemonAbilities, getPokemonAbilites, updateAbility } from '../services/abilities.service'

import HttpStatusCode from '../constant'

const abilitiesRouter = express.Router()

abilitiesRouter.get('/', async (req, res) => {
  const abilities = await getAllPokemonAbilities()
  res.send(HttpStatusCode.OK).send(abilities)
})

abilitiesRouter.get('/:id', async (req, res) => {
  const pokemonId = Number(req.params.id)
  const abilities = await getPokemonAbilites(pokemonId)
  res.status(HttpStatusCode.OK).send(abilities)
})

abilitiesRouter.put('/:id', async (req, res) => {
  const ability = req.body
  const abilityId = Number(req.params.id)
  if (!abilityId) res.status(HttpStatusCode.BAD_REQUEST).send('Invalid ability id')
  const updatedAbility = await updateAbility(abilityId, ability)
  if (!updatedAbility) res.status(HttpStatusCode.NOT_FOUND).send('Ability not found, was not updated')
  res.status(HttpStatusCode.OK).send(updatedAbility)
})

export default abilitiesRouter
