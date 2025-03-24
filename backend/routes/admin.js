import mongoose from 'mongoose';
import User from '../models/userModel.js'; // Corrected the path

// MongoDB connection setup using environment variable
mongoose.connect("mongodb+srv://admin:Qwertyui1@cluster0.mlod4ao.mongodb.net/")
  .then(() => {
    console.log("Connected to MongoDB");

    // Function to update Kshitiz to admin
    const makeAdmin = async () => {
      try {
        const user = await User.findOne({ email: "tejgps31@gmail.com" });

        if (!user) {
          console.log("User not found!");
          return;
        }
        // Set the isAdmin field to true
        user.isAdmin = true;

        // Save the updated user
        await user.save();

        // Check the isAdmin flag after updating
        if (user.isAdmin === true) {
          console.log("Tej is now an admin!");
        }

      } catch (err) {
        console.error("Error updating user:", err);
      }
    };

    // Call the function to update the user
    makeAdmin();
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });