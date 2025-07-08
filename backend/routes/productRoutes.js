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

const route = express.Router();

route.post("/", admin, postProduct);
route.put("/:id", protectRoutes, admin, putProduct);
route.delete("/:id", admin, deleteProduct);
route.get("/", getProductWithFilter);
route.get("/similar/:id", similarProducts);
route.get("/best-seller", bestSellerProducts);
route.get("/new-arrivals", newArrivalProducts);
route.get("/:id", getProductById);

export default route;
