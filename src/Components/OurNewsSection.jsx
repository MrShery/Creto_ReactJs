import React from "react";
import OurNewsCard from "./OurNewsCard";
import Heading from "./Heading";
import BuyButton from "./BuyButton";

function OurNewsSection() {
  return (
    <div className="w-full flex flex-col items-center gap-16">
        <div className=" text-[35px] sm:text-[50px] text-[#000000c4] text-center sm:mt-0 mt-10 font-extrabold">
            <Heading content={"Our NEWS"}/>
        </div>
      <div className="flex flex-wrap gap-6 justify-center">
      <OurNewsCard />
      <OurNewsCard />
      <OurNewsCard />
      </div>
      <div className="w">
      <BuyButton  content={<a href="#">VEIW MORE</a>}/>
      </div>
    </div>
  );
}

export default OurNewsSection;
