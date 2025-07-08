import React, { useState } from "react";
import { HiBars3BottomRight } from "react-icons/hi2";
import AdminSidebar from "./AdminSidebar";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <div className="min-h-screen flex flex-col md:flex-row relative">
      {/* {mobdile view dito} */}

      <div className="flex md:hidden p-4  bg-gray-900 text-white z-20">
        <button
          onClick={handleSidebar}
          className="flex md:hidden  p-4 bg-gray-900 text-white z-20"
        >
          <HiBars3BottomRight size={24} />
        </button>
        <h1 className="ml-4 py-3 text-2xl font-medium ">Admin Dashboard</h1>
      </div>

         {/*  */}

      <div className="hidden md:block bg-gray-900 text-white w-64 min-h-screen">
    <AdminSidebar />
  </div>


   

      {isSidebarOpen && (
        <div className="fixed z-10 bg-black bg-opacity-50 md:hidden">
          <div
            className={`transform bg-gray-900 w-64 min-h-screen text-white absolute md:relative  ${
              isSidebarOpen ? "translate-x-0" : "-translate-x-full"
            }  transition-transform duration-100 md:translate-x-0 md:static md:block z-20`}
          >
            <AdminSidebar />
          </div>
        </div>
      )}


      <div className="flex-grow p-6 overflow-auto">
        <Outlet />
      </div>
    </div>




  );
};

export default AdminLayout;
