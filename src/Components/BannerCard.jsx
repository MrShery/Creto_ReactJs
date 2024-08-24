import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { LuMessageCircle } from "react-icons/lu";
import BannerHoverEffect from "./BannerHoverEffect";
function BannerCard({ imgSrc, itemKey }) {
  return (
    <div
      className={`"relative lg:w-[20vw] md:w-[20vw] sm:w-[25vw] w-[50vw]  lg:h-[20vw] md:h-[20vw] sm:h-[25vw] h-[40vw] group "`}
      style={{
        backgroundImage: `url(${imgSrc})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div
        className="w-full h-full flex justify-center items-center opacity-0 bg-[#00000085] group-hover:opacity-100 bannerTransition cursor-pointer
"
      >
        <div className=" flex gap-5 w-fit   mt-5 opacity-0 group-hover:mt-0 group-hover:opacity-100 transition   ">
          <BannerHoverEffect
            title={"234"}
            icon={<LuMessageCircle className="text-2xl" />}
          />
          <BannerHoverEffect
            title={"134"}
            icon={<FaRegHeart className="text-xl" />}
          />
        </div>
      </div>
    </div>
  );
}

export default BannerCard;
