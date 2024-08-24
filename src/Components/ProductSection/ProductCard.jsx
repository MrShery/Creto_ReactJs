import React from "react";
import { HiRefresh } from "react-icons/hi";
import { IoIosHeart } from "react-icons/io";
const ProductCard = ({ imgSrc, topSale, discount }) => {
  return (
    <div className="lg:w-[270px] md:w-[248px] sm:w-[248px] w-[100vw]  sm:h-[600px] h-[600px] lg:h-[470px] md:h-[470px] md:overflow-hidden md:hover:overflow-visible lg:overflow-hidden lg:hover:overflow-visible bg-white group shadow-lg shrink-0">
      <div className="w-full flex justify-between items-center  h-[46px] ">
        {topSale ||
          (discount && (
            <div
              style={{
                background: `${topSale ? "#ffd910" : "#f44336"} padding-box`,
              }}
              class={`${
                topSale ? "text-white" : "text-white"
              } " ribbon font-bold p-1 px-6   uppercase RobotoFont "`}
            >
              {topSale ? "top sale" : discount}
            </div>
          ))}{" "}
        <div className=" ms-auto flex gap-3 items-center me-2">
          <HiRefresh className="hover:text-yellow-400 text-lg text-[#9ca4ab]  transition cursor-pointer" />
          <IoIosHeart className="hover:text-yellow-400 text-lg text-[#9ca4ab] transition cursor-pointer" />
        </div>
      </div>
      <div className="h-[230px] sm:ms-2 md:ms-0 ms-16 p-3  ">
        <img src={imgSrc} alt="Image Loading" className=" sm:w-full h-full" />
      </div>
      <div className="w-full h-[167px] px-10 relative  ">
        <h2 className="font-extrabold text-xl text-[#ffd910]">$1.699</h2>
        <h3 className="font-bold text-lg RobotoFont  ">
          Granite Peak 24" <br />
          Girls Mountain Bike
        </h3>
        <button className="buyButton w-fit mt-8  px-7 py-3"> Buy Now</button>
        <div className=" lg:absolute md:absolute lg:w-[270px] md:w-[248px] sm:w-[248px] shadow-lg md:-bottom-60  w-[348px]  bg-white -bottom-6 z-20   lg:-bottom-60 lg:opacity-0 -translate-x-10  px-10 h-0 group-hover:h-fit lg:group-hover:opacity-100  group-hover:-bottom-36  transition  ">
          <h5>Frame Size: 17</h5>
          <h5>Class: City</h5>
          <h5>Number of Speeds: 7</h5>
          <h5>Type: Rigid</h5>
          <h5>Country Registration: USA</h5>
        </div>
      </div>
    </div>
  );
};
export default ProductCard;
