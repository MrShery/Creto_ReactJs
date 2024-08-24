import React from "react";
import Heading from "./Heading";
import AdvanBgImg2 from "../assets/asset 29.jpeg";
import AdvanImg from "../assets/advantages-1.svg";
import AdvanImg2 from "../assets/advantages-2.svg";
import AdvanImg3 from "../assets/advantages-3.svg";
import AdvanImg4 from "../assets/advantages-4.svg";
import AdvanAfter2 from "../assets/triangle-asymmetrical-divider-inverse.png";

function Advantage() {
  return (
    <div
      className="w-full h-[130vh] sm:h-[80vh] relative flex flex-col gap-20 justify-center items-center myMask  "
      style={{
        backgroundImage: `linear-gradient( rgba(25, 35, 48, .699),rgba(25, 35, 48, .61)),url(${AdvanBgImg2})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="md:text-[50px] text-xl sm:text-4xl text-white font-extrabold">
        <Heading content={"Our Advantage"} />
      </div>
      <div className="flex flex-wrap lg:gap-20 md:pb-6 justify-center ">
        <div className="flex flex-wrap justify-center">
          <div className=" flex gap-5 justify-center ">
            <div className="flex flex-col gap-2 w-[200px] text-center justify-center items-center ">
              <img src={AdvanImg} alt="" className="w-[60px] h-[60px]" />
              <h2 className="selection:bg-yellow-400 font-bold text-white font-[Teko]  text-2xl p-1  pt-3">
                Free shipping from $500
              </h2>
            </div>
          </div>
          <div className=" flex gap-5 justify-center ">
            <div className="flex flex-col gap-2 w-[200px] text-center justify-center items-center ">
              <img src={AdvanImg2} alt="" className="w-[60px] h-[60px]" />
              <h2 className="selection:bg-yellow-400 font-bold text-white font-[Teko]  text-2xl p-1  pt-3">
                Warranty service for 3 months
              </h2>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-center">
          <div className=" flex gap-5 justify-center  ">
            <div className="flex flex-col gap-2 w-[200px] text-center justify-center items-center ">
              <img src={AdvanImg3} alt="" className="w-[60px] h-[60px]" />
              <h2 className="selection:bg-yellow-400 font-bold text-white font-[Teko]  text-2xl p-1  pt-3">
                Exchange and return within 14 days
              </h2>
            </div>
          </div>
          <div className=" flex gap-5 justify-center "></div>
          <div className="flex flex-col gap-2 w-[200px] text-center justify-center items-center ">
            <img src={AdvanImg4} alt="" className="w-[60px] h-[60px]" />
            <h2 className="selection:bg-yellow-400 font-bold text-white font-[Teko]  text-2xl p-1  pt-3">
              Discounts for customers
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Advantage;
