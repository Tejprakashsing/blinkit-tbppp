import express, { urlencoded } from 'express'
import userRouter from './router/userRouter.js'
import connectDB from './config/mongoDB.js'
import cookieParser from 'cookie-parser';
import cors from "cors";
const app=express();

app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));  

app.use(cookieParser());
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
}))

app.use('/api/user',userRouter)

connectDB().then(()=>{
    app.listen(8080,()=>{
        console.log("server is running");
    })
})