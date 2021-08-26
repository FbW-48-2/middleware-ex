import {capitalizeFunc} from './helpers/capitalize.js'
import { fbw } from './isUserValid.js'


export const capitalize = (req, res, next) => {
    let {firstName, lastName} = req.body
    req.body.firstName = capitalizeFunc(firstName)
    req.body.lastName = capitalizeFunc(lastName)
    next()
}

export const sortAlphabet = (req, res, next) => {
    let {favoriteBands} = req.body
    favoriteBands.sort((a,b) => {
        let sortBack = 0
        return a<b ? sortBack= -1 : a>b ? sortBack = 1 : sortBack
    })
    
    next()
}

export const changeToNum = (req, res, next) =>  {
    let {fbw, age} = req.body 
    req.body.fbw = Number(fbw)
    req.body.age = Number(age)
    res.json(req.body)
}