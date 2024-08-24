import React from 'react'
import NewsCardImg2 from "../assets/news-2.jpg"
import { FaRegCalendarDays } from 'react-icons/fa6'
import { FaUser } from 'react-icons/fa'
function OurNewsCard() {
  return (
    <div className='w-[370px] flex flex-col gap-4 h-[616px] bg-white py-[47px] px-[42px] shadow-lg'>
      <h2 className='hover:text-yellow-300 RobotoFont text-lg leading-6 capitalize scDotTransition  font-extrabold cursor-pointer '>doloremque laudantium, totam rem aperiam, eaque ipsa quae</h2>
      <div className='overflow-hidden'>
      <a href="#"><img src={NewsCardImg2} alt="" className='hover:scale-150 newsTrasition' /></a>
      </div>
      <div className='flex  gap-5 mt-6'>
        <div className='flex gap-2 items-center'>
        <FaRegCalendarDays className='text-[#807f7f]' />
            <span className='text-[#535b65]'>Dec 26,2019</span>
        </div>
        <div className='flex gap-2 items-center'>
        <FaUser className='text-[#807f7f]' />
            <span className='text-[#535b65]'>By Samson</span>
        </div>
      </div>
      <p className='  text-[#535b65] font-semibold '>Sed ut perspiciatis unde omnis iste natus sit voluptatem accusantium doloremque lauda ntium, totam rem aperiam, eaque.</p>
     <div className="flex gap-6 items-center mt-6">
        <span className='w-[20px] h-[2px] bg-yellow-400'></span>
        <h4  className=' uppercase hover:-translate-x-2 hover:text-yellow-300 RobotoFont scDotTransition  tracking-wider font-bold cursor-pointer'>Read More</h4>
     </div>
    </div>
  )
}

export default OurNewsCard
