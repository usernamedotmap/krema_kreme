import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { useEffect, useState } from "react";

const Topbar = () => {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(new Date());
    }, 1000); // Update every second
    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  const formattedDateTime = new Intl.DateTimeFormat("en-PH", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  }).format(dateTime);
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
          <span>{formattedDateTime}</span>
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
