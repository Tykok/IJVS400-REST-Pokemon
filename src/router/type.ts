import express = require('express')

import { HttpStatusCode } from '../constant'
import { getAllPokemon } from '../services/pokemon.service'

const typeRouter = express.Router()

typeRouter.get('/', async (req, res) => {
  const pokemons = await getAllPokemon()
  res.status(HttpStatusCode.OK).send(pokemons)
})

export default typeRouter
