import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import swaggerJsdoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'

// routes
import airlineRoutes from './routes/airlineRoutes.js'

// express instance
const app = express()

app.use(express.json())

// dotenv
dotenv.config()
const PORT = process.env.PORT || 8800

// swagger_ui
const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'AirSpace Next API',
      version: '0.0.1',
      description: 'A simle API foraviation data',
      license: {
        name: 'MIT',
        url: 'https://spdx.org/licenses/MIT.html',
      },
      contact: {
        name: 'Chris Achinga',
        url: 'https://github.com/achingachris',
        email: 'achinga.chris@gmail.com',
      },
    },
    servers: [
      {
        url: 'http://localhost:8000/airlines',
      },
    ],
  },
  apis: ['./app.js'],
}
const specs = swaggerJsdoc(options)
app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(specs))

//------//

// Routes
app.get('/', (req, res) => {
  console.log('Main page Loaded successfully'.bgBlue.white)
  res.send(`API Successfully running`)
})

// airlines
app.use('/api/airlines', airlineRoutes)

app.listen(
  PORT,
  console.log(
    `SERVER IS RUNNING ON ${process.env.ENVIRONMENT} MODE ON PORT ${PORT}`.green
      .bold.underline
  )
)
