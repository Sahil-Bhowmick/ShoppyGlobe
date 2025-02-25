import React from "react";
import { cartImg } from "../assets/index";
import { FaSearch } from "react-icons/fa";

const Header = () => {
  return (
    <div
      className="w-full bg-white border-b-[1px] border-b-gray-800  
   font-titleFont sticky top-0 z-50"
    >
      <div className="max-w-screen-xl h-20 mx-auto flex items-center justify-between px-4">
        {/* Logo */}
        <div>
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 hover:text-gray-600 cursor-pointer">
            ShoppyGlobe
          </p>
        </div>

        {/* Search Bar (Responsive) */}
        <div className="flex-1 flex justify-center px-4">
          <div className="relative w-full max-w-lg">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full h-10 pl-4 pr-10 rounded-full border border-gray-300 focus:outline-none focus:border-orange-600 transition duration-300"
            />
            <FaSearch className="absolute text-2xl right-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer hover:text-gray-700" />
          </div>
        </div>
        {/* Navigation Menu and Cart (Right Side) */}
        <div className="flex items-center gap-8">
          <ul className="hidden md:flex items-center gap-10">
            <li className="text-base font-bold hover:text-orange-600 duration-300 cursor-pointer">
              Home
            </li>
            <li className="text-base font-bold hover:text-orange-600 duration-300 cursor-pointer">
              Pages
            </li>
            <li className="text-base font-bold hover:text-orange-600 duration-300 cursor-pointer">
              Shop
            </li>
            <li className="text-base font-bold hover:text-orange-600 duration-300 cursor-pointer">
              About
            </li>
          </ul>
          <div className="relative">
            <img className="w-10" src={cartImg} alt="cart-image" />
            <span className="absolute top-[-4px] right-[-4px] w-5 h-5 text-xs flex items-center justify-center font-semibold bg-red-500 text-white rounded-full">
              20
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
