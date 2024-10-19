import React, { useState } from 'react';
import { FaHome, FaTv, FaBox, FaCogs, FaPhone, FaBars, FaTimes } from 'react-icons/fa';
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { BiMoviePlay } from "react-icons/bi";
import SearchBar from './SearchBar';

const Menu = ({ onSearch }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
       <div className="px-6 p-6 w-full lg:w-full bg-slate-800 text-center">
          <SearchBar onSearch={onSearch} />
        </div>
      {/* Mobile menu toggle */}
      <div className="lg:hidden md:hidden fixed top-4 left-4 z-50">
        <button onClick={handleToggle} className="text-white text-3xl">
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Sidebar menu */}
      <nav
        className={`fixed top-0 left-0 h-screen w-64 bg-gray-800 text-white py-6 transition-transform transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0 lg:w-20 flex flex-col items-center z-40`}
      >
        {/* Search bar at the top */}
       

        {/* Navigation menu */}
        <ol className="space-y-8 flex-1">
          {/* Icons and labels, with hover effect to show text outside the menu */}
          <li className="group cursor-pointer flex items-center justify-center py-3 hover:bg-gray-700 rounded-md relative">
            <FaHome className="text-2xl lg:text-3xl" />
            <span className="absolute left-full ml-4 px-3 py-2 bg-gray-700 text-white rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Home
            </span>
          </li>
          <li className="group cursor-pointer flex items-center justify-center py-3 hover:bg-gray-700 rounded-md relative">
          <FaTv  className="text-2xl lg:text-3xl" />
            <span className="absolute left-full ml-4 px-3 py-2 bg-gray-700 text-white rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Tv Shows
            </span>
          </li>
          <li className="group cursor-pointer flex items-center justify-center py-3 hover:bg-gray-700 rounded-md relative">
            <FaMoneyBillTrendUp className="text-2xl lg:text-3xl" />
            <span className="absolute left-full ml-4 px-3 py-2 bg-gray-700 text-white rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Trending
            </span>
          </li>
          <li className="group cursor-pointer flex items-center justify-center py-3 hover:bg-gray-700 rounded-md relative">
            <BiMoviePlay className="text-2xl lg:text-3xl" />
            <span className="absolute left-full ml-4 px-3 py-2 bg-gray-700 text-white rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Movies
            </span>
          </li>
          <li className="group cursor-pointer flex items-center justify-center py-3 hover:bg-gray-700 rounded-md relative">
            <FaPhone className="text-2xl lg:text-3xl" />
            <span className="absolute left-full ml-4 px-3 py-2 bg-gray-700 text-white rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Contact Us
            </span>
          </li>
        </ol>
      </nav>

      {/* Overlay when the mobile menu is open */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-30 lg:hidden md:hidden"
          onClick={handleToggle}
        ></div>
      )}
    </div>
  );
};

export default Menu;
