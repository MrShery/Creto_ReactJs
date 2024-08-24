import React from "react";

export default function BuyButton({content ,reverse} ) {
  return (
    <div>
      <button className={`" ${reverse} buyButton transition  w-full px-12 py-[10px] "`}>{content}</button>
    </div>
  );
}
