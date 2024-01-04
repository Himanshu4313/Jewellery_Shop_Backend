import mongoose from "mongoose";
import { config } from "dotenv";
config();
const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://localhost:27017/JewelleryShop";
const connectToDB = async () => {
  try {
    const connection = await mongoose.connect(MONGODB_URI);
    console.log(
      `Database connected successfully with ${connection.connection.host}`
    );
  } catch (error) {
    console.log("Database connection failed");
  }
};

export default connectToDB;
