import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineFacebook } from "react-icons/md";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineTikTok } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 py-12">
      <div className="container  justify-between mx-auto grid sm:grid-cols-1 md:grid-cols-3 gap-8 px-4 lg:px-0">
        {/* parang letter to */}
        <div className="">
          <h3 className="text-lg text-gray-800 mb-4">Reinder Letter</h3>
          <p className="text-gray-500 mb-4 text-wrap">
            Krispy Kreme and other Max's Group Inc.-affiliated companies own the
            trademarks, logos and service marks displayed on this site and users
            are prohibited from using the same without written permission of
            Max's Group Inc. or such other parties. The materials on this site
            are protected by copyright and no part of such materials may be
            modified, reproduced, stored in a retrieval system, transmitted (in
            any form or by any means), copied, distributed, used for creating
            derivative works or used in any other way for commercial or public
            purposes without the Max's Group Inc.'s prior written consent. Be
            first to get some doughnuts like IDGAF
          </p>
          <p className="font-medium text-sm text-gray-700 mb-6">
            Sign up to try our best service.
          </p>

          <form className="flex ">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-3 w-full text-sm border-t border-l border-b  rounded-l-md border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-500"
              required
            />
            <button
              type="submit"
              className=" bg-black text-white px-6 py-3 text-sm rounded-r-md hover:bg-gray-800 transition-all"
            >
              Feedback
            </button>
          </form>
        </div>

        {/* mga sponsoer hehe */}
        <div className=" ">
          <h3 className="text-lg text-gray-900 mb-4">Products</h3>
          <ul className=" text-gray-500 grid grid-cols-2 gap-5">
            <li>
              <Link
                className="hover:text-gray-500 font-bold transition-colors"
                to="https://delivery.yellowcabpizza.com/"
              >
                Assorted
                <img
                  src="https://mgi-deliveryportal.s3.amazonaws.com/6-reg-astd.jpg"
                  className="h-24 w-24 object-cover   "
                />
                <img
                  src="https://mgi-deliveryportal.s3.amazonaws.com/6-prem-astd.jpg"
                  className="h-24 w-24 object-cover   "
                />
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-gray-500 font-bold transition-colors"
                to="https://delivery.maxschicken.com/"
              >
                Original
                <img
                  src="https://mgi-deliveryportal.s3.amazonaws.com/6-og.jpg"
                  className="h-24 w-24 object-cover   "
                />
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-gray-500 font-bold transition-colors"
                to="https://delivery.pancakehouse.com.ph/"
              >
                Drinks
                <img
                  src="https://mgi-deliveryportal.s3.amazonaws.com/Iced%20Latte.jpg"
                  className="h-24 w-24 object-cover   "
                />
                <img
                  src="https://mgi-deliveryportal.s3.amazonaws.com/1418x1063px-MGCC-KK-Lemonade-Iced-Tea.jpg"
                  className="h-24 w-24 object-cover "
                />
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-gray-500 font-bold transition-colors"
                to="https://delivery.dencios.com.ph/"
              >
                Combo af
                <img
                  src="https://mgi-deliveryportal.s3.amazonaws.com/24-mixed.jpg"
                  className="h-24 w-24 object-contain   "
                />
                <img
                  src="https://mgi-deliveryportal.s3.amazonaws.com/group-6-astd.jpg"
                  className="h-24 w-24 object-contain   "
                />
              </Link>
            </li>
          </ul>
        </div>

        {/* numbers */}
        <div className="">
          <h3 className="text-lg text-gray-900 mb-4">Contacts</h3>
          <ul className="grid grid-cols-2 gap-8  text-gray-500 list-none text-balance">
            <li>
              <h2 className="text-rose-500 font-semibold text-lg">
                Metro-Manila
              </h2>
              <h4>(888-79000)</h4>
            </li>
            <li>
              <h2 className="text-rose-500 font-semibold text-lg">Cavite</h2>
              <p>(046) 416-9999</p>
            </li>
            <li>
              <h2 className="text-lg font-semibold text-rose-500">Squatter</h2>
              <p>(049) 502-9999</p>
            </li>
            <li>
              <h2 className="text-lg font-semibold text-rose-500">Alfasonus</h2>
              <p>(049) 502-9999</p>
            </li>
            <li>
              <h2 className="text-lg font-semibold text-rose-500">Alfasonus</h2>
              <p>(049) 502-9999</p>
            </li>
            <li>
              <h2 className="text-lg font-semibold text-rose-500">Alfasonus</h2>
              <p>(049) 502-9999</p>
            </li>
            <li>
              <h2 className="text-lg font-semibold text-rose-500">Alfasonus</h2>
              <p>(049) 502-9999</p>
            </li>
            <li>
              <h2 className="text-lg font-semibold text-rose-500">Alfasonus</h2>
              <p>(049) 502-9999</p>
            </li>
          </ul>
        </div>
        {/* follow section */}

        <div className="col-span-1 overflow-hidden">
          <h3 className="text-lg text-gray-800 mb-4">Only Fans</h3>
          <div className="flex flex-row space-x-3 mb-6">
            <a href="" target="_blank" rel="noopener noreferrer">
              <MdOutlineFacebook className="w-8 h-8" />
            </a>
            <a href="" target="_blank" rel="noopener noreferrer">
              <AiOutlineInstagram className="w-8 h-8" />
            </a>
            <a href="" target="_blank" rel="noopener noreferrer">
              <AiOutlineTikTok className="w-8 h-8" />
            </a>
            <a href="" target="_blank" rel="noopener noreferrer">
              <FaXTwitter className="w-8 h-8" />
            </a>
          </div>
          <p className="text-gray-800 font-bold">Call her</p>
          <p className="inline-block mr-2 text-gray-600">288879000</p>
          <p className=" mr-2 mb-4 font-semibold text-lg">Location:</p>

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3859.6042062538454!2d121.0621111!3d14.6783889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTTCsDQwJzQyLjIiTiAxMjHCsDAzJzQzLjYiRQ!5e0!3m2!1sen!2sph!4v1748918287815!5m2!1sen!2sph"
            width="350"
            height="350"
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* mga brands */}

        <div className="w-full md:col-span-3 lg:col-span-4">
          <h3 className="text-2xl text-gray-800 mb-4 text-center">
            Other brands
          </h3>
          <ul className=" text-gray-700 flex flex-row gap-5 flex-wrap items-center justify-center ">
            <li className="w-28 flex justify-center">
              <Link
                className="hover:text-gray-500 font-bold transition-colors"
                to="https://delivery.maxschicken.com/"
              >
                <img
                  src="https://mgi-deliveryportal.s3.amazonaws.com/assets/maxs-nav.png"
                  className="w-24 h-24 object-contain rounded-full ring-1 ring-gray-500 p-4 "
                />
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-gray-500 font-bold transition-colors"
                to="https://delivery.pancakehouse.com.ph/"
              >
                <img
                  src="https://mgi-deliveryportal.s3.amazonaws.com/assets/logo-ph.png"
                  className="w-24 h-24 object-contain rounded-full ring-1 ring-gray-500 p-4 "
                />
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-gray-500 font-bold transition-colors"
                to="https://delivery.dencios.com.ph/"
              >
                <img
                  src="https://mgi-deliveryportal.s3.amazonaws.com/assets/Dencios.png"
                  className="w-24 h-24 object-contain rounded-full ring-1 ring-gray-500 p-4 "
                />
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-gray-500 font-bold transition-colors"
                to="https://delivery.dencios.com.ph/"
              >
                <img
                  src="https://mgi-deliveryportal.s3.amazonaws.com/assets/Dencios.png"
                  className="w-24 h-24 object-contain rounded-full ring-1 ring-gray-500 p-4 "
                />
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-gray-500 font-bold transition-colors"
                to="https://delivery.dencios.com.ph/"
              >
                <img
                  src="https://mgi-deliveryportal.s3.amazonaws.com/assets/Dencios.png"
                  className="w-24 h-24 object-contain rounded-full ring-1 ring-gray-500 p-4 "
                />
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-gray-500 font-bold transition-colors"
                to="https://delivery.dencios.com.ph/"
              >
                <img
                  src="https://mgi-deliveryportal.s3.amazonaws.com/assets/Dencios.png"
                  className="w-24 h-24 object-contain rounded-full ring-1 ring-gray-500 p-4 "
                />
              </Link>
            </li>
            <li>
              <Link
                className="hover:text-gray-500 font-bold transition-colors"
                to="https://delivery.dencios.com.ph/"
              >
                <img
                  src="https://mgi-deliveryportal.s3.amazonaws.com/assets/Dencios.png"
                  className="w-24 h-24 object-contain rounded-full ring-1 ring-gray-500 p-4 "
                />
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto mt-12 px-4 lg:px-0 border-t border-gray-300 pt-6">
        <p className="text-sm text-gray-500 text-center tracking-tighter">
          @Krema Kreme, All Right Reversed.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
