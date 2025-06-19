import express from 'express'
import { admin, protectRoutes } from '../middleware/protectedRoute.js';
import { getProductByAdminController,postProductByAdmin } from '../controllers/admin.controller.js';

const router = express.Router();

router.get("/products", protectRoutes, admin, getProductByAdminController )
router.post("/produts", protectRoutes, admin, postProductByAdmin)

export default router;

