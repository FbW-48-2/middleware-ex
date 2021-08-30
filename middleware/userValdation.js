import createError from "http-errors";



export const isUserAboveAge = (req, res, next) => {
    try {
        const {age} = req.body
        
        console.log(age)
        if (age < 18) {
            throw (new createError(400, "We can not validate your user. They are below 18 years of age" ))
        }
        next()
    } catch (error) {
        next(error)
    }
}

export const isUserFBW = (req, res, next) => {
    try {
        let {fbw} = req.body
        if(fbw != 48) {
            throw (new createError(400, "We can not validate your user. They are not a member of FBW48" )) 
        }
        next()
    } catch (error) {
        next(error)
    }
}

export const isUserDataValid = (req, res, next) => {
    try {
        let  user  = req.body;
        if(user.firstName && user.lastName && user.age && user.fbw && user.profession && user.favoriteBands && user.email) {
            res.json({message: "allok"}) // reason for isUserDataValid goes last
        }  else {
            throw (new createError(400, 'User Data not Valid'))
        } 
    } catch (error) {
        next(error)
    }
}
