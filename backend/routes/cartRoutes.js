import express from "express";
import {
  deleteCartProduct,
  getCartProduct,
  mergeCartProduct,
  postCartProduct,
  putCartProduct,
} from "../controllers/cart.controller.js";
import { protectRoutes } from "../middleware/protectedRoute.js";

const route = express();

route.post("/", postCartProduct);
route.put("/", putCartProduct);
route.delete("/", deleteCartProduct);
route.get("/", getCartProduct);
route.post("/merge", protectRoutes, mergeCartProduct);
  
export default route;
