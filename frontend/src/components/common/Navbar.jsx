import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CiShoppingCart } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { HiBars3BottomRight } from "react-icons/hi2";
import Searchbar from "./Searchbar";
import CartLayout from "../layout/CartLayout";
import { IoCloseCircleOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { fetchCart } from "../../redux/slices/cartSlice";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [navigationOpen, setNavigationOpen] = useState(false);
  const { cart } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.auth);

  
const productList =
   Array.isArray(cart?.products) && cart.products.length > 0
    ? cart.products
    : Array.isArray(cart?.userCart?.products)
    ? cart.userCart.products
    : Array.isArray(cart?.guestCart?.products)
    ? cart.guestCart.products
    : [];


const cartItemCount = productList.reduce(
  (total, product) => total + product.quantity, 
  0
);

 
  // const cartItemCount = cart?.products?.reduce(
  //   (total, product) => total + product.quantity,
  //   0
  // );

console.log("Cart in Navbar:", cart, "Item Count:", cartItemCount);

  // const isValidCart = (cart) =>
  //   cart && Array.isArray(cart.products) && typeof cart.totalPrice === "number";

  // const cartItemTotal = isValidCart(cart)
  //   ? cart.products.reduce((acc, item) => acc + item.quantity, 0)
  //   : 0;

  // const dispatch = useDispatch();
  // const { guestId } = useSelector((state) => state.cart);

  // useEffect(() => {
  //   if ((user?._id || guestId) && !cart?.products?.length === 0) {
  //     dispatch(fetchCart({ userId: user?._id, guestId }));
  //   }
  // }, [user, dispatch, guestId, cart.products.length]);

  const toggleNavigation = () => {
    setNavigationOpen(!navigationOpen);
  };

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };
  return (
    <>
      <nav className="bg-[#f4f0c6] w-full h-auto mx-auto flex items-center justify-between py-4 px-8">
        {/* logo */}
        <div className="pl-10">
          <Link to="/">
            <img
              src="/logo.png"
              alt="Logo"
              className="w-20 h-20 object-contain"
            />
          </Link>
        </div>

        {/* menu siguro  */}
        <div className="hidden md:flex space-x-6 ">
          <Link
            to="/"
            className="text-gray-700 hover:text-black text-lg font-medium uppercase"
          >
            HOME
          </Link>
          <Link
            to="/collections/all?category=Donuts"
            className="text-gray-700 hover:text-black text-lg font-medium uppercase"
          >
            DONUTS
          </Link>
          <Link
            to="/collections/all?category=Drinks"
            className="text-gray-700 hover:text-black text-lg font-medium uppercase"
          >
            DRINKS
          </Link>
          <Link
            to="/collections/all?category=Combo"
            className="text-gray-700 hover:text-black text-lg font-medium uppercase"
          >
            MIX & MATCH
          </Link>
        </div>

        {/* para sa icons like cart noh */}
        <div className="flex items-center space-x-4">
          {user && user.role === "admin" && (
            <Link
              to="/admin"
              className="block bg-black px-2 rounded text-sm text-white"
            >
              Admin
            </Link>
          )}
          <Link to="/profile" className="hover:text-black">
            <CiUser className="size-6" />
          </Link>
          <button onClick={toggleDrawer} className="relative hover:text-black">
            <CiShoppingCart className="size-6 hover:text-black" />
            {cartItemCount > 0 && (
              <span className="absolute -top-3 bg-red-500 text-white text-sm rounded-full px-2 py-0.5 ">
                {cartItemCount}
              </span>
            )}
          </button>

          <div className="overflow-hidden">
            <Searchbar />
          </div>
          <button onClick={toggleNavigation} className="md:hidden">
            <HiBars3BottomRight className="size-6 text-gray-700" />
          </button>
        </div>
      </nav>
      <CartLayout toggleDrawer={toggleDrawer} drawerOpen={drawerOpen} />

      {/* mb view noh */}
      <div
        className={`fixed top-0 left-0 w-2/4 h-full sm:w-1/2 md:w-1/3 bg-[#D0E9E6] shadow-lg transform transition-transform duration-300 z-50 ${
          navigationOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button onClick={toggleNavigation}>
            <IoCloseCircleOutline className="size-6 text-gray-600" />
          </button>
        </div>
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-4">Menu</h2>
          <nav className="space-y-4">
            <Link
              to="/collections/all"
              onClick={toggleNavigation}
              className="block text-gray-600 hover:text-black"
            >
              HOME
            </Link>
            <Link
              to="/collections/all?category=Donuts"
              onClick={toggleNavigation}
              className="block text-gray-600 hover:text-black"
            >
              DONUTS
            </Link>
            <Link
              to="/collections/all?category=Drinks"
              onClick={toggleNavigation}
              className="block text-gray-600 hover:text-black"
            >
              DRINKS
            </Link>
            <Link
              to="/collections/all?category=Combo"
              onClick={toggleNavigation}
              className="block text-gray-600 hover:text-black"
            >
              MIX & MATCH
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
