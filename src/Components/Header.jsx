import React from "react";
import { FaHeart, FaPhone, FaShoppingCart, FaUser } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import LogoSvg from "../assets/asset 0.svg";
 const  Header = () => {
    return (
      <header className="w-[88%] px-2 py-4 border-b sm:flex justify-between ">
        <img src={LogoSvg} alt="" className="w-[20vw] sm:hidden block  mx-auto" />
        <div className="hidden sm:flex gap-7 ">
          <div className="flex items-center gap-2">
            <FaPhone className="text-yellow-300 text-[20px]" />
            <h4 className="hover:text-yellow-300 transition-all cursor-pointer text-[16px] font-medium ">
              +9123 456 87
            </h4>
          </div>
          <div className="flex items-center gap-2">
            <IoMdMail className="text-yellow-300 text-[20px]" />
            <h4 className="hover:text-yellow-300 transition-all cursor-pointer text-[17px]  font-[Roboto Condensed]">
              creto@gmail.com
            </h4>
          </div>
        </div>
        <div className="flex hidden sm:flex gap-4 items-center">
          <FaHeart className="text-gray-400 hover:text-yellow-300 transition-all cursor-pointer" />
          <FaUser className="text-gray-400  hover:text-yellow-300 transition-all cursor-pointer border-x text-[25px] px-1 py-0" />
          <FaShoppingCart className="text-gray-400 hover:text-yellow-300 transition-all cursor-pointer" />
        </div>
      </header>
    );
  };
  export default Header;