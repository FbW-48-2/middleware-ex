export const contain = (req, res, next) => {
    try {
       const input = req.body
       if (!input.firstName || !input.lastName || !input.fbw || !input.email){
        throw (new Error('Hey whats going on here - Code 418'))
        }
        next() 
    }
    catch(error){
        next(error)
}}

export const above18y = (req, res, next) => {
    try {
        const {age} = req.body
        if (age<=18){
            throw (new Error('The user is not above 18 - Code 418')) 
        } 
        next()
    }
    catch(err){
        next(err)
    }
}

export const fbw = (req, res, next) =>  {
    try {
        const {fbw} = req.body
        if (fbw!=='48'){
            throw (new Error('Who are you go back to to your course - Code 418')) 
        } 
        res.json({
            message : "everything went through",
            dataSent:   req.body
        })
    }
    catch(err){
        next(err)
    }
    
}