import React, { useState, useEffect } from 'react';
import data from '../data/offers.json'



export const Deals = () => {
    const [items, setItems] = useState(data.initialIatems);
    const [timeLeft, setTimeLeft] = useState(30); // Initial countdown time in seconds (1 day)

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeLeft(prevTime => {
                if (prevTime <= 1) {
                    clearInterval(interval);
                    setItems(data.newItems); // Change items when time is up
                    return 86400; // Reset the timer to 1 day
                }
                return prevTime - 1;
            });
        }, 100);

        return () => clearInterval(interval);
    }, []);

    const formatTime = (seconds) => {
        const days = Math.floor(seconds / (24 * 60 * 60));
        const hours = Math.floor((seconds % (24 * 60 * 60)) / (60 * 60));
        const minutes = Math.floor((seconds % (60 * 60)) / 60);
        const secs = seconds % 60;
        return { days, hours, minutes, secs };
    };

    const { days, hours, minutes, secs } = formatTime(timeLeft);

    return (
        <div className='container mx-auto  max-w-screen-xl  pt-20'>
            <div className='flex flex-col items-start mb-10 md:mx-0 mx-20'>
                <p className='text-2xl font-semibold mr-auto mb-2 mx-10 md:mx-0'>Deals and Offers</p>
                <div className=' p-0 rounded-lg w-20  flex space-x-5'>
                    <div className='text-center p-3 rounded bg-secondary text-white'>
                        <div className='text-lg '>{String(days).padStart(2, '0')}</div>
                        <div className='text-xs '>Days</div>
                    </div>
                    <div className='text-center p-3 rounded  bg-secondary text-white'>
                        <div className='  text-lg'>{String(hours).padStart(2, '0')}</div>
                        <div className='text-xs'>Hour</div>
                    </div>
                    <div className='text-center p-3 rounded  bg-secondary text-white'>
                        <div className='text-lg'>{String(minutes).padStart(2, '0')}</div>
                        <div className='text-xs'>Mins</div>
                    </div>
                    <div className='text-center p-3 rounded   bg-secondary text-white'>
                        <div className='text-lg'>{String(secs).padStart(2, '0')}</div>
                        <div className='text-xs'>Secs</div>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6  '>
                
                {items.map((item) => (
                    <div key={item.id} className='relative border p-4 rounded-lg shadow-lg  bg-primary'>
                        <div className='flex flex-col items-center'>
                            <div className='w-36 h-36 mb-4 relative bg-white'>
                                <img src={item.image} className='object-contain drop-shadow-2xl w-full h-full' alt={item.name} />
                                <span className='absolute top-0 right-0 bg-red-400 text-white text-xs font-bold py-1 px-2 rounded-bl-lg'>
                                    {item.discount}
                                </span>
                            </div>
                            <div className='text-center'>
                                <p className='font-medium'>{item.name}</p>
                                <p className='text-gray-700'>Price: <span>{item.price}</span></p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
