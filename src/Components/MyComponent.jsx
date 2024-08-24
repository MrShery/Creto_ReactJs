import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import FindCard from "../Components/FindCard";
import NiceSelect from "../NiceSelect/NiceSelect";
import Heading from "./Heading";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Select, Option } from "@material-tailwind/react";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import BuyButton from "./BuyButton";
const MyComponent = () => {
  const [windowWidth, setWindowWidth] = useState();
  console.log(windowWidth);
  return (
    <div className="w-[85%] overflow-hidden flex flex-col gap-32 sm:-translate-y-24 -translate-y-5  lg:-translate-y-20 bg-white z-40  ">
      <div className="w-full border sm:p-12 flex shadow flex-col gap-5">
        <div className="uppercase text-center sm:text-lg text-[9vw]  md:text-6xl font-semibold text-[#000000c4]  font-[Teko]"><Heading content={"find the bike"}/></div>
        <div className="flex flex-wrap justify-around pb-3 xl:gap-5 items-center  ">
          <div className="">
            <h2>Type</h2>
            <NiceSelect
              id="a-select"
              placeholder="Mountain Bike"
              className=" w-[50vw] sm:w-[20vw] pt-1 font-bold text-gray-600 "
            >
              <option value="OP1">Mountain Bike</option>
              <option value="OP2">Hybrid/Comfort Bike</option>
              <option value="OP3">Cyclocross Bike</option>
              <option value="OP4">BMX/ Trick Bike</option>
              <option value="OP5">Road Bike</option>
              <option value="OP6">Track Bike</option>
            </NiceSelect>
          </div>
         
          <div className="">
            <h2>Wheel Size</h2>
            <NiceSelect
              id="b-select"
              placeholder="20"
              className=" w-[50vw] sm:w-[20vw] pt-1 font-bold text-gray-600 "
            >
               <option value="OP1">20</option>
              <option value="OP2">24</option>
              <option value="OP3">26</option>
              <option value="OP4">27</option>
              <option value="OP5">27.5</option>
              <option value="OP6">28</option>
            </NiceSelect>
          </div>
         
          <div className="">
            <h2>Brand</h2>
            <NiceSelect
              id="c-select"
              placeholder="Pinarello"
              className=" w-[50vw] sm:w-[20vw] pt-1 font-bold text-gray-600 "
            >
               <option value="OP1">Pinarello</option>
              <option value="OP2">Eddy Merckx</option>
              <option value="OP3">Specialized</option>
              <option value="OP4">Giant</option>
              <option value="OP5">Trek</option>
              <option value="OP6">BMC</option>
            </NiceSelect>
          </div>
         
         <div className="mt-6"><BuyButton content={"Search"}/></div>
        </div>
      </div>
      <div>
        <Swiper
          onResize={(e) => setWindowWidth(window.innerWidth)}
          slidesPerView={`${
            windowWidth >= 1024
              ? 3
              : windowWidth >= 768
              ? 2
              : windowWidth >= 550
              ? 2
              : 1
          }`}
          spaceBetween={windowWidth >= 900 ? -50 : windowWidth >= 768 ? 10 : 10}
          loop={true}
          autoplay={{
            delay: 3500,
            reverseDirection: false,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Pagination, Autoplay, Navigation]}
          className={`${
            windowWidth <= 600 && " w-full "
          } " mySwiper overflow-visible  py-10    " `}
        >
          <SwiperSlide className={`${windowWidth >= 768 ? " ms-3" : " ms-1"}`}>
            <FindCard />
          </SwiperSlide>
          <SwiperSlide className={`${windowWidth >= 768 ? " ms-3" : " ms-1"}`}>
            <FindCard />
          </SwiperSlide>
          <SwiperSlide className={`${windowWidth >= 768 ? " ms-3" : " ms-1"}`}>
            <FindCard />
          </SwiperSlide>
          <SwiperSlide className={`${windowWidth >= 768 ? " ms-3" : " ms-1"}`}>
            <FindCard />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};
export default MyComponent;
