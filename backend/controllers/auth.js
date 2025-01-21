import jwt from "jsonwebtoken"
export function isLoggedIn(req,res){
    try{
        const token = req.cookies.token;
        const user =jwt.verify(token,process.env.JWT_SECRET);
        req.user = user;
        next();
    }
    catch(err){
        console.error(err);
        return res.json({
            message:"user not loggedIn"
        })
    }
}