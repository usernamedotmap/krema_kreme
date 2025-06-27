import express from "express";
import { protectRoutes } from "../middleware/protectedRoute.js";
import {
  checkoutController,
  putCheckoutController,
  checkoutFinalizeController,
} from "../controllers/checkout.controller.js";

const router = express.Router();

router.post("/", protectRoutes, checkoutController);
router.put("/:id/pay", protectRoutes, putCheckoutController);
router.post("/:id/finalize", protectRoutes, checkoutFinalizeController);

export default router;
