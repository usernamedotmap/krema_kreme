import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoCloseCircleOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  fetchProductByFilters,
  setFilters,
} from "../../redux/slices/productSlice";

const Searchbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSearch = () => {
    setIsOpen(!isOpen);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setFilters({ search: searchTerm }));
    dispatch(fetchProductByFilters({ search: searchTerm }));
    navigate(`/collections/all?search=${searchTerm}`);
    setIsOpen(false);
  };

  return (
    <div
      className={`flex items-center justify-center w-full transition-all duration-300 ${
        isOpen ? "absolute top-0 right-0 w-full h-24 z-50" : "w-auto "
      }`}
    >
      {isOpen ? (
        <form
          onSubmit={handleSubmit}
          className="relative flex items-center justify-center w-full bg-[#d0e3f2] h-32 z-50"
        >
          <div className="relative w-1/2">
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-gray-100 px-4 py-2 pl-2 pr-12 rounded-lg focus:outline-none w-full placeholder:text-gray-500"
            />
            <button
              type="submit"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-800"
            >
              <CiSearch className="size-6 " />
            </button>
          </div>
          <button>
            <IoCloseCircleOutline 
            onClick={handleSearch}
              className="size-7 absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-800"
            />
          </button>
        </form>
      ) : (
        <button onClick={handleSearch}>
          <CiSearch className="size-6" />
        </button>
      )}
    </div>
  );
};

export default Searchbar;
