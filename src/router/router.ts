import express from 'express'

import abilitiesRouter from './abilities'
import pokemonRouter from './pokemon'
import typeRouter from './type'
import viewsRouter from './view'

const router = express.Router()

router.use('/api/pokemons', pokemonRouter)
router.use('/api/types', typeRouter)
router.use('/api/abilities', abilitiesRouter)
router.use('/views', viewsRouter)

// Default route for all other endpoints
router.all('*', (req, res) => {
  res.status(404).send('This endpoint does not exist')
})

export default router
