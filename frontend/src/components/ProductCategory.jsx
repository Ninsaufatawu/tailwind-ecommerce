import React from 'react'
import watch from '../assets/deals_images/watch1.png'
import { Link } from 'react-router-dom'

export const ProductCategory = () => {

    const items = [
        {id: 1, name: "Man", img: watch, },
        {id: 2, name: "Woman", img: watch, },
        {id: 3, name: "Accessories", img: watch, },
        {id: 4, name: "Clothing", img: watch, },
        {id: 5, name: "Watches", img: watch, },
        {id: 6, name: "Bags & Travels", img: watch, },
    ]

  return (
    <div className=' max-w-screen-xl mx-auto pt-16 pb-20 '>
        <div className='pb-10 font-bold text-3xl'>
                <p>Product <span className='p-0 text-secondary'>Caregory</span></p>
            </div>
        <div className='flex  items-center gap-10 '> 
            
            {items.map(item =>(
                <div key={item.id} className='rounded-lg  items-center shadow-md bg-grey '>
                    <Link>
                    <div className='items-center flex  flex-col h-36 w-44  justify-center cursor-pointer'>
                       
                            <div className='bg-white p-6 rounded-full '>
                                <img src={item.img} alt={item.name} className='w-10 object-contain drop-shadow-2xl  h-full' />
                            </div>
                            <p>{item.name}</p>
                        
                    </div>
                    </Link>

                </div>
            ))
            }
        </div>

    </div>
  )
}
