import React from "react";
import { useState } from "react";
import LogoSvg from "../assets/asset 0.svg";
export const NavBar = () => {
  const [height, setHeight] = useState(0);
  return (
    <nav className="flex items-center justify-between w-[88%]">
      <div>
       <a href="#"> <img src={LogoSvg} alt="image" className="w-fit h-fit py-4" /></a>
      </div>
      <ul className="flex gap-8">
        {["home", "service", "shop", "gallery", "pages", "Contacts"].map(
          (elem, index) => (
            <li >
              <a href="#" className=" navMenuItem   py-8 relative group uppercase hover:text-yellow-400 cursor-pointer font-normal text-[13px] font-[Roboto Condensed]">
                <span
                  className={`absolute w-full transition scale-x-0 group-hover:scale-x-100 h-[3px] bg-yellow-400 top-0 `}
                ></span>
                {elem}
              </a>
            </li>
          )
        )}
      </ul>
    </nav>
  );
};
