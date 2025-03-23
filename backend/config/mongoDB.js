import mongoose from 'mongoose';

const connectDB = async () => {
    await mongoose.connect(process.env.MONGO_LINK, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected successfully!");
};

export default connectDB;