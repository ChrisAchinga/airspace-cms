import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
// data
import airlines from './data/airlines.js'

// file configurations and initializations
// express instance
const app = express()
// const router = express.Router()

// dotenv
dotenv.config()
const PORT = process.env.PORT || 8800

// ------------------------------------------------------- //

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
