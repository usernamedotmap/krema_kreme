import React from "react";
import { Link } from "react-router-dom";

const CollectionSection = () => {
  return (
    <section className="py-16 px-4 lg:px-0 ">
      {/* bg-[#fdf0d0]*/}
      <div className="container mx-auto flex flex-col md:flex-row gap-8">
        {/* assorted */}
        <div className="relative h-[500px] flex-1 border  ">
          <img
            src="https://mgi-deliveryportal.s3.amazonaws.com/6-reg-astd.jpg"
            alt="assorted"
            className="w-full h-[500px] object-cover shadow-2xl"
          />
          <div className="absolute bottom-8 left-8 bg-black bg-opacity-90 p-4 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-200 mb-3">
              Assorted Doughnuts
            </h2>
            <Link
              to="/collections/all?flavor=Assorted"
              className="text-gray-200 border p-2 rounded-lg hover:bg-stone-700"
            >
              Order Now 🙏
            </Link>
          </div>
        </div>

        {/* original */}
        <div className="relative flex-1 border h-[500px] ">
          <img
            src="https://mgi-deliveryportal.s3.amazonaws.com/12-og.jpg"
            alt="original"
            className="w-full h-[500px] object-cover shadow-2xl"
          />
          <div className="absolute bottom-8 left-8 bg-black bg-opacity-90 p-4 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-200 mb-3">
              Original Doughnuts
            </h2>
            <Link
              to="/collections/all?flavor=Original"
              className="text-gray-200 border p-2 rounded-lg hover:bg-stone-700 "
            >
              Order Now 🙏
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollectionSection;
