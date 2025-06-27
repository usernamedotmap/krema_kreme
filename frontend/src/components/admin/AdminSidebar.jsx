import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FaUserAstronaut } from "react-icons/fa";
import { CiShoppingBasket } from "react-icons/ci";
import { BsShopWindow } from "react-icons/bs";
import { SiWikibooks } from "react-icons/si";
import { FaPersonWalkingArrowLoopLeft } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/slices/authSlice";
import { clearCart } from "../../redux/slices/cartSlice";

const AdminSidebar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()


  const handleLogout = () => {
    dispatch(logout());
    dispatch(clearCart());
    navigate("/login");
  };

  return (
    <div className="p-8">
      <div className="mb-6">
        <Link to="/admin" className="text-2xl font-medium">
          Hunger Halt
        </Link>
      </div>

      <h2 className="text-xl font-bold my-8 text-center">
        Admin Dashboard
      </h2>

      <nav className="flex flex-col space-y-2">
        <NavLink
          to="/admin/users"
          className={({ isActive }) =>
            isActive
              ? "bg-gray-700 text-white py-3 px-4 rounded flex items-center space-x-2"
              : "text-gray-300 hover:bg-gray-700 hover:text-white py-3 px-4 rounded flex items-center space-x-2"
          }
        >
          <FaUserAstronaut />
          <span className="">Users</span>
        </NavLink>
        <NavLink
          to="/admin/products"
          className={({ isActive }) =>
            isActive
              ? "bg-gray-700 text-white py-3 px-4 rounded flex items-center space-x-2"
              : "text-gray-300 hover:bg-gray-700 hover:text-white py-3 px-4 rounded flex items-center space-x-2"
          }
        >
          <CiShoppingBasket />
          <span className="">Products</span>
        </NavLink>
        <NavLink
          to="/admin/orders"
          className={({ isActive }) =>
            isActive
              ? "bg-gray-700 text-white py-3 px-4 rounded flex items-center space-x-2"
              : "text-gray-300 hover:bg-gray-700 hover:text-white py-3 px-4 rounded flex items-center space-x-2"
          }
        >
          <SiWikibooks />
          <span className="">Orders</span>
        </NavLink>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "bg-gray-700 text-white py-3 px-4 rounded flex items-center space-x-2"
              : "text-gray-300 hover:bg-gray-700 hover:text-white py-3 px-4 rounded flex items-center space-x-2"
          }
        >
          <BsShopWindow />
          <span className="">Shop</span>
        </NavLink>
      </nav>
      <div className="mt-6">
        <button
          onClick={handleLogout}
          className="w-full bg-red-500 hover:bg-red-600 text-white rounded-lg py-2 px-4 flex items-center justify-center space-x-2"
        >
          <FaPersonWalkingArrowLoopLeft />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};

export default AdminSidebar;
