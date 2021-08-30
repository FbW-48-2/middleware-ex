import express from 'express';
const app = express();
const port = 5000;

import usersRouter from './routes/usersRouter.js'

app.use(express.json());

app.use('/users', usersRouter)

app.listen(port, () => 
    console.log(`Server started on port ${port}`)
)

app.use( function errorHandler(err, req, res, next) {
    res.status(err.status).send({
      error: {
        message: err.message,
        status: err.status
      }
    })
  
  })