import express from 'express'

const app = express()
const PORT = 4000

import validateUser from './routes/validateUser.js'
import sanitizeUser from './routes/sanitizeUser.js'

// express middlewares
app.use( express.json() )

app.get("/", (req,res)=> {
    res.send('<h1>Wellcome Server</h1>')
})

// ++++++++++++++Router++++++++++++++++++++++++++++++++

app.use('/validateUser', validateUser)
app.use('/sanitizeUser', sanitizeUser)

// +++++++++++++++++++++++++++++++++++++++++++++++++++++

app.listen(PORT, ()=> {
    console.log(`API running in PORT ${PORT} 👍`);
    console.log(`http://localhost:${PORT}`);
})

// +++++ ERROR HANDLING++++++++++++++++++++++
app.use( function errorHandler(err, req, res, next) {
    res.status(err.status || 400).send({
        error:{
            message: err.message,
            status: err.status
        }
    })
} )