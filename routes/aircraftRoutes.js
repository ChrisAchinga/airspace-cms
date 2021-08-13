import express from 'express'
import {
  getAirCraft,
  getAircraftBySlug,
} from '../controllers/aircraftController.js'

const router = express.Router()

router.route('/').get(getAirCraft)
router.route('/:slug').get(getAircraftBySlug)

export default router
