import express = require('express')

const viewsRouter = express.Router()

viewsRouter.get('/', async (req, res) => {
  res.render('index', { name: 'Test' })
})
export default viewsRouter
