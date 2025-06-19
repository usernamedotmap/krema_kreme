import express from 'express';
import { admin, protectRoutes } from '../middleware/protectedRoute.js';
import { getOrderByAdminController, putOrderByAdminController, deleteOrderByAdminController } from '../controllers/admin.controller.js';

const router = express.Router();

router.get("/orders", protectRoutes, admin, getOrderByAdminController );
router.put("/orders/:id", protectRoutes, admin, putOrderByAdminController );
router.delete("/orders/:id", protectRoutes, admin, deleteOrderByAdminController );



export default router;