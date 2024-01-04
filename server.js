import dotenv from "dotenv";
import app from "./app.js";
import connectToDB from "./src/configs/connectToDB.js";

const PORT = process.env.PORT || 5000;

dotenv.config({
    path:'./.env'
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

