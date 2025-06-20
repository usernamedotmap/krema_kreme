import React, { useEffect, useMemo, useRef, useState } from "react";
import { IoColorFilter } from "react-icons/io5";
import FilterProducts from "../products/FilterProducts";
import OptionsSort from "./OptionsSort";
import ProductGrid from "../products/ProductGrid";
import { useParams, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductByFilters } from "../redux/slices/productSlice";

const ShopPage = () => {
  const { collection } = useParams();
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const queryParams = Object.fromEntries([...searchParams]);

  const { products, loading, error } = useSelector((state) => state.products);
  const sidebarRef = useRef(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

const memoizedQuery = useMemo(() => ({collection, ...queryParams}), [collection, searchParams])

  useEffect(() => {
   dispatch(fetchProductByFilters(memoizedQuery));

  }, [dispatch, memoizedQuery ]);

  const handleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  useEffect(() => {
    const handleClickOutisde = (e) => {
      if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
        setIsSidebarOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutisde);

    return () => {
      document.removeEventListener("mousedown", handleClickOutisde);
    };
  }, []);

  return (
    <div className="flex flex-col lg:flex-row ">
      <button
        onClick={handleSidebar}
        className="lg:hidden border p-2 flex justify-center items-center"
      >
        <IoColorFilter className="mr-2 size-8" /> Filter
      </button>

      <div
        key={sidebarRef}
        className={`${
          isSidebarOpen ?  "translate-x-0" : "-translate-x-full"
        } fixed inset-y-0 z-50 left-0  sm:w-64 md:w-72 lg:w-80"
 overflow-y-auto bg-[#fceef0] transition-transform duration-300 lg:static lg:translate-x-0`}
      >
        <FilterProducts />
      </div>
      <div className="flex-grow p-4">
        <h2 className="text-2xl uppercase mb-4">All Dawnuts and Beverages</h2>

        {/* mga option like something */}
        <OptionsSort />

        {/* mga product */}

        <ProductGrid products={products} loading={loading} error={error} />
      </div>
    </div>
  );
};

export default ShopPage;
