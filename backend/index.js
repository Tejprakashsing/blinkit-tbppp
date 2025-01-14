import express, { urlencoded } from 'express'
import userRouter from './router/userRouter.js'
import connectDB from './config/mongoDB.js';
const app=express();

app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));  

app.use('/api/user',userRouter)

connectDB().then(()=>{
    app.listen(8080,()=>{
        console.log("server is running");
    })
})