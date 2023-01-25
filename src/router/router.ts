import express from 'express'

import abilitiesRouter from './abilities.router'
import jwtRouter from './jwt.router'
import pokemonRouter from './pokemon.router'
import typeRouter from './type.router'

const router = express.Router()

router.use('/api/pokemons', pokemonRouter)
router.use('/api/types', typeRouter)
router.use('/api/abilities', abilitiesRouter)
router.use('/api/token', jwtRouter)

// Default route for all other endpoints
router.all('*', (req, res) => {
  res.status(404).send('This endpoint does not exist')
})

export default router
