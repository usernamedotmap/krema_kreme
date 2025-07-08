import express from 'express';
import { loginController, registerController, getUserController } from '../controllers/users.controller.js';
import { protectRoutes } from '../middleware/protectedRoute.js';

const route = express.Router();

route.post("/register", registerController)
route.post("/login", loginController)
route.get("/profile", protectRoutes, getUserController)


export default route;