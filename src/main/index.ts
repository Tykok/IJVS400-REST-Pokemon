import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan'
import router from './router/router'
const app = express()

// enables environment variables by
// parsing the .env file and assigning it to process.env
dotenv.config({
  path: '.env'
})

const NODE_ENV = process.env.NODE_ENV
const port = Number(process.env.PORT)

if (NODE_ENV === 'DEV') {
  app.use(morgan('dev'))
}

app.use(express.json())
app.use('', router)

app.listen(port, () => {
  console.log(`⚡️Server is running at https://localhost:${port}`)
})
