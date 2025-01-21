import UserModel from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import 'dotenv/config';

export async function registerUser(req,res){
    console.log(req.body)
    const {username,email,password} = req.body;
    if(!username || !email || !password){
        return res.json({
            message:"incomplete data recieved"
        })
    }
    try{
        const user = await UserModel.findOne({ username })
        if(user){
            return res.json({
                message:"user alreaady exists",
                success:true
            })
        }
        let hashedPassword = await bcrypt.hash(password, 10);
        let newUser=new UserModel({
            username:username,
            email:email,
            password:hashedPassword,
        })
        await newUser.save()
        return res.status(201).json({
            message:"user registered successfully",
            success:true
        })
    }
    catch(err){
        console.log(err)
        return res.status(500).json({
            message:"internal server error",
            success:false
        })
    }
}

export async function loginUser(req,res){
    const {email,password} = req.body;
    try{
        const user = await UserModel.findOne({email});
        if(!user){
            return res.json({
                message:"user does not exist"
            })
        }
        const isPassword = await bcrypt.compare(password,user.password);
        if(!isPassword){
            return res.json({
                message:"invalid details"
            })
        }
        const token=jwt.sign({
            id:user._id,
            username:user.username,
            },process.env.JWT_SECRET,
            {expiresIn:"1h"}
        );
        res.cookie("token",token,{
            httpOnly:true,
        })
        return res.json({
            message:"logged in seccessfully"
        })
    }
    catch(err){
        console.error(err);
        return res.status(500).json({
            message:"internal server error",
        })
    }

}