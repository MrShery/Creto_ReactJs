import React from "react";
import { useState, useRef, useEffect } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { motion, AnimatePresence, spring, delay } from "framer-motion";
// import swiper
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import Images
import SliderImg1 from "../assets/asset 2.png";
import SliderImg2 from "../assets/asset 3.png";
import SliderImg3 from "../assets/asset 4.png";
import SlideCross1 from "../assets/asset 25.svg";
import SlideCross2 from "../assets/asset 26.svg";
import SlideCross3 from "../assets/asset 27.svg";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  Controller,
} from "swiper/modules";

export const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [animationKey, setAnimationKey] = useState(Math.random());
  const [showTitle, setShowTitle] = useState(true);
  const [showTitle2, setShowTitle2] = useState(false);

  const swiperRef = useRef(null);
  const images = [
    { src: SliderImg3, title: "REIMAGINE GROWTH 3." },
    { src: SliderImg1, title: "REIMAGINE GROWTH 1." },
    { src: SliderImg3, title: "REIMAGINE GROWTH 4." },
    { src: SliderImg2, title: "REIMAGINE GROWTH 2." },
    { src: SliderImg3, title: "REIMAGINE GROWTH 4." },
  ];

  const updateCustomPagination = (swiper) => {
    setCurrentSlide(swiper.realIndex);
  };
  const goToNextSlide = () => {
    const swiperInstance = swiperRef.current.swiper;
    swiperInstance.slideNext();
  };

  const goToPrevSlide = () => {
    const swiperInstance = swiperRef.current.swiper;
    swiperInstance.slidePrev();
  };

  useEffect(() => {
    const swiperInstance = swiperRef.current.swiper;
    swiperInstance.on("slideChange", () =>
      updateCustomPagination(swiperInstance)
    );
  }, []);

  return (
    <div className="w-full px-4 md:py-10 flex justify-between items-center overflow-hidden">
      <div className="flex flex-col-reverse sm:hidden hidden lg:flex md:flex xl:flex 2xl:flex  items-center -translate-y-16 gap-3">
        <div>
          <FaChevronDown
            className="custom-button-next text-gray-400 hover:text-yellow-400 transition cursor-pointer"
            onClick={goToPrevSlide}
          />
        </div>
        {images.map((elem, index) => (
          <h6
            onClick={() => swiperRef.current.swiper.slideToLoop(index)}
            className={`${
              currentSlide === index
                ? "scale-[1.5] text-[#070707] font-bold"
                : "scale-100 text-[#42414149] hover:text-[#1b1a1acb]"
            }  cursor-pointer   relative scDotTransition text-center text-lg `}
          >
            0{-(index - 5)}
            <span
              className={`${
                currentSlide == index ? "w-4" : "w-0"
              } sliderLineTransition   h-[2px] absolute left-[120%] bottom-[45%] bg-yellow-400 `}
            ></span>
          </h6>
        ))}

        <div>
          <FaChevronUp
            className="custom-button-next text-gray-400 hover:text-yellow-400 transition cursor-pointer"
            onClick={goToNextSlide}
          />
        </div>
      </div>
      <div className=" relative  overflow-hidden flex flex-col ">
        <div className="  pt-3  flex flex-col items-center h-60 lg:h-60 md:h-60 sm:h-52 translate-x-5 sm:translate-x-10 sm:px-10 text-center overflow-hidden ">
          <div className=" flex flex-col  items-center absolute  md:px-10 text-center overflow-hidden ">
            <AnimatePresence>
              {showTitle && (
                <>
                  <div className="overflow-hidden pb-2 sm:pb-5 w-fit">
                    <motion.h1
                      initial={{ opacity: 0, y: 300 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8 }}
                      exit={{
                        y: 200,
                        opacity: 0,
                        transition: { delay: 0.2, duration: 0.6 },
                      }} // Delayed exit for reverse order
                      className="text-[5.8vw] font-[Teko] text-[#192330] sm:pt-0 pt-3 font-semibold leading-[5vw] "
                    >
                      BEST BIKES FOR YOU
                    </motion.h1>
                  </div>
                  <div className="overflow-hidden w-fit h-fit]">
                    <motion.p
                      initial={{ opacity: 0, y: 300 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1, duration: 0.6 }}
                      exit={{
                        y: 200,
                        opacity: 0,
                        transition: { delay: 0.2, duration: 0.4 },
                      }} // Exit sooner than heading
                      className="sm:text-sm md:text-lg text-[#535b65] leading-5 font-[Roboto Condensed] w-[70vw] sm:w-[60vw] md:w-[60vw] lg:w-[33vw] "
                    >
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Labore consectetur sint iure id expedita saepe.
                    </motion.p>
                  </div>

                  <motion.button
                    initial={{ opacity: 0, y: 300 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.4 }}
                    exit={{
                      y: 200,
                      opacity: 0,
                      transition: { delay: 0, duration: 0.3 },
                    }}
                    className="buyButton w-fit mt-8  px-7 py-3"
                  >
                    Buy Now
                  </motion.button>
                </>
              )}
            </AnimatePresence>
          </div>
          <div className=" flex flex-col items-center absolute   md:px-10 text-center overflow-hidden ">
            <AnimatePresence>
              {showTitle2 && (
                <>
                  <div className="overflow-hidden pb-2 sm:pb-5 h-fit w-fit mt-2 sm:mt-0">
                    <motion.h1
                      initial={{ opacity: 0, y: 300 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8 }}
                      exit={{
                        y: 200,
                        opacity: 0,
                        transition: { delay: 0.2, duration: 0.6 },
                      }} // Delayed exit for reverse order
                      className="text-[5.8vw] font-[Teko] text-[#192330] sm:pt-0 pt-3 font-semibold leading-[5vw] "
                    >
                      BEST BIKES FOR YOU
                    </motion.h1>
                  </div>
                  <div className="overflow-hidden w-fit h-fit]">
                    <motion.p
                      initial={{ opacity: 0, y: 300 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1, duration: 0.6 }}
                      exit={{
                        y: 200,
                        opacity: 0,
                        transition: { delay: 0.2, duration: 0.4 },
                      }} // Exit sooner than heading
                      className="sm:text-sm md:text-lg text-[#535b65] leading-5 font-[Roboto Condensed]  w-[70vw] sm:w-[60vw] md:w-[60vw] lg:w-[33vw]"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Labore consectetur sint iure id expedita saepe.
                    </motion.p>
                  </div>

                  <motion.button
                    initial={{ opacity: 0, y: 300 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.4 }}
                    exit={{
                      y: 200,
                      opacity: 0,
                      transition: { delay: 0, duration: 0.3 },
                    }}
                    className="buyButton w-fit px-7 py-3 mt-8"
                  >
                    Buy Now
                  </motion.button>
                </>
              )}
            </AnimatePresence>
          </div>
        </div>
        <AnimatePresence>
          {(currentSlide == 1 || currentSlide == 4) && (
            <motion.img key={animationKey}
              src={SlideCross1}
              alt="#"
              initial={{ opacity: 0, scale: 0, y: 300 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              exit={{
                opacity: 0, scale: 0,y: 300,
                transition: { delay: 0, duration: 0.5 },
              }}
              className="absolute bottom-5 lg:bottom-10 left-0 -z-10 "
            />
          )}
          {(currentSlide == 2 ) && (
            <motion.img key={animationKey}
              src={SlideCross3}
              alt="#"
              initial={{ opacity: 0, scale: 0, y: 300 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              exit={{
                opacity: 0, scale: 0,y: 300,
                transition: { delay: 0, duration: 0.5 },
              }}
              className="absolute bottom-5 lg:bottom-10 left-0 -z-10 "
            />
          )}
          {(currentSlide == 3 || currentSlide == 0 ) && (
            <motion.img key={animationKey}
              src={SlideCross2}
              alt="#"
              initial={{ opacity: 0, scale: 0, y: 300 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              exit={{
                opacity: 0, scale: 0,y: 300,
                transition: { delay: 0, duration: 0.5 },
              }}
              className="absolute bottom-0 lg:bottom-10 left-0 -z-10 "
            />
          )}
        </AnimatePresence>

        <Swiper
          ref={swiperRef}
          modules={[Navigation, Autoplay, Controller]}
          className=" w-[83vw]  shrink-0 text-center"
          loop={true}
          autoplay={{
            delay: 3500,
            reverseDirection: true,
            disableOnInteraction: false,
          }}
          spaceBetween={150}
          slidesPerView={1}
          speed={1100}
          onSlideChange={() => {
            showTitle ? setShowTitle(false) : setShowTitle(true);
            showTitle2 ? setShowTitle2(false) : setShowTitle2(true);
            setAnimationKey((prev) => prev + Math.random());
          }}
        >
          <SwiperSlide className="shrink-0  ">
            <img src={SliderImg1} alt="" className="lg:w-[60vw] m-auto" />
          </SwiperSlide>
          <SwiperSlide className="shrink-0  ">
            <img src={SliderImg2} alt="" className="lg:w-[60vw] m-auto" />
          </SwiperSlide>
          <SwiperSlide className="shrink-0  ">
            <img src={SliderImg3} alt="" className="lg:w-[60vw] m-auto" />
          </SwiperSlide>
          <SwiperSlide className="shrink-0  ">
            <img src={SliderImg1} alt="" className="lg:w-[60vw] m-auto" />
          </SwiperSlide>
          <SwiperSlide className="shrink-0  ">
            <img src={SliderImg2} alt="" className="lg:w-[70vw] m-auto" />
          </SwiperSlide>
        </Swiper>
      </div>
      <ul className=" flex-col translate-x-10 hidden sm:hidden lg:flex md:flex xl:flex 2xl:flex  -translate-y-14 gap-24 items-center ">
        {["Facebook", "Twitter", "Instagram"].map((elem) => (
          <h2 className=" w-fit relative group rotate-90  uppercase  hover:text-yellow-400 cursor-pointer font-semibold text-[#00000060] text-[16px] font-[Roboto Condensed]">
            <span
              className={`absolute w-full transition scale-x-0 group-hover:scale-x-100 h-[3px] bg-yellow-400 bottom-0 `}
            ></span>
            {elem}
          </h2>
        ))}
      </ul>
    </div>
  );
};
