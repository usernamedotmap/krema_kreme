import express from 'express';
import { admin, protectRoutes } from '../middleware/protectedRoute.js';
import { addProductByAdminController, addUserByAdminController, deleteProductByAdminController, deleteUserByAdminController, getUserByAdminController, putUserByAdminController } from '../controllers/admin.controller.js';

const router = express.Router();


router.get("/users", protectRoutes, admin, getUserByAdminController)
router.post("/users", protectRoutes, admin, addUserByAdminController)
router.put("/users/:id", protectRoutes, admin, putUserByAdminController)
router.delete("/users/:id", protectRoutes, admin, deleteUserByAdminController)

// products
router.post("/products", protectRoutes, admin, addProductByAdminController)

router.delete("/products/:id", protectRoutes, admin, deleteProductByAdminController)
export default router;

