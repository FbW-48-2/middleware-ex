import express from 'express';
const app = express();
const port = 4000;
import postRouter from './routes/postRouter.js'


app.use(express.json());

app.use('/', postRouter);

app.use(function errorHandler(err, req, res, next){
    res.status(err.message.slice(-3)).send({
        error: {
            message: err.message
        }})
   
})

app.listen(port, () => {
    console.log(`I am listening at http://localhost:${port}`);
  });
  
