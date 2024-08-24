import React from "react";
import BnerBgImg from "../assets/asset 34.jpeg";
import CrossImg from "../assets/asset 35.svg";
import bikeBannerImg from "../assets/bike-banner.png";
import Heading from "./Heading";
import BannerCard from "./BannerCard";
import BnCardImg1 from "../assets/instagram-1.jpg";
import BnCardImg2 from "../assets/instagram-2.jpg";
import BnCardImg3 from "../assets/instagram-3.jpg";
import BnCardImg4 from "../assets/instagram-4.jpg";
import BnCardImg5 from "../assets/instagram-5.jpg";
function BannerSection() {

  
  return (
    <section
      className=" w-full sm:h-[80vh] h-[100vh] bg-red-300 relative pt-16 pb-3  mt-40 myMask myMaskReverse onlyTopMaks  "
      style={{
        backgroundImage: `linear-gradient( rgba(25, 35, 48, .699),rgba(25, 35, 48, .61)),url(${BnerBgImg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <img
        src={CrossImg}
        alt=""
        className="absolute  w-fit left-0 lg:bottom-0 md:bottom-0 sm:bottom-0 xl:bottom-0 2xl:bottom-0 bottom-32   mt-6"
      />
      <img
        src={bikeBannerImg}
        alt=""
        className="absolute left-0  w-[40vw] lg:bottom-0 md:bottom-0 sm:bottom-0 xl:bottom-0 2xl:bottom-0 bottom-36 "
      />
      <div className=" w-full h-[10vh] flex xl:flex 2xl:flex flex-col items-center  absolute z-10 ">
        <div className="text-white lg:text-[3.5vw] md:text-4xl text-2xl font-extrabold font-[Teko] sm:mt-0 mt-16 ">
          <Heading content={"Hyper E-Ride Bike 700C"} />
        </div>
        <p className="2xl:px-[30vw] xl:px-[30vw]  lg:px-[30vw] md:px-[20vw] sm:px-[10vw] px-0 pt-5 lg:pb-10 md:pb-10 sm:pb-5 pb-2 RobotoFont  text-center text-white ">
          Maecenas consequat ex id lobortis venenatis. Mauris id erat enim.
          Morbi dolor dolor, auctor tincidunt lorem.
        </p>
        <div className="flex items-center gap-5 lg:mb-5 md:mb-5 sm:mb-0 mb-0 font-[Teko]   ">
          <div className=" font-extrabold lg:text-5xl md:text-4xl sm:text-2xl text-xl text-yellow-400 selection:bg-yellow-400 selection:text-black">
            <h4>$1.699</h4>
          </div>
          <div className="text-gray-300 font-extrabold  line-through lg:text-5xl md:text-4xl sm:text-2xl text-xl  selection:bg-yellow-400 selection:text-black ">
            <h4>$1.799</h4>
          </div>
        </div>
        <div className="lg:flex md:flex sm:flex xl:flex 2xl:flex   py-5 bg-[#9490903b] mt-5">
          <div className="flex justify-center">
            <div className="text-center  lg:text-5xl md:text-4xl sm:text-2xl text-xl font-extrabold font-[Teko] text-white px-7  border-e border-gray-400 ">
              14
              <h3 className=" RobotoFont uppercase lg:text-xl md:text-4xl sm:text-2xl text-sm  text-yellow-400 ">
                Days
              </h3>
            </div>
            <div className="text-center lg:text-5xl md:text-4xl sm:text-2xl text-xl font-extrabold font-[Teko] text-white px-7  border-e border-gray-400 ">
              23
              <h3 className=" RobotoFont uppercase lg:text-xl md:text-xl sm:text-sm text-sm  text-yellow-400 ">
                Hours
              </h3>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="text-center lg:text-5xl md:text-4xl sm:text-2xl text-xl font-extrabold font-[Teko] text-white px-7  border-e border-gray-400 ">
              55
              <h3 className=" RobotoFont uppercase lg:text-xl md:text-xl sm:text-sm text-sm  text-yellow-400 ">
                Minutes
              </h3>
            </div>
            <div className="text-center lg:text-5xl md:text-4xl sm:text-2xl text-xl font-extrabold font-[Teko] text-white px-7 sm:border-e lg:border-none md:border-none border-e border-gray-400">
              45
              <h3 className=" RobotoFont uppercase lg:text-xl md:text-xl sm:text-sm text-sm  text-yellow-400 ">
                seconds
              </h3>
            </div>
          </div>
        </div>
        <div className="lg:flex md:flex sm:flex  lg:mt-[8.8vw] xl:mt-[6.8vw] md:mt-[12.2vw] sm:mt-[24.8vw] mt-[14.2vw]">
   
      <div className="flex">
      <BannerCard imgSrc={BnCardImg1} />
      <BannerCard imgSrc={BnCardImg2} />
      </div>
      <div className="flex">
      <BannerCard imgSrc={BnCardImg3} />
      <BannerCard imgSrc={BnCardImg4} />
      </div>
      <div className="hidden xl:inline lg:inline md:inline sm:hidden">
      <BannerCard imgSrc={BnCardImg5} />
      </div>
        </div>
      </div>
    </section>
  );
}

export default BannerSection;
