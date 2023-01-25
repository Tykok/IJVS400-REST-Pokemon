import express = require('express')

import HttpStatusCode from '../constant'

import { createPokemon, deletePokemonById, getAllPokemon, getPokemon, updatePokemon } from '../services/pokemon.service'
import Pokemon from '../types/pokemon'
import checkEligibility from './middleware/checkEligibility'

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

pokemonRouter.post('/', checkEligibility, async (req, res) => {
  const pokemon = req.body as Pokemon
  const newPokemon = await createPokemon(pokemon)
  res.status(HttpStatusCode.CREATED).send(newPokemon)
})

pokemonRouter.put('/:id', checkEligibility, async (req, res) => {
  const pokemon = req.body as Pokemon
  const pokemonId = Number(req.params.id)
  const updatedPokemon = await updatePokemon(pokemonId, pokemon)
  if (!updatedPokemon) res.status(HttpStatusCode.NOT_FOUND).send('Pokemon not found, was not updated')
  res.status(HttpStatusCode.OK).send(`${updatedPokemon} pokemon updated`)
})

pokemonRouter.delete('/:id', checkEligibility, async (req, res) => {
  const pokemonId = Number(req.params.id)
  if (!pokemonId) res.status(HttpStatusCode.BAD_REQUEST).send('Invalid pokemon id')
  const deletedPokemon = await deletePokemonById(pokemonId)
  if (!deletedPokemon) res.status(HttpStatusCode.NOT_FOUND).send('No pokemon found to delete')

  res.status(HttpStatusCode.OK).send(`${deletedPokemon} pokemon deleted`)
})

export default pokemonRouter
