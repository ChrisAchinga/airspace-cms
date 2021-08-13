import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import bodyParser from 'body-parser'
import swaggerJsdoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'
// data
import airlines from './data/airlines.js'

// express instance
const app = express()

// dotenv
dotenv.config()
const PORT = process.env.PORT || 8800

// swagger_ui
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "AirSpace Next API",
      version: "0.0.0",
      description:
        "A simle API foraviation data",
      license: {
        name: "MIT",
        url: "https://spdx.org/licenses/MIT.html",
      },
      contact: {
        name: "Chris Achinga",
        url: "https://github.com/achingachris",
        email: "achinga.chris@gmail.com",
      },
    },
    servers: [
      {
        url: "http://localhost:8000/airlines",
      },
    ],
  },
  apis: ["./app.js"],
};

const specs = swaggerJsdoc(options);
app.use(
  "/api/docs",
  swaggerUi.serve,
  swaggerUi.setup(specs)
);

// Routes
app.get('/', (req, res) => {
  console.log('Main page Loaded successfully'.bgBlue.white)
  res.send(`API Successfully running`)
})

// get all airlines
app.get('/airlines', (req, res) => {
  console.log('/airlines loaded'.bgGreen.white)
  res.json(airlines)
})

// get one airline by name: slug
app.get('/airlines/:slug', (req, res) => {
  const slug = req.params.slug
  const airline = airlines.find(a => a.slug === slug)
  console.log(`/airlines/${slug} loaded`.bgYellow)
  res.json(airline)
})

app.listen(
  PORT,
  console.log(
    `SERVER IS RUNNING ON ${process.env.ENVIRONMENT} MODE ON PORT ${PORT}`.green
      .bold.underline
  )
)
