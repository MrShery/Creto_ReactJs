import React from 'react'
import FCardHoverImg from "../assets/asset 28.png"
import FCardImg from "../assets/asset 5.png"
function ServiceCard() {
  return (
    <div className='  lg:w-[25vw]  md:w-[40vw] sm:w-[40vw] lg:h-[40vh] h-[25vh]  md:h-[25vh]   sm:h-[30vh] relative shadow-[0_3px_16px_1px_rgba(0,0,0,0.1)] px-10 flex items-center  group overflow-hidden'>
     <div className='z-20 py-10 '>
     <h1  className=' uppercase  w-[15rem] lg:w-[11rem] md:w-[12rem] sm:w-[2vw] text-[#535b65] lg:text-4xl sm:text-[4vw] md:text-2xl font-semibold font-[Teko]'>Bicycle Spare Parts</h1>
     <button className="buyButton w-fit mt-6 uppercase px-[2vw] py-[1vw]">View More</button>
     </div>
     <img src={FCardImg} className='absolute h-full lg:h-[20vw] md:h-[30vw] sm:h-[30vw] right-0 z-10' alt="" />
      <img src={FCardHoverImg} alt="" className='absolute opacity-0 group-hover:opacity-100 group-hover:right-0 transition h-full -right-5  top-0' />
    </div>
  )
}

export default ServiceCard
