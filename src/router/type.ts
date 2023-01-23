import express = require('express')

import HttpStatusCode from '../constant'

import { createType, getTypeById, updateType } from '../services/type.service'

const typeRouter = express.Router()

typeRouter.get('/:id', async (req, res) => {
  const typeId = Number(req.params.id)
  if (!typeId) res.status(HttpStatusCode.BAD_REQUEST).send('Invalid type id')
  const type = await getTypeById(typeId)
  if (!type) res.status(HttpStatusCode.NOT_FOUND).send('Type not found')
  res.status(HttpStatusCode.OK).send(type)
})

typeRouter.post('/', async (req, res) => {
  const type = req.body
  const newType = await createType(type)
  if (!newType) res.status(HttpStatusCode.BAD_REQUEST).send('Invalid type')
  res.status(HttpStatusCode.CREATED).send(newType)
})

typeRouter.put('/:id', async (req, res) => {
  const type = req.body
  const typeId = Number(req.params.id)
  if (!typeId) res.status(HttpStatusCode.BAD_REQUEST).send('Invalid type id')
  const updatedType = await updateType(typeId, type)
  if (!updatedType) res.status(HttpStatusCode.NOT_FOUND).send('Type not found, was not updated')
  res.status(HttpStatusCode.OK).send(`${updatedType} type updated`)
})

export default typeRouter
