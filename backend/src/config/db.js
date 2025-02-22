import mongoose from "mongoose";
import "./dotenv.config.js"

const connectDb =async()=>{
    try {
       await mongoose.connect(process.env.MONGO_URI) ;
       console.log("✅ MongoDB Connected...");
    } catch (error) {
        console.log("Mongo Connection Error",error);
        process.exit(1);
    }
}

export default connectDb;