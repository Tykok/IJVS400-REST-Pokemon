import express = require('express')
import { getAllPokemonAbilities, getPokemonAbilites, updateAbility } from '../services/abilities.service'

import HttpStatusCode from '../constant'
import checkEligibility from './middleware/checkEligibility'

const abilitiesRouter = express.Router()

abilitiesRouter.get('/', async (req, res) => {
  const abilities = await getAllPokemonAbilities()
  res.send(HttpStatusCode.OK).send(abilities)
})

abilitiesRouter.get('/:id', async (req, res) => {
  const pokemonId = Number(req.params.id)
  getPokemonAbilites(pokemonId)
    .then((ability) => res.status(HttpStatusCode.OK).send(ability))
    .catch((err) => res.status(HttpStatusCode.NOT_FOUND).send(err))
})

abilitiesRouter.put('/:id', checkEligibility, async (req, res) => {
  const ability = req.body
  const abilityId = Number(req.params.id)
  if (!abilityId) res.status(HttpStatusCode.BAD_REQUEST).send('Invalid ability id')

  updateAbility(abilityId, ability)
    .then((updatedAbility) => {
      if (updatedAbility[0] === 0) {
        res.status(HttpStatusCode.NOT_FOUND).send('Ability not found, was not updated')
      } else {
        res.status(HttpStatusCode.OK).send(`${updatedAbility} ability updated`)
      }
    })
    .catch(() => res.status(HttpStatusCode.NOT_FOUND).send('Ability not found, was not updated'))
})

export default abilitiesRouter
