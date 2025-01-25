import { Router } from "express";
import {registerUser,loginUser} from '../controllers/userController.js'

const userRouter=new Router();

userRouter.post('/register',registerUser);
userRouter.post('/login',loginUser);
userRouter.put('/forgot-password',forgotpasswordUser);

export default userRouter