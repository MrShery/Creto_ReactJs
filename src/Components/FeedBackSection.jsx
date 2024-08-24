import React, { useRef, useState } from "react";
import FeedBackCard from "./FeedBackCard";
import { Autoplay, Controller, Navigation } from "swiper/modules";
// import {Swiper,SwiperSlide} from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper,SwiperSlide } from "swiper/react";
import Heading from "./Heading";
import FeedBgImg from "../assets/asset 32.jpeg"
import BgCross from "../assets/asset 33.svg"

function FeedBackSection() {
  
  const swiperRef=useRef(null)
  const goToNextSlide = () => {
    const swiperInstance = swiperRef.current.swiper;
    swiperInstance.slideNext();
  };

  const goToPrevSlide = () => {
    const swiperInstance = swiperRef.current.swiper;
    swiperInstance.slidePrev();
  };

  
  const [windowWidth,setWindowWidth]=useState(null);
  return (
    <div className="w-full   flex justify-center items-center myMask py-32 mt-20 relative"     style={{
      backgroundImage: `linear-gradient( rgba(25, 35, 48, .699),rgba(25, 35, 48, .61)),url(${FeedBgImg})`,
      backgroundPosition: "center",
      backgroundSize: "cover",
    }}>
      <div className={`" ${windowWidth>=1000?"w-[85vw]":"w-[90vw] "} relative "`}>
      <div className="py-10 text-[43px] font-extrabold text-white">
      <Heading content={"Feedback"}/>
      </div>
    <div className="relative">
    <Swiper ref={swiperRef}
    onResize={()=> setWindowWidth(window.innerWidth)}
        modules={[Navigation, Autoplay, Controller]}
        className=" w-full lg:w-full sm:w-[70vw] md:w-[90vw]  cursor-grabbing"
        loop={true}
        autoplay={{
          delay: 1500,
          reverseDirection: false,
          disableOnInteraction: false,
        }}
        spaceBetween={windowWidth<420?350:50}
        slidesPerView={windowWidth>=1130?3:windowWidth>=768?2:windowWidth<=600?1:1}
        speed={1100}
      >
        <SwiperSlide className="shrink-0  ">
          <FeedBackCard />
        </SwiperSlide>
        <SwiperSlide className="shrink-0  ">
          <FeedBackCard />
        </SwiperSlide>
        <SwiperSlide className="shrink-0  ">
          <FeedBackCard />
        </SwiperSlide>
        <SwiperSlide className="shrink-0  ">
          <FeedBackCard />
        </SwiperSlide>
       
      </Swiper>
      <div onClick={()=> goToPrevSlide()} className="swiper-button-prev top-[50%] -translate-x-8"></div>
      <div onClick={()=> goToNextSlide()} className="swiper-button-next  top-[50%] translate-x-8"></div>
    </div>
      </div>
<img src={BgCross} alt="" className="absolute w-full h-full px-10" />
    </div>
  );
}

export default FeedBackSection;
