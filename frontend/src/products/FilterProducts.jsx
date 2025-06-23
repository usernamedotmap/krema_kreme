import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import debounce from 'lodash.debounce';


const FilterProducts = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const [filters, setFilters] = useState({
    category: "",
    minPrice: 0,
    maxPrice: 1000,
  });
  const [priceRange, setPriceRange] = useState([0, 1000]);



  useEffect(() => {
    const paramsObj = Object.fromEntries(searchParams);

    setFilters({
      category: paramsObj.category || "",
      minPrice: Number(paramsObj.minPrice) || 0,
      maxPrice: Number(paramsObj.minPrice) || 1000,
    });
    setPriceRange([0, paramsObj.maxPrice || 1000]);
  }, [searchParams]);

 

  const updateURLParams = (newFilters) => {
    const params = new URLSearchParams();
    Object.keys(newFilters).forEach((key) => {
      if (Array.isArray(newFilters[key]) && newFilters[key].length > 0) {
        params.append(key, newFilters[key].join(","));
      } else if (newFilters[key]) {
        params.append(key, newFilters[key]);
      }
    });
    setSearchParams(params);
    navigate(`?${params.toString()}`);
  };

const debouncUpdateURL =  debounce(updateURLParams, 500);
  const handlePriceChange = (e) => {
    const newPrice = e.target.value;
    setPriceRange([0, newPrice])
    const newFilters ={...filters, minPrice: 0, maxPrice: newPrice};
    setFilters(newFilters);
    debouncUpdateURL(newFilters);
  }

  return (
    <div className="p-4 bg-[#fceef0] mr-10 ">
      <h3 className="text-xl font-medium text-gray-800 mb-4">Filter</h3>

      

      <div className="mb-8">
        <label htmlFor="" className="block text-gray-600 font-medium mb-2">
          Price Range
        </label>
        <input
          type="range"
          name="priceRange"
          value={priceRange[1]}
          onChange={handlePriceChange}
          min={0}
          max={1000}
          className="w-full max-w-full   h-2 bg-[#D0E3F2] rounded-lg appearance-none cursor-pointer"
        />
        <div className="flex justify-between text-gray-600 mt-2">
          <span> &#8369;0</span>
          <span> &#8369; {priceRange[1]}</span>
        </div>
      </div>
    </div>
  );
};

export default FilterProducts;
