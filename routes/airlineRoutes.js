import express from 'express'
import {
  getAirlines,
  getAirlinesBySlug,
} from '../controllers/airlineController.js'

const router = express.Router()

router.route('/').get(getAirlines)
router.route('/:slug').get(getAirlinesBySlug)

export default router
