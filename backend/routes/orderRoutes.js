import express from 'express';
import { protectRoutes } from '../middleware/protectedRoute.js';
import { getOrderController, getOrderByIdController } from '../controllers/order.controller.js';

const router = express.Router()


router.get("/my-orders", protectRoutes, getOrderController);
router.get("/my-orders/:id", protectRoutes, getOrderByIdController);

export default router;