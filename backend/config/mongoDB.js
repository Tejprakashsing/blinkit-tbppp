import mongoose from "mongoose";

async function connectDB(){
    try {
        await mongoose.connect("mongodb+srv://admin:aQ7lG5a5A4N3bSFb@cluster0.mlod4ao.mongodb.net/")
        console.log("connect DB")
    } catch (error) {
        console.log("Mongodb connect error",error)
    }
}

export default connectDB