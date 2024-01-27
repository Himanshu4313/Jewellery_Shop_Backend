import dotenv from "dotenv";
import app from "./app.js";
import connectToDB from "./src/configs/connectToDB.js";
import cloudinary from "cloudinary";
const PORT = process.env.PORT || 5000;

dotenv.config({
    path:'./.env'
})

//Cloudinary configration

cloudinary.v2.config({
    cloud_name:process.env.CLOUDINARY_CLOUD_NAME,
    api_key:process.env.CLOUDINARY_API_KEY,
    api_secret:process.env.CLOUDINARY_SECRET_KEY
})

 connectToDB()
 .then(() => {

     app.listen(PORT, () => {
       console.log(`Server is listen at http://localhost:${PORT}`);
     });

     
 })
 .catch(() => {
     throw new Error("Database connection failed", error);
 })

