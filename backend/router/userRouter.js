import { Router } from "express";
import registerUser from '../controllers/userController.js'

const userRouter=new Router();

userRouter.post('/register',registerUser);

export default userRouter