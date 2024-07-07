import React ,{useState} from 'react';
import { data } from '../data/featuredProduct';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import { IoCartOutline } from 'react-icons/io5';
import { GrFavorite } from "react-icons/gr";
import { MdFavorite } from "react-icons/md";
import {Link} from 'react-router-dom'

export const FeaturedProduct = () => {
    const dispatch = useDispatch();

    const handleAddToCart = (item) => {
        dispatch(addToCart(item));
    }

    const [like, setLike] = useState({})

    const handleFavorite = (itemId)=> {
        setLike(prevLike =>{
            if(prevLike[itemId]){
                return {...prevLike, [itemId]: false}
            }

            return {...prevLike, [itemId]: true}
               
        })
        

    }

   
    return (
        <div className='container max-w-screen-xl mx-auto pt-24 pb-6'>
            <div className='flex justify-between border-b-primary  pb-4 border-b-2 '>
                <div className=' font-bold text-3xl'>
                    <p> <span className=' text-secondary'> Featured</span> Product 🔥</p>
                </div>
                <div className=' text-black cursor-pointer underline'>
                    <p>View All Products</p>
                </div>
            </div>
            <div className='justify-around pt-8 '>
                <div className='flex text-lg space-x-2 p-2  rounded-md items-center   '>
                    <Link className='hover:bg-orange  text-white w-48 bg-orange flex justify-center   rounded'>All Arrival</Link>
                    <Link className='hover:bg-orange hover:text-white   w-52  flex justify-center rounded'>Men</Link>
                    <Link className='hover:bg-orange hover:text-white   w-48  flex justify-center rounded'>Women</Link>
                    <Link className='hover:bg-orange hover:text-white   w-48  flex justify-center rounded'>Children</Link>
                    <Link className='hover:bg-orange hover:text-white   w-48  flex justify-center rounded'>Sports</Link>
                    <Link className='hover:bg-orange hover:text-white   w-48  flex justify-center rounded'>Sports</Link>
                    <Link className='hover:bg-orange hover:text-white   w-48  flex justify-center rounded'>Luxury</Link>
                    <Link className='hover:bg-orange hover:text-white   w-48  flex justify-center rounded'>Bags</Link>
                    <Link className='hover:bg-orange hover:text-white   w-48  flex justify-center rounded'>Watch</Link>
                </div>
            </div>
            <div className='grid grid-cols-4 gap-8 items-center pt-12'>
                {data.items.map(item => (
                    <div key={item.id} className='border rounded-md item-center bg-grey cursor-pointer shadow-md '>
                        <div className='items-center flex flex-col'>
                            <div className='relative m-5 p-6 bg-white items-center group rounded-md'>
                                <img src={item.img} alt="image" className='w-40 object-contain drop-shadow-2xl h-full' />
                                <button 
                                    onClick={() => handleFavorite(item.id)} 
                                    className={`absolute top-2 right-2 text-2xl z-10 `}
                                >
                                    {like[item.id] ? <MdFavorite className=' text-red-600 text-2xl' /> : <GrFavorite  className='text-2xl ' />}
                                </button>
                                <div className='hidden group-hover:flex absolute  inset-0 flex-col justify-center items-center border-secondary -z-1  bg-white bg-opacity-55 shadow-lg'>
                                    <div className='flex flex-col space-y-2 justify-center  w-44'>
                                        
                                        <div className='border bg-white rounded-sm items-center   border-green-500 '>
                                            <p className=' flex justify-center'>Pre Order</p>
                                        </div>
                                        <div className='bg-secondary rounded-sm text-white'>
                                            <p className=' flex justify-center'>Order Now</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='p-2'>
                                <div>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. possimus!</p>
                                </div>
                                <div className='flex justify-between pt-4'>
                                    <div className='flex space-x-3'>
                                        <p className='p-0 line-through text-opacity-30 text-black'>BDT 60</p>
                                        <span>BDT 80</span>
                                    </div>
                                    <div className='relative right-2 border rounded-md p-2 bg-orange text-white items-center'>
                                        <IoCartOutline onClick={() => handleAddToCart(item)} size="1.2rem" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
