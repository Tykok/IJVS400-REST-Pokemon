import express = require('express')
import { getAllPokemonAbilities, getPokemonAbilites } from '../services/abilities.service'

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

export default abilitiesRouter
