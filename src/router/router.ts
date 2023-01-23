import express from 'express'

import abilitiesRouter from './abilities'
import pokemonRouter from './pokemon'
import typeRouter from './type'

const router = express.Router()

router.use('/pokemon', pokemonRouter)
router.use('/type', typeRouter)
router.use('/abilities', abilitiesRouter)

// Default route for all other endpoints
router.get('*', (req, res) => {
  res.status(404).send('This endpoint does not exist')
})

export default router
