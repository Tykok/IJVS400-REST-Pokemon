import express = require('express')

import HttpStatusCode from '../constant'

import { getTypeById } from '../services/type.service'

const typeRouter = express.Router()

typeRouter.get('/:id', async (req, res) => {
  const typeId = Number(req.params.id)
  if (!typeId) res.status(HttpStatusCode.BAD_REQUEST).send('Invalid type id')
  const type = await getTypeById(typeId)
  if (!type) res.status(HttpStatusCode.NOT_FOUND).send('Type not found')
  res.status(HttpStatusCode.OK).send(type)
})

export default typeRouter
