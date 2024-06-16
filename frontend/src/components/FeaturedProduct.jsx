import React from 'react'
import watch from '../assets/deals_images/watch2.png'
import { useDispatch  } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import { IoCartOutline } from 'react-icons/io5';


export const FeaturedProduct = () => {
    const dispatch = useDispatch();

    const handleAddToCart = (item)=>{
        dispatch(addToCart(item))
    }

    const items = [
        {id: 1, name: "Lorem ipsum dolor sit amet consectetur adipisicing elit. possimus!", img: watch, },
        {id: 2, name: "Lorem ipsum dolor sit amet consectetur adipisicing elit. possimus!", img: watch, },
        {id: 3, name: "Lorem ipsum dolor sit amet consectetur adipisicing elit. possimus!", img: watch, },
        {id: 4, name: "Lorem ipsum dolor sit amet consectetur adipisicing elit. possimus!", img: watch, },
        {id: 5, name: "Lorem ipsum dolor sit amet consectetur adipisicing elit. possimus!", img: watch, },
        {id: 6, name: "Lorem ipsum dolor sit amet consectetur adipisicing elit. possimus!", img: watch, },
        {id: 7, name: "Lorem ipsum dolor sit amet consectetur adipisicing elit. possimus!", img: watch, },
        {id: 8, name: "Lorem ipsum dolor sit amet consectetur adipisicing elit. possimus!", img: watch, },
        {id: 9, name: "Lorem ipsum dolor sit amet consectetur adipisicing elit. possimus!", img: watch, },
        {id: 10, name: "Lorem ipsum dolor sit amet consectetur adipisicing elit. possimus!", img: watch, },
        {id: 11, name: "Lorem ipsum dolor sit amet consectetur adipisicing elit. possimus!", img: watch, },
        {id: 12, name: "Lorem ipsum dolor sit amet consectetur adipisicing elit. possimus!", img: watch, },
    ]
  return (
    <div className='container max-w-screen-xl mx-auto pt-24'>
        <div>
            <p>Featured <span>Product</span></p>
        </div>
            <div className='grid grid-cols-4  gap-8 items-center '>
                {items.map(item =>(
                    <div key={item.id } className=' border rounded-lg item-center bg-grey cursor-pointer'>
                        <div className=' items-center flex flex-col '>
                            <div className='m-5 p-6   bg-white items-center hover:backdrop:bg-grey'>
                                <img src={item.img} alt="image"className='w-40 object-contain drop-shadow-2xl  h-full ' />
                                <div className='hidden hover:backdrop:'>
                                    <div>
                                        <p>preOrder</p>
                                    </div>
                                    <div>
                                        <p>Order</p>
                                    </div>
                                </div>
                            </div>
                            <div className='p-2'>
                                <div className=''>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. possimus!</p>
                                </div>
                                <div className='flex  justify-between pt-4'>
                                    <div className='flex space-x-3'>
                                        <p className='p-0 line-through'>BDT 60</p>
                                        <span>BDT 80</span>
                                    </div>
                                    <div className='relative right-2 border rounded-md p-2 bg-orange text-white items-center'>
                                        <IoCartOutline onClick={()=> handleAddToCart(item)} size="1.2rem"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

            </div>
    </div>
  )
}
