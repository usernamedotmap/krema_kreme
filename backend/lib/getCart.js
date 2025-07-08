import mongoose from "mongoose";
import Cart from "../model/CartItem.js";

export const getCart = async (userId, guestId) => {
  try {
    if (userId) {
     const cart = await Cart.findOne({ user: new mongoose.Types.ObjectId(String(userId)) });
      return cart;
    } else if (guestId) {
      const cart = await Cart.findOne({ guestId });
      return cart;
    }
  } catch (error) {
    console.log(error);
  }
};
