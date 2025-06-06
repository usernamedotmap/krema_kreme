import React from "react";
import { IoCloseCircleOutline } from "react-icons/io5";
import CartContext from "../cart/CartContext";
import { useNavigate } from "react-router-dom";

const CartLayout = ({ drawerOpen, toggleDrawer }) => {
  const navigate = useNavigate()

  const handleCheckout = () => {
    navigate("/checkout")
  }

  return (
    <div
      className={`fixed top-0 right-0 w-3/4 sm:w-1/2 md:w-[30rem] h-full bg-[#D0E9E6] shadow-lg transform transition-transform duration-300 flex flex-col z-50 ${
        drawerOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex justify-end p-4">
        <button
          onClick={toggleDrawer}
          className="text-gray-600 hover:text-gray-800"
        >
          <IoCloseCircleOutline className="size-7" />
        </button>
      </div>
      {/* main show HAHAHHAHA*/}
      <div className="flex-grow p-4 overflow-y-auto">
        <h2 className="text-xl font-semibold mb-4">Your Own Cart</h2>

        <CartContext />
      </div>

      <div className="p-4 bg-[#D0E9E6] sticky bottom-0">
        <button onClick={handleCheckout}  className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800">
          CheckmeOut
        </button>
        <p className="text-sm text-center tracking-tighter text-gray-500 mt-2">
          Please, Please, Please. Don't prove I'm right
        </p>
      </div>
    </div>
  );
};

export default CartLayout;
