import asyncHandler from 'express-async-handler'
import colors from 'colors'
import aircraft from '../data/aircraft.js'

const getAirCraft = asyncHandler(async (req, res) => {
  console.log('/api/aircraft loaded'.bgGreen.white)
  res.json(aircraft)
})

const getAircraftBySlug = asyncHandler(async (req, res) => {
  const slug = req.params.slug
  const data = aircraft.find((a) => a.slug === slug)
  if (data) {
    console.log(`/api/aircraft/${slug} loaded`.bgYellow)
    res.json(data)
  } else {
    res.status(404)
    console.log(`/api/aircraft/${slug} FAILED`.bgRed)
    throw new Error('Airline not found in airSpace Next API v1')
  }
})

export { getAirCraft, getAircraftBySlug }
