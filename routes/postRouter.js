import express from 'express';
const router = express.Router();

import {
    contain,
    above18y,
    fbw
} from '../middleware/isUserValid.js'


import {
    capitalize,
    sortAlphabet,
    changeToNum
} from '../middleware/isUsersanitized.js'


router.route('/validateuser').post(contain, above18y, fbw)
router.route('/sanitizeuser').post(capitalize, sortAlphabet, changeToNum)

export default router