import { Router } from "express";
import { userRegistration } from "../controllers/auth.controllers.js";
import upload from "../middlewares/multer.middleware.js";

const routes = Router();

routes.route('/registration').post(upload.single('avatar'), userRegistration);

export default routes;