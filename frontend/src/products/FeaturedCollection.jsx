import React from "react";
import { Link } from "react-router-dom";
import FeaturesSaBaba from "./FeaturesSaBaba";

const FeaturedCollection = () => {
  return (
    <>
    <section className="py-5 px-4 lg:px-0">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center bg-[#D0e9e6] rounded-3xl">
        <div className="lg:w-1/2 p-8 text-center lg:text-left text-pretty">
          <h2 className="text-lg font-semibold text-gray-700 mb-2 capitalize">
            Soft kiss & Cuddles
          </h2>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            You are my sunshine, my only sunshine, you make me happy.
          </h2>
          <p className="text-lg text-gray-600 mb-6 text-balance">
            Hindi na makalaya dinadalaw mo'ko bawat gabi wala mang nakikita.
            Haplos mo'y ramdam pa rin sa dilim.
          </p>
          <Link
            to="/collections/all"
            className="bg-black text-white px-6 py-3 rounded-lg text-lg hover:bg-gray-800"
          >
            Order Now
          </Link>
        </div>

        <div className="lg:w-1/2 flex flex-row">
          <img
            src="https://now.krispykreme.com.ph/dist/images/kk/strawberry-sprinkles.png"
            alt="donut featured"
            className="w-full h-full border border-gray-300 object-cover lg:rounded-tr-3xl lg:rounded-br-3xl"
          />
        </div>
      </div>
    </section>
    <FeaturesSaBaba />
    </>
  );
};

export default FeaturedCollection;
