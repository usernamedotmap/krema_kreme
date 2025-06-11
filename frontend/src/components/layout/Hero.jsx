import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
    <section className="relative ">
      <video className="w-full h-[400px] md:h-[600px] lg:h-[750px] object-cover">
        <source src="https://mgi-deliveryportal.s3.ap-southeast-1.amazonaws.com/assets/Glazing - 720p.mp4" />
      </video>

      <div className="absolute inset-0 bg-[#E0D7F5] bg-opacity-70 flex items-center justify-center">
        <div className="text-black text-center p-6">
          {/* probably yung title nalang dito la ako maisip */}
          <h1 className="text-4xl md:text-9xl tracking-tighter uppercase mb-4">
            HUNGER <br /> HALT
          </h1>
          <Link
            to="#"
            className="bg-[#ac7652] text-gray-200 px-6 py-2 rounded-sm text-lg hover:bg-[#E5D5ca] hover:text-gray-700"
          >
            Buy Now
          </Link>
        </div>
      </div>

    </section>
      </>
  );
};

export default Hero;
