import { HTTP_STATUS_CODE } from '../../constant'
import { getAllPokemon } from '../../services/pokemon.service'
import express = require('express')
const example = express.Router()

example.post('/', (req, res) => {
  res.send(req.body)
})

example.get('/', async (req, res) => {
  const pokemons = await getAllPokemon()
  res.status(HTTP_STATUS_CODE.OK).send(pokemons)
})

example.get('/new', (req, res) => {
  res.send('Un nouveau changement')
})

example.get('/other', (req, res) => {
  res.send('Un nouveau changement... encore')
})

export default example
