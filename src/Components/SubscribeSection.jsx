import React from "react";
import CrossImg from "../assets/asset 31.svg";
import SubBgImg from "../assets/asset 30.jpeg";
import BikeImg from "../assets/subscribe-img.png";
import Heading from "./Heading";
import BuyButton from "./BuyButton";
const SubscribeSecion = () => {
  return (
    <div
      className=" w-full  bg-red-300 relative pt-16 pb-3  flex  justify-center items-center overflow-hidden mt-40 myMask myMaskReverse "
      style={{
        backgroundImage: `linear-gradient( rgba(25, 35, 48, .699),rgba(25, 35, 48, .61)),url(${SubBgImg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className=" lg:translate-x-28 md:translate-x-28 sm:translate-x-28 flex flex-col gap-3 z-10 pb-20 mt-5">
      <div className="px-5 sm:px-0 w-fit">
      <div className="sm:text-[43px] text-3xl font-[Teko] font-extrabold text-white">
          {" "}
          <Heading content={"Subscribe"} />
        </div>
        <p className="sm:pe-36 RobotoFont  text-white  ">
          Subscribe us and you won't miss the new arrivals, as well as discounts
          and sales.
        </p>
      </div>
        <div className="flex sm:gap-4 sm:justify-start justify-center  items-center mt-2  ">
          <input
            type="text"
            placeholder="E-mail"
            className="hover:border-yellow-300 text-white RobotoFont outline-none border-2 border-gray-300 bg-transparent px-5 h-[50px] sm:w-[320px] "
          />
          <BuyButton content={"SEND"} className="w-20 " />
        </div>
      </div>
      <img
        src={CrossImg}
        alt=""
        className=" sm:block hidden absolute scale-[1.4] -translate-x-10 "
      />
      <img
        src={BikeImg}
        alt=""
        className="z-10 lg:w-fit md:w-fit sm:w-0 w-0 translate-y-4"
      />
    </div>
  );
};
export default SubscribeSecion;
