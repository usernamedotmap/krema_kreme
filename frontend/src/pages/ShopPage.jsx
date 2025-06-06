import React, { useEffect, useRef, useState } from "react";
import { IoColorFilter } from "react-icons/io5";
import FilterProducts from "../products/FilterProducts";
import OptionsSort from "./OptionsSort";
import ProductGrid from "../products/ProductGrid";

const ShopPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const sidebarRef = useRef(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleClickOutisde = (e) => {
    if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
      setIsSidebarOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleSidebar);

    return () => {
    document.removeEventListener("mousedown", handleSidebar);
    }
  }, []);

  useEffect(() => {
    setTimeout(() => {
      const allProducts = [
        {
          _id: 1,
          name: "product 1",
          price: 200.0,
          image: [
            {
              url: "https://mgi-deliveryportal.s3.amazonaws.com/Americano.jpg",
              altText: "before",
            },
          ],
        },
        {
          _id: 2,
          name: "product 2",
          price: 200.0,
          image: [
            {
              url: "https://mgi-deliveryportal.s3.amazonaws.com/1418x1063%20MGCC%20KK%20Craving%20Cheesecake_6%20astd.jpg",
              altText: "before",
            },
          ],
        },
        {
          _id: 3,
          name: "product 3",
          price: 200.0,
          image: [
            {
              url: "https://mgi-deliveryportal.s3.amazonaws.com/1418x1063%20MGCC%20KK%20Craving%20Cheesecake_6%20mixed.jpg",
              altText: "before",
            },
          ],
        },
        {
          _id: 4,
          name: "product 4",
          price: 200.0,
          image: [
            {
              url: "https://mgi-deliveryportal.s3.amazonaws.com/group-6-astd.jpg",
              altText: "before",
            },
          ],
        },
        {
          _id: 5,
          name: "product 5",
          price: 200.0,
          image: [
            {
              url: "https://mgi-deliveryportal.s3.amazonaws.com/Americano.jpg",
              altText: "before",
            },
          ],
        },
        {
          _id: 6,
          name: "product 6",
          price: 200.0,
          image: [
            {
              url: "https://mgi-deliveryportal.s3.amazonaws.com/1418x1063%20MGCC%20KK%20Craving%20Cheesecake_6%20astd.jpg",
              altText: "before",
            },
          ],
        },
        {
          _id: 7,
          name: "product 7",
          price: 200.0,
          image: [
            {
              url: "https://mgi-deliveryportal.s3.amazonaws.com/1418x1063%20MGCC%20KK%20Craving%20Cheesecake_6%20mixed.jpg",
              altText: "before",
            },
          ],
        },
        {
          _id: 8,
          name: "product 8",
          price: 200.0,
          image: [
            {
              url: "https://mgi-deliveryportal.s3.amazonaws.com/group-6-astd.jpg",
              altText: "before",
            },
          ],
        },
      ];

      setProducts(allProducts);
      setIsLoading(false);
    }, 1000);
  }, []);

 

  if (isLoading) return <div>Loading...</div>
  return (
    <div className="flex flex-col lg:flex-row">
      <button
        onClick={handleSidebar}
        className="lg:hidden border p-2 flex justify-center items-center"
      >
        <IoColorFilter className="mr-2 size-8" /> Filter
      </button>

      <div
        key={sidebarRef}
        className={`${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } fixed inset-y-0 z-50 left-0 w-1/2 overflow-y-auto bg-white transition-transform duration-300 lg:static lg:translate-x-0`}
      >
        <FilterProducts />
      </div>
      <div className="flex-grow p-4">
        <h2 className="text-2xl uppercase mb-4">All Dawnuts and Beverages</h2>

        {/* mga option like something */}
        <OptionsSort />

        {/* mga product */}

        <ProductGrid products={products} />
      </div>
    </div>
  );
};

export default ShopPage;
