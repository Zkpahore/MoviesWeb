import React from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchBar = ({ onSearch }) => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between px-4 py-4">
      {/* Logo Section */}
      <h1 className="text-xl lg:text-2xl text-white font-extrabold mb-4 lg:mb-0 lg:pl-20">
        MoviesWeb
      </h1>

      {/* Search Bar */}
      <div className="relative w-full lg:w-3/6 mb-4 lg:mb-0">
        <FaSearch className="absolute top-1/2 transform -translate-y-1/2 left-3 text-gray-500" />
        <input
          type="text"
          placeholder="Search..."
          className="w-full pl-10 pr-4 py-2 bg-gray-200 text-gray-800 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm lg:shadow-md"
          onChange={(e) => onSearch(e.target.value)}
        />
      </div>

      {/* Login Button */}
      <button className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm lg:shadow-md">
        Login
      </button>
    </div>
  );
};

export default SearchBar;
