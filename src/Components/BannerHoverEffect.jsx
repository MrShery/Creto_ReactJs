import React from "react";
function BannerHoverEffect({title,icon}) {
  return (
    <div className="flex  items-center text-white gap-2 text-2xl ">
      <h2>{title}</h2>
      {icon}
    </div>
  );
}

export default BannerHoverEffect;
