import asyncHandler from 'express-async-handler'
import colors from 'colors'
import airlines from '../data/airlines.js'

const getAirlines = asyncHandler(async (req, res) => {
  console.log('/api/airlines loaded'.bgGreen.white)
  res.json(airlines)
})

const getAirlinesBySlug = asyncHandler(async (req, res) => {
  const slug = req.params.slug
  const data = airlines.find((a) => a.slug === slug)
  if (data) {
    console.log(`/airlines/${slug} loaded`.bgYellow)
    res.json(data)
  } else {
    res.status(404)
    console.log(`/airlines/${slug} FAILED`.bgRed)
    throw new Error('Airline not found in airSpace Next API v1')
  }
})

export {getAirlines, getAirlinesBySlug}
