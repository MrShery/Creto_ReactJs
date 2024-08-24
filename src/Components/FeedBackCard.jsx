import React from "react";
const FeedBackCard = () => {
  return (
    <div className="lg:w-[370px] md:w-[45vw] sm:w-[450px] w-[90vw] md:h-[250px] sm:h-[250px] lg:h-[322px] h-[250px] bg-white px-[42px] py-[45px] RobotoFont">
      <p className="lg:text-lg sm:text-[2vw] md:text-lg text-[3.4vw] text-[#535b65] lg:pe-[25px]">
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quasi
        dolore ex sapiente ratione, ea cum. Optio id quos vero ratione, ullam
        soluta! Vero, velit."
      </p>
      <div className="flex gap-6 items-center mt-8">
        <img src="" alt="" className=" rounded-full w-[50px] h-[50px] bg-slate-700" />
        <div>
            <h2 className="font-bold RobotoFont text-lg">Sam Barton</h2>
            <div className="flex gap-2">
                <span className=" rounded-full w-[10px] h-[10px] bg-yellow-400"></span>
                <span className=" rounded-full w-[10px] h-[10px] bg-yellow-400"></span>
                <span className=" rounded-full w-[10px] h-[10px] bg-yellow-400"></span>
                <span className=" rounded-full w-[10px] h-[10px] bg-yellow-400"></span>
                <span className=" rounded-full w-[10px] h-[10px] bg-yellow-400"></span>
            </div>
        </div>
      </div>
    </div>
  );
};
export default FeedBackCard;
