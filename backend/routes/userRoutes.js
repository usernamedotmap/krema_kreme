import express from 'express';
import { loginController, registerController, getUserController } from '../controllers/users.controller.js';
import { protectRoutes } from '../middleware/protectedRoute.js';

const router = express.Router();

router.post("/register", registerController)
router.post("/login", loginController)
router.get("/profile", protectRoutes, getUserController)


export default router;