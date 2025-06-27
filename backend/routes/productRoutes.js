import express from "express";
import { admin, protectRoutes } from "../middleware/protectedRoute.js";
import {
    bestSellerProducts,
  deleteProduct,
  getProductById,
  getProductWithFilter,
  newArrivalProducts,
  postProduct,
  putProduct,
  similarProducts,
} from "../controllers/products.controller.js";

const router = express.Router();

router.post("/", admin, postProduct);
router.put("/:id", protectRoutes, admin, putProduct);
router.delete("/:id", admin, deleteProduct);
router.get("/", getProductWithFilter);
router.get("/similar/:id", similarProducts);
router.get("/best-seller", bestSellerProducts);
router.get("/new-arrivals", newArrivalProducts);
router.get("/:id", getProductById);

export default router;
