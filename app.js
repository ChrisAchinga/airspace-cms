import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import swaggerJsdoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'

// swagger config
import swaggerConfig from './config/swagger.js'

// routes
import airlineRoutes from './routes/airlineRoutes.js'
import aircraftRoutes from './routes/aircraftRoutes.js'

// middleware
import { notFound, errorHandler } from './middleware/errorMiddleware.js'

// express instance
const app = express()
app.use(express.json())

// dotenv
dotenv.config()
const PORT = process.env.PORT || 8800

// swagger_ui
const specs = swaggerJsdoc(swaggerConfig)
app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(specs))

// Routes
app.get('/', (req, res) => {
  console.log('Main page Loaded successfully'.bgBlue.white)
  res.send(`API Successfully running`)
})

// airlines
app.use('/api/airlines', airlineRoutes)

// aircraft
app.use('/api/aircraft', aircraftRoutes)

app.use(notFound)
app.use(errorHandler)

app.listen(
  PORT,
  console.log(
    `SERVER IS RUNNING ON ${process.env.ENVIRONMENT} MODE ON PORT ${PORT}`.green
      .bold.underline
  )
)
