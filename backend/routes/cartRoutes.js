import express from "express";
import {
  deleteCartProduct,
  getCartProduct,
  mergeCartProduct,
  postCartProduct,
  putCartProduct,
} from "../controllers/cart.controller.js";

const route = express();

route.post("/", postCartProduct);
route.put("/", putCartProduct);
route.delete("/", deleteCartProduct);
route.get("/", getCartProduct);
route.post("/merge", mergeCartProduct);

export default route;
