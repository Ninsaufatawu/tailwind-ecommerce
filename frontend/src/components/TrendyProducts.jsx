import React from 'react'
import { LiaGreaterThanSolid } from "react-icons/lia";
import { PiLessThan } from "react-icons/pi";

export const TrendyProducts = () => {
  return (
    <div className=' bg-gradient-to-t from-gray-200 to-white'>
    <div className='container max-w-screen-xl mx-auto pt-24 pb-20 '>
       <div className='flex justify-between border-b-primary  pb-4 border-b-2 '>
                <div className=' font-bold text-3xl'>
                    <p> <span className=' text-secondary'> Trendy</span> Product🛍</p>
                </div>
                <div className=' text-black cursor-pointer flex gap-7 text-2xl pt-2'>
                    <PiLessThan />
                    <LiaGreaterThanSolid />
                    <p></p>
                </div>
            </div>

      <div className='flex justify-between items-start h-80 gap-10 pt-12'>

        <div className='w-72 h-80 border rounded-lg flex items-center justify-center'>
          <p>khfgdhfs</p>
        </div>

        <div className='w-full max-w-2xl grid grid-cols-2 grid-rows-2 gap-10'>
          <div className='bg-white h-32 flex flex-col p-6 space-y-2 rounded-lg'>
            <p className=' text-2xl font-medium'>Louis Will Bag</p>
            <span className=' text-xl underline w-1 '>Collection</span>
          </div>
          <div className='h-32 bg-white flex items-center justify-center  rounded-lg'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
          </div>
          <div className='h-32 bg-white flex items-center justify-center  rounded-lg'>
            <p>Leather Clocks</p>
            <span>Explore More</span>
          </div>
          <div className='bg-white h-32 flex items-center justify-center  rounded-lg'>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </div>
        </div>

        <div className='w-72 h-80 border rounded-lg flex items-center justify-center'>
          <p>Lorem ipsum dolor sit.</p>
        </div>
      </div>
    </div>
    </div>
  )
}
