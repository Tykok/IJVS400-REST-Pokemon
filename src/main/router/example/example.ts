import express = require('express')
const example = express.Router()

example.post('/', (req, res) => {
  res.send(
    req.body
  )
})

example.get('/', (req, res) => {
  res.send('Express + TypeScript Server... On Change le retour encore... et encore...')
})

example.get('/new', (req, res) => {
  res.send('Un nouveau changement')
})

example.get('/other', (req, res) => {
  res.send('Un nouveau changement... encore')
})

export default example
