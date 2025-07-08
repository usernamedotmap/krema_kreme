import express from "express";
import { protectRoutes } from "../middleware/protectedRoute.js";
import {
  checkoutController,
  putCheckoutController,
  checkoutFinalizeController,
} from "../controllers/checkout.controller.js";

const route = express.Router();

route.post("/", protectRoutes, checkoutController);
route.put("/:id/pay", protectRoutes, putCheckoutController);
route.post("/:id/finalize", protectRoutes, checkoutFinalizeController);

export default route;
