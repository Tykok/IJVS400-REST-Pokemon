import express from 'express'
import example from './example/example'

const router = express.Router()

router.use('/example', example)

// Default route for all other endpoints
router.get('*', (req, res) => {
  res.status(404).send('This endpoint does not exist')
})

export default router
