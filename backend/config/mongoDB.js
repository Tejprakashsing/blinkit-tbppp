import mongoose from 'mongoose';

const connectDB = async () => {
    await mongoose.connect("mongodb+srv://admin:Qwertyui1@cluster0.mlod4ao.mongodb.net/", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected successfully!");
};

export default connectDB;