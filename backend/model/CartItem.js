import mongoose from "mongoose";

const CartItemSchema = new mongoose.Schema(
  {
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
    name: String,
    images: [
      {
        url: String,
        altText: String,
      },
    ],
    price: String,
    size: {
      label: {
        type: String,
        required: true,
      },
      additionalPrice: {
        type: Number,
        default: 0,
      },
    },

    quantity: {
      type: Number,
      default: 1,
    },
  },
  { _id: false }
);

const CartSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    guestId: {
      type: String,
    },
    products: [CartItemSchema],
    totalPrice: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  { timestamps: true }
);

const cart = mongoose.model("Cart", CartSchema);

export default cart;
