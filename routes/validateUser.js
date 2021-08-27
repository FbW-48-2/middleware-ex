import express from 'express'

const router = express.Router()

import { 
    getStudents, 
    createStudent 
} from '../controllers/generalControllers.js'

import {
    validateKeys, 
    validateAge, 
    validateCourse
} from '../middlewares/validate/validateValidation.js'

router.route('/').get(getStudents).post(validateKeys, validateAge, validateCourse, createStudent)

export default router