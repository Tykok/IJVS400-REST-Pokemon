import dotenv from 'dotenv'
import express from 'express'
import morgan from 'morgan'
import mustacheExpress from 'mustache-express'
import router from './router/router'

const app = express()

app.engine('mustache', mustacheExpress())

app.set('view engine', 'mustache')

// enables environment variables by
// parsing the .env file and assigning it to process.env
dotenv.config({
  path: '.env'
})

const { NODE_ENV } = process.env
const port = Number(process.env.PORT) || 8080

if (NODE_ENV === 'DEV') {
  app.use(morgan('dev'))
}

app.use(express.json())
app.use('', router)

app.listen(port, () => {
  console.log(`⚡️Server is running at https://localhost:${port}`)
})
