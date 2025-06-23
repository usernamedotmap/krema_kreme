import React from "react";
import { HiMinus } from "react-icons/hi2";
import { GoPlus } from "react-icons/go";
import { MdOutlineDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import {
  removeFromCart,
  updatedCartItemQuantity,

} from "../../redux/slices/cartSlice";

const CartContext = ({ cart, userId, guestId }) => {
  const dispatch = useDispatch();
  
  console.log("cart to:", cart);
  console.log("userid to", userId);
  console.log("guestId to", guestId)

  const products = Array.isArray(cart?.products)
  ? cart.products
  : Array.isArray(cart?.userCart?.products)
  ? cart.userCart.products
  : [];

  const handleAddToCart = (productId, delta, quantity, size) => {
    const newQuantity = quantity + delta;
    if (newQuantity >= 1) {
      dispatch(
        updatedCartItemQuantity({
          productId,
          quantity: newQuantity,
          guestId,
          userId,
          size,
        })
      );
    }
  };

  const handleRemoveCart = (productId, size) => {
    dispatch(
      removeFromCart({
        productId,
        userId,
        guestId,
        size,
      })
    );
  };
  



  return (
    <div className="">
      {products.map((product, index) => (
        <div
          key={index}
          className="flex items-start justify-between py-4 border-b border-gray-300"
        >
          <div className="flex items-start">
            <img
              src={product.images[0].url}
              alt={product.name}
              className="h-20 w-20 rounded-md object-cover mr-4"
            />

            <div className="flex flex-col ">
              <div className="">
                <h1 className="text-lg font-bold">{product.name}</h1>
                <p className="text-md text-gray-700">size: {product.size.label}</p>
              </div>

              <div className="flex items-center m-2">
                <button
                  onClick={() =>
                    handleAddToCart(
                      product.productId,
                      -1,
                      product.quantity,
                      product.size
                    )
                  }
                  className="border rounded border-gray-400 p-2 text-lg font-medium"
                >
                  <HiMinus className="size-3" />
                </button>
                <span className="text-2xl text-gray-700 mx-4">
                  {product.quantity}
                </span>
                <button
                  onClick={() =>
                    handleAddToCart(
                      product.productId,
                      1,
                      product.quantity,
                      product.size
                    )
                  }
                  className="border border-gray-400 rounded p-2 text-lg font-medium"
                >
                  <GoPlus className="size-3" />
                </button>
              </div>
            </div>
          </div>
          {/* { dito mga price} */}
          <div className="">
            <p className="font-medium">
              {(product.price * product.quantity).toLocaleString("en-PH", {
                style: "currency",
                currency: "PHP",
              })}
            </p>
            <button
              onClick={() => handleRemoveCart(product.productId, product.size)}
              className="w-full flex item-center justify-center"
            >
              <MdOutlineDelete className="size-6 mt-2 text-red-600" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartContext;
