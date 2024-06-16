import React from 'react';
import logo1 from '../assets/bannerlogo1.png';

export const Banner = () => {
  return (
    <div className='mx-auto bg-primary w-11/12 sm:pt-20  '>
      <div className='grid grid-cols-1 mx-4 md:mx-24 md:grid-cols-1 lg:grid-cols-2'>
        <div className='md:order-1 lg:order-2'>
          <img src={logo1} alt="logo1" className='w-full h-auto' />
        </div>
        <div className='flex flex-col justify-center space-y-3 md:order-1'>
          <h1 className='text-black text-4xl md:text-5xl lg:text-7xl font-bold'>Exclusive</h1>
          <h3 className='text-3xl md:text-3xl lg:text-5xl text-secondary font-medium'>Winter Collections</h3>
          <p className='text-gray-500 text-base md:text-lg'>Elevate Your Fashion & Lifestyle Odyssey</p>
          <div className='space-y-6 md:space-y-10'>
            <button className='flex bg-orange text-gray-200 text-sm md:text-base p-2 rounded-md px-4 md:px-8'>EXPLORE</button>
          </div>
        </div>
      </div>
    </div>
  );
}
