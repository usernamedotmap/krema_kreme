import React from "react";
import { useSearchParams } from "react-router-dom";

const OptionsSort = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  
    const handleSortChange = (e) => {
      const sortBy = e.target.value;
      searchParams.set("sortBy", sortBy);
      setSearchParams(searchParams)

    }
  return (
    <div className="mb-4 flex items-center justify-end">

      <select id="sort" value={searchParams.get("sortBy"  )|| ""} onChange={handleSortChange} className="border p-2 rounded-mg focus:outline-none">
        <option value="">Default</option>
        <option value="priceLowToHigh">Price: Low to High</option>
        <option value="priceHighToLow">Price: High to Low</option>
        <option value="popular">Popular</option>
      </select>
    </div>
  );
};

export default OptionsSort;
