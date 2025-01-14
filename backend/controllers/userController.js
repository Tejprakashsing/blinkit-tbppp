import UserModel from "../models/userModel.js";

export default async function registerUser(req,res){
    const {username,email,password} = req.body;
    try{
        const user = await UserModel.findOne({ email })
        
        if(user){
            
        }

    }
    catch(err){
        console.log(err)
    }
    res.send("done")
}