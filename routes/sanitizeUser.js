import express from 'express'

const router = express.Router()

import { 
    getStudents, 
    createStudent 
} from '../controllers/generalControllers.js'

import {
    capitalizeNames, 
    sortAlphabetically, 
    toTypeOfNumber
} from '../middlewares/sanitize/sanitizeValidation.js'

router.route('/').get(getStudents).post(capitalizeNames, sortAlphabetically, toTypeOfNumber, createStudent)

export default router