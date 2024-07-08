import React from 'react'
import { LiaGreaterThanSolid } from "react-icons/lia";
import { PiLessThan } from "react-icons/pi";
import woman1 from "../assets/deals_images/woman-1.png"

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

        <div className='w-72 h-80 border rounded-lg flex  bg-white'>
         <div>

        </div>
        <div className=' object-contain  '>
          <img className=' w-36' src={woman1} alt="" />
        </div>
        </div>

        <div className='w-full max-w-2xl grid grid-cols-2 grid-rows-2 gap-10'>
          <div className='bg-white h-32 flex flex-col p-6 space-y-2 rounded-lg'>
            <p className=' text-2xl font-medium'>Louis Will Bag</p>
            <span className=' text-md underline-custom-1 '>Collection</span>
          </div>
          <div className='h-32 bg-white rounded-lg'>
            <div className=' p-6 space-y-2 flex flex-col'>
              <p className=' text-2xl font-medium'>For Her</p>
              <span className=' text-md underline-custom-2 '>Women's Collection</span>
            </div>

            <div>

            </div>
          </div>
          <div className='h-32 bg-white space-y-2 flex flex-col p-6  rounded-lg'>
            <p className=' text-2xl font-medium'>Leather Clocks</p>
            <span className=' text-md underline-custom-3 '>Explore More</span>
          </div>
          <div className='bg-white h-32 flex   rounded-lg'>
            <div className='p-6 space-y-2 flex flex-col bg-slate-500'>
                <p className=' text-2xl font-medium'>For Him</p>
                <span className=' text-md underline-custom-4 '>Men's Collection</span>
            </div>

            <div>

            </div>
          </div>
        </div>

        <div className='w-72 h-80 border rounded-lg flex items-center justify-center'>
          <div>

          </div>
          <div>
            <img src={woman1} alt="" />
          </div>


        </div>
      </div>
    </div>
    </div>
  )
}
