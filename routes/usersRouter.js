import express from 'express'
const router = express.Router()

import {
    isUserDataValid,
    isUserAboveAge,
    isUserFBW
} from '../middleware/userValdation.js'

import {
    capitalizeUserName,
    sortFavBands,
    numsToNumber
} from '../middleware/userFormatting.js'

router.route('/validateUser').post( isUserAboveAge, isUserFBW, isUserDataValid )
router.route('/sanitizeUser').post( capitalizeUserName,  sortFavBands,  numsToNumber)

export default router