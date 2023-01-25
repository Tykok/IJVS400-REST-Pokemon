import express from 'express'

import HttpStatusCode from '../constant'
import { createType, getTypeById, updateType } from '../services/type.service'
import checkEligibility from './middleware/checkEligibility'

const typeRouter = express.Router()

typeRouter.get('/:id', async (req, res) => {
  const typeId = Number(req.params.id)
  if (!typeId) res.status(HttpStatusCode.BAD_REQUEST).send('Invalid type id')
  const type = await getTypeById(typeId)
  if (!type) res.status(HttpStatusCode.NOT_FOUND).send('Type not found')
  res.status(HttpStatusCode.OK).send(type)
})

typeRouter.post('/', checkEligibility, async (req, res) => {
  const type = req.body
  createType(type)
    .then((newType) => res.status(HttpStatusCode.CREATED).send(newType))
    .catch(() => res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).send('An error occurred while creating the type'))
})

typeRouter.put('/:id', checkEligibility, async (req, res) => {
  const type = req.body
  const typeId = Number(req.params.id)
  if (!typeId) res.status(HttpStatusCode.BAD_REQUEST).send('Invalid type id')
  updateType(typeId, type)
    .then((updatedType) => {
      if (updatedType[0] > 0) {
        res.status(HttpStatusCode.OK).send(`${updatedType} type updated`)
      } else {
        res.status(HttpStatusCode.NOT_FOUND).send(`Type not found, was not updated`)
      }
    })
    .catch(() => res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).send('An error occurred while updating the type'))
})

export default typeRouter
