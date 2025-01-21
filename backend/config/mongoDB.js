import mongoose from "mongoose";

async function connectDB(){
    try {
        await mongoose.connect(process.env.MONGO_LINK)
        console.log("connect DB")
    } catch (error) {
        console.log("Mongodb connect error",error)
    }
}

export default connectDB