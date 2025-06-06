import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CiShoppingCart } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { HiBars3BottomRight } from "react-icons/hi2";
import Searchbar from "./Searchbar";
import CartLayout from "../layout/CartLayout";
import { IoCloseCircleOutline } from "react-icons/io5";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [navigationOpen, setNavigationOpen] = useState(false);

  const toggleNavigation = () => {
    setNavigationOpen(!navigationOpen);
  };

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };
  return (
    <>
      <nav className=" container mx-auto flex items-center justify-between py-4 px-6">
        {/* logo */}
        <div className="">
          <Link to="/" className=" font-medium">
            <img src="https://mgi-deliveryportal.s3.amazonaws.com/assets/kk-nav-logo-1.png" alt="K" className="w-32 h-auto object-contain" />
          </Link>
        </div>

        {/* menu siguro  */}
        <div className="hidden md:flex space-x-6 ">
          <Link
            to="/collections/all"
            className="text-gray-700 hover:text-black text-sm font-medium uppercase"
          >
            Assorted
          </Link>
          <Link
            to="/"
            className="text-gray-700 hover:text-black text-sm font-medium uppercase"
          >
            Original
          </Link>
          <Link
            to="/"
            className="text-gray-700 hover:text-black text-sm font-medium uppercase"
          >
            Drinks
          </Link>
          <Link
            to="/"
            className="text-gray-700 hover:text-black text-sm font-medium uppercase"
          >
            Combo af
          </Link>
        </div>

        {/* para sa icons like cart noh */}
        <div className="flex items-center space-x-4">
          <Link to="/profile" className="hover:text-black">
            <CiUser className="size-6" />
          </Link>
          <button onClick={toggleDrawer} className="relative hover:text-black">
            <CiShoppingCart className="size-6 hover:text-black" />
            <span className="absolute -top-3 bg-red-500 text-white text-sm rounded-full px-2 py-0.5 ">
              4
            </span>
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
              Assorted
            </Link>
            <Link
              to="#"
              onClick={toggleNavigation}
              className="block text-gray-600 hover:text-black"
            >
              Original
            </Link>
            <Link
              to="#"
              onClick={toggleNavigation}
              className="block text-gray-600 hover:text-black"
            >
              Drinks
            </Link>
            <Link
              to="#"
              onClick={toggleNavigation}
              className="block text-gray-600 hover:text-black"
            >
              Combo af
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
