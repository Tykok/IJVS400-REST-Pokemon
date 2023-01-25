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
  createPokemon(pokemon)
    .then((newPokemon) => res.status(HttpStatusCode.CREATED).send(newPokemon))
    .catch(() => res.status(HttpStatusCode.BAD_REQUEST).send('An error occured while creating the pokemon'))
})

pokemonRouter.put('/:id', checkEligibility, async (req, res) => {
  const pokemon = req.body as Pokemon
  const pokemonId = Number(req.params.id)
  updatePokemon(pokemonId, pokemon)
    .then((updatedPokemon) => {
      if (updatedPokemon[0] > 0) {
        res.status(HttpStatusCode.OK).send(`${updatedPokemon} pokemon updated`)
      } else {
        res.status(HttpStatusCode.NOT_FOUND).send('Pokemon not found, was not updated')
      }
    })
    .catch(() => res.status(HttpStatusCode.NOT_FOUND).send('Pokemon not found, was not updated'))
})

pokemonRouter.delete('/:id', checkEligibility, async (req, res) => {
  const pokemonId = Number(req.params.id)
  if (!pokemonId) res.status(HttpStatusCode.BAD_REQUEST).send('Invalid pokemon id')
  deletePokemonById(pokemonId)
    .then((numberOfDeletion) => {
      if (numberOfDeletion > 0) {
        res.status(HttpStatusCode.OK).send(`${numberOfDeletion} pokemon deleted`)
      } else {
        res.status(HttpStatusCode.NOT_FOUND).send('Pokemon not found, was not deleted')
      }
    })
    .catch((err) => res.status(HttpStatusCode.NOT_FOUND).send(err))
})

export default pokemonRouter
