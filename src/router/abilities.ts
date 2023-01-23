import express = require('express')

import { HttpStatusCode } from '../constant'
import { getAllPokemon } from '../services/pokemon.service'

const abilitiesRouter = express.Router()

abilitiesRouter.get('/', async (req, res) => {
  const pokemons = await getAllPokemon()
  res.status(HttpStatusCode.OK).send(pokemons)
})

export default abilitiesRouter
