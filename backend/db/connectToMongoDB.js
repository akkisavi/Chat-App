import mongoose from "mongoose";

const connectToMongoDB = async () =>{
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("Connected to database successfully")
    } catch (error) {
        console.log("Error Connecting to database", error.message);
    }
};

export default connectToMongoDB;