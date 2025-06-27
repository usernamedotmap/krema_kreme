import express from "express";
import {
  deleteCartProduct,
  getCartProduct,
  mergeCartProduct,
  postCartProduct,
  putCartProduct,
} from "../controllers/cart.controller.js";
import { protectRoutes } from "../middleware/protectedRoute.js";

const router = express();

router.post("/", postCartProduct);
router.put("/", putCartProduct);
router.delete("/", deleteCartProduct);
router.get("/", getCartProduct);
router.post("/merge", protectRoutes, mergeCartProduct);
  
export default router;
