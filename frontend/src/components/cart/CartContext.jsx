import React from "react";
import { HiMinus } from "react-icons/hi2";
import { GoPlus } from "react-icons/go";
import { MdOutlineDelete } from "react-icons/md";

const CartContext = () => {
  const cartItems = [
    {
      productId: 1,
      name: "Eahcakes",
      price: "100",
      size: "M",
      quantity: 2,
      image:
        "https://mgi-deliveryportal.s3.amazonaws.com/1418x1063px-MGCC-KK-Bites-Bucket.jpg",
    },
    {
      productId: 2,
      name: "Eahcakes",
      price: "200",
      size: "L",
      quantity: 2,
      image:
        "https://mgi-deliveryportal.s3.amazonaws.com/1418x1063px-MGCC-KK-Bites-Bucket.jpg",
    },
  ];

  return (
    <div className="">
      {cartItems.map((product, index) => (
        <div
          key={index}
          className="flex items-start justify-between py-4 border-b border-gray-300"
        >
          <div className="flex items-start">
            <img
              src={product.image}
              alt={product.name}
              className="h-20 w-20 rounded-md object-cover mr-4"
            />
            <div className="flex flex-col ">
              <div className="">
                <h1 className="text-lg font-bold">{product.name}</h1>
                <p className="text-md text-gray-700">size: {product.size}</p>
              </div>

              <div className="flex items-center m-2">
                <button className="border rounded border-gray-400 p-2 text-lg font-medium">
                  <HiMinus className="size-3" />
                </button>
                <span className="text-2xl text-gray-700 mx-4">
                  {product.quantity}
                </span>
                <button className="border border-gray-400 rounded p-2 text-lg font-medium">
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
            <button className="w-full flex item-center justify-center">
              <MdOutlineDelete className="size-6 mt-2 text-red-600" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartContext;
