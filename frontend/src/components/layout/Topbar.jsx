import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

const Topbar = () => {
  return (
    <div className="bg-[#FACDD0] text-black ">
      <div className="container mx-auto flex justify-between items-center py-3 px-4">
        <div className="hidden md:flex space-x-4 items-center ">
          <a href="#" className="hover:text-gray-500">
            <FaFacebook className="h-5 w-5" />
          </a>
          <a href="#" className="hover:text-gray-500">
            <FaTiktok className="h-5 w-5" />
          </a>
          <a href="#" className="hover:text-gray-500">
            <AiFillInstagram className="h-5 w-5" />
          </a>
        </div>

        <div className="text-sm text-center font-semibold flex-grow">
          <span>How can I move on when I'm still inlove with you?</span>
        </div>
        <div className="text-sm  md:block hidden">
          <a href="#" className="hover:text-gray-500">
            +6391234567890
          </a>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
