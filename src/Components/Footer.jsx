import React from "react";
import BuyButton from "./BuyButton";
import { FaFacebook, FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";
import { RxInstagramLogo } from "react-icons/rx";

function Footer() {
  return (
    <footer className="w-full h-[100vh] flex flex-col  items-center mt-[380px]">
      <div className="w-[90%] flex flex-wrap sm:flex-wrap lg:flex-nowrap md:flex-nowrap xl:flex-nowrap 2xl:flex-nowrap  lg:justify-around xl:justify-around 2xl:justify-around  2xl:gap-20 xl:gap-20 lg:gap-20 md:gap-5 sm:gap-5 gap-10">
        <div className="w-fit">
          <h2 className=" pb-5 RobotoFont font-semibold tracking-[2px]">
            SUBSCRIBE
          </h2>
          <p className="text-lg  text-gray-700  font-normal RobotoFont">
            Subscribe us and you won't miss the new arrivals, as well as
            discounts and sales.
          </p>
          <div className="2xl:flex xl:flex lg:flex md:flex sm:flex gap-4   items-center mt-5   ">
            <input
              type="text"
              placeholder="@   E-mail"
              className="hover:border-yellow-300  RobotoFont font-semibold tracking-widest outline-none border-2 border-gray-300 bg-transparent px-5  2xl:w-[40vw] xl:w-[40vw] lg:w-[40vw] md:w-[40vw] sm:w-[40vw] w-[80vw] h-[50px] "
            />
            <div className="2xl:w-fit xl:w-fit lg:w-fit md:w-fit sm:w-fit w-[80vw]">
              <BuyButton content={"SEND"} />
            </div>
          </div>
        </div>
        <div className="xl:me-20 2xl:me-20 lg:me-20 md:me-0 sm:me-0 -mt-2">
          <h2 className=" text-lg font-semibold RobotoFont tracking-widest ">
            INFO
          </h2>
          <div className=" flex lg:flex-nowrap md:flex-nowrap  flex-wrap 2xl:gap-14 xl:gap-14 lg:gap-14 md:gap-5 sm:gap-5 gap-4  pt-6">
            <div className="flex flex-col gap-3 RobotoFont text-gray-500 lg:text-lg xl:text-lg 2xl:text-lg  text-nowrap">
              {" "}
              <a href="#" className="hover:text-yellow-400 transition">
                FAQ
              </a>
              <a href="#" className="hover:text-yellow-400 transition">
                Shipping + Heading
              </a>
              <a href="#" className="hover:text-yellow-400 transition">
                2019 Catalog
              </a>
              <a href="#" className="hover:text-yellow-400 transition">
                Search
              </a>
            </div>
            <div className="flex flex-col gap-3 RobotoFont text-gray-500 lg:text-lg xl:text-lg 2xl:text-lg  text-nowrap ">
              <a href="#" className="hover:text-yellow-400 transition">
                Contacts
              </a>

              <a href="#" className="hover:text-yellow-400 transition">
                Exchanges
              </a>

              <a href="#" className="hover:text-yellow-400 transition">
                Returns
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[90%] flex flex-wrap lg:justify-around xl:justify-around 2xl:justify-around gap-20 mt-16">
        <div className="w-fit 2xl:me-80 xl:me-80 lg:me-48 md:me-[16vw] sm:me-0 me ">
          <h2 className="  RobotoFont font-semibold tracking-[2px] uppercase">
            stay in touch
          </h2>
          <div className="flex gap-5 text-xl text-gray-400 py-5">
            <a href="#">
              <FaFacebookF className="hover:text-yellow-400 transition " />
            </a>
            <a href="#">
              <FaTwitter className="hover:text-yellow-400 transition " />
            </a>
            <a href="#">
              <RxInstagramLogo className="hover:text-yellow-400 transition " />
            </a>
            <a href="#">
              <FaYoutube className="hover:text-yellow-400 transition " />
            </a>
          </div>
          <p className="text-lg  text-gray-400  font-normal RobotoFont ">
            Question? Please write us at:{" "}
            <a
              href="#"
              className="hover:text-yellow-400 transition text-gray-600"
            >
              rovadex@gmail.com
            </a>
          </p>
        </div>
        <div className="xl:me-32 2xl:me-32 lg:me-20 md:me-0 sm:me-0 me-0-mt-2">
          <h2 className=" text-lg font-semibold RobotoFont tracking-widest ">
            SHOP
          </h2>
          <div className=" flex lg:flex-nowrap md:flex-nowrap  flex-wrap 2xl:gap-14 xl:gap-14 lg:gap-14 md:gap-5 sm:gap-5 gap-4  pt-6">
            <div className="flex flex-col gap-3 RobotoFont text-gray-500 lg:text-lg xl:text-lg 2xl:text-lg  text-nowrap">
              {" "}
              <a href="#" className="hover:text-yellow-400 transition">
                Road Bike
              </a>
              <a href="#" className="hover:text-yellow-400 transition">
                Mountain Bike
              </a>
              <a href="#" className="hover:text-yellow-400 transition">
                BMX Bike
              </a>
            </div>
            <div className="flex flex-col gap-3 RobotoFont text-gray-500 lg:text-lg xl:text-lg 2xl:text-lg  text-nowrap ">
              <a href="#" className="hover:text-yellow-400 transition">
                City Bike
              </a>

              <a href="#" className="hover:text-yellow-400 transition">
                Kids Bike
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
