import React from "react";
import OrderPage from "./OrderPage";

const Profile = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow container mx-auto p-4 md:p-6">
        <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0">
          {/* dito yung profile picture na parang ... */}
          <div className="w-full md:w-1/3 lg:w-1/4 shadow-md rounded-lg p-6">
            <h1 className="text-2xl md:text-3xl font-bold mb-4 ">Admin</h1>
            <p className="text-lg text-gray-600 mb-4">testlangmuna@test.com</p>
            <button className="w-full bg-red-500 rounded text-white py-2 px-4 hover:bg-red-600">
              Logout
            </button>
          </div>

          <div className="w-full md:w-2/3 lg:3/4">
            <OrderPage />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
