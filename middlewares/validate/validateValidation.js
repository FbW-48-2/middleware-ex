import createError from 'http-errors'

export const validateKeys = (req, res, next) => {
    try{

        // THIS METHOD WILL DESCRIBE WHAT DATA MUSST BE PROVIDED
        const missedKeys = () => {
            const inputKeys = Object.keys(req.body)
            const requiredKeys = ["firstName", "lastName", "age", "fbw", "profession", "favoriteBands", "email"]
            const resultArr = requiredKeys.filter(item => {
                return !inputKeys.includes(item)  
            })

            let keysNotFounded = `${resultArr.slice(0, resultArr.length -1).join(', ')} and ${resultArr[resultArr.length -1]}`

            return resultArr.length === 1 ? 
                resultArr.join(' ')
                :
                keysNotFounded
        }

        const { firstName, lastName, age, fbw, profession, favoriteBands, email } = req.body

        if( !firstName || !lastName || !age || !fbw || !profession || !favoriteBands || !email ){
            throw new createError(
                400,
                `Provide following data: ${missedKeys()}`
            )
        }
        next()
    }
    catch(err){
        next(err)
    }
}

export const validateAge = (req, res, next) => {
    try{
        const { age } = req.body;
        let parsed = parseInt(age)
        if(parsed < 18){
            throw new createError(
                400,
                "We can not validate this student. Student below 18 years old"
            )
        }
        next()
    }
    catch(err){
        next(err)
    }
}

export const validateCourse = (req, res, next) => {
    try{
        const { fbw } = req.body;
        if( fbw !== "36" ){
            throw new createError(
                400,
                "This student doesn't belong to this class"
            )
        }
        next()
    }
    catch(err){
        next(err)
    }
}