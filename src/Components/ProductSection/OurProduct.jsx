import React from "react";
import Heading from "../Heading";
import ProductCard from "./ProductCard";
import ProdImg1 from "./prod-1.png";
const OurProduct = () => {
  return (
    <div className="w-[90%] h-full pt-8 ">
      <div className="sm:flex  sm:justify-between pb-16 pt-20 ">
        <div className=" text-center  text-[40px] text-[#000000c4] font-semibold font-[Teko]"><Heading content="Our Products" /></div>
        <div className="flex items-center gap-4  sm:me-10 justify-center ">
          {["All", "Road Bike", "City Bike", "BMX"].map((elem, index) => (
            <h4 key={index} className=" relative group w-fit cursor-pointer font-semibold text-[#9ca4ab] hover:text-black">
              {elem}
              <span
                className={`absolute w-full transition scale-x-0 group-hover:scale-x-100 left-0 h-[3px] bg-yellow-400 bottom-0 `}
              ></span>
            </h4>
          ))}
        </div>
      </div>
      <div className="flex h-fit flex-wrap gap-8 ">
        {" "}
        <ProductCard imgSrc={ProdImg1} topSale={true}  />
        <ProductCard imgSrc={ProdImg1} discount={"11%"} />
        <ProductCard imgSrc={ProdImg1} topSale={true} />
        <ProductCard imgSrc={ProdImg1} />
      </div>
    
    </div>
  );
};
export default OurProduct;
