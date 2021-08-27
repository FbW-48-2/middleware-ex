import createError from 'http-errors'

export const capitalizeNames = (req, res, next) => {
    try{

        const { firstName, lastName } = req.body

        if(typeof firstName !== "string" || typeof lastName !== "string"){
            throw new createError(
                400,
                "firs and last name must be a string"
            )
        }

        if(!isNaN(firstName) || !isNaN(lastName)){
            throw new createError(
                400,
                "firs and last name must be just letters"
            )
        }

        if(firstName.length < 3 || lastName.length < 3){  
            throw new createError(
                400,
                "firs and last name must be at least three letters"
            )
        }

        const capitalize = (name) => {
            return name[0].toUpperCase() + name.slice(1).toLowerCase()
        }
        req.body.firstName = capitalize(firstName)
        req.body.lastName = capitalize(lastName)
        next()

    }
    catch(err){
        next(err)
    }
}

export const sortAlphabetically = (req, res, next) => {
    try{

        const { favoriteBands } = req.body
        // check if favoriteBands is an Array
        if(!Array.isArray(favoriteBands)){
            throw new createError(
                400,
                "favoriteBands has to be an Array"
            )
        }
        // check if array of favoriteBands is empty
        if(favoriteBands.length === 0){
            throw new createError(
                400,
                "Provide your favorite bands"
            )    
        }

        // sort alphabetically
        favoriteBands.sort() 
        next()
    }
    catch(err){
        next(err)
    }
} 

export const toTypeOfNumber = (req, res, next) => {
    try{
        const { age, fbw } = req.body;
        req.body.age =  parseInt(age);
        req.body.fbw = parseInt(fbw);

        // check if age and fwb are numbers
        if(isNaN(age)){
            throw new createError(
                400,
                "age has to be a Number"
            )
        }

        if(isNaN(fbw)){
            throw new createError(
                400,
                "fbw has to be a Number"
            )
        }
        next()
    }
    catch(err){
        next(err)
    }


}

