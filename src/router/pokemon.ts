import express = require('express')

import HttpStatusCode from '../constant'

import { getAllPokemon, getPokemon } from '../services/pokemon.service'

const pokemonRouter = express.Router()

pokemonRouter.get('/', async (req, res) => {
  const pokemons = await getAllPokemon()
  res.status(HttpStatusCode.OK).send(pokemons)
})

pokemonRouter.get('/:id', async (req, res) => {
  const pokemonId = Number(req.params.id)

  // Check for invalid parameters
  if (!pokemonId) res.status(HttpStatusCode.BAD_REQUEST).send('Invalid pokemon id')
  const pokemon = await getPokemon(pokemonId)

  // Check for existing pokemon
  if (!pokemon) res.status(HttpStatusCode.NOT_FOUND).send('Pokemon not found')
  res.status(HttpStatusCode.OK).send(pokemon)
})

export default pokemonRouter
