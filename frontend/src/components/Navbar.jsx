import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoReorderThreeSharp, IoSearch, IoClose } from 'react-icons/io5';
import { FaRegHeart, FaRegUser } from 'react-icons/fa';
import  Cart  from './Cart'; // Make sure to import your Cart component
import Search from './Search'; // Import the Search component
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/logo.png'

const Navbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const toggleSearch = () => {
        setIsSearchOpen(!isSearchOpen);
    };

    const closeSearch = () => {
        setIsSearchOpen(false);
    };

    const handleSearchComplete = () => {
        setIsSearchOpen(false); // Close the search field on small screens
    };

    return (
        <div className="">
            <div className='max-w-screen-xl flex items-center justify-between mx-auto '>
                <div className="font-bold text-2xl flex items-center " >
                    <img  src={logo} alt="logo" className='w-1/6 ' />
                    <Link to="/">
                    <span className='text-green-400 right-3 relative'>eShop</span></Link>
                </div> 

                <div className='lg:flex hidden  relative  right-28 text-lg items-center space-x-5 '>
                    <Link to="/">Man</Link>
                    <Link to="/">Woman</Link>
                    <Link to="/">Accessories</Link>
                    <Link to="/">Bags&Travels</Link>
                    <Link to="/">Electronics</Link>
                </div>

                <div className='hidden md:flex items-center space-x-5'>
                    <Search className="flex  lg:right-0 relative right-1/2 items-center" onSearchComplete={() => {}} />
                    <div className=''>
                        <Cart />
                    </div>
                    <div>
                        <FaRegHeart className='md:hidden lg:block'/>
                    </div>
                    <div>
                        <FaRegUser className='md:hidden lg:block '/>
                    </div>
                </div>

                <div className='flex space-x-5 items-center md:hidden'>
                    <div className='fixed top-3 right-3'>
                        <Cart />
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {isDropdownOpen && (
                    <>
                        <motion.div
                            className="fixed inset-0 bg-black bg-opacity-50 z-40"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.5 }}
                            exit={{ opacity: 0 }}
                            onClick={toggleDropdown}
                        ></motion.div>
                        <motion.div
                            className="fixed top-0 right-0 w-64 h-full bg-white shadow-lg z-50 p-5"
                            initial={{ x: '100%', opacity: 0 }}
                            animate={{ x: '0%', opacity: 1 }}
                            exit={{ x: '100%', opacity: 0 }}
                        >
                            <div className="flex justify-end">
                                <IoClose onClick={toggleDropdown} className='cursor-pointer text-xl' />
                            </div>
                            <div className='mt-5 flex flex-col items-center space-y-5'>
                                <Link to="/" onClick={toggleDropdown}>Man</Link>
                                <Link to="/" onClick={toggleDropdown}>Woman</Link>
                                <Link to="/" onClick={toggleDropdown}>Accessories</Link>
                                <Link to="/" onClick={toggleDropdown}>Bags&Travels</Link>
                                <Link to="/" onClick={toggleDropdown}>Electronics</Link>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>

            <AnimatePresence>
                {isSearchOpen && (
                    <>
                        <motion.div
                            className="fixed inset-0 bg-black bg-opacity-50 z-40"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.5 }}
                            exit={{ opacity: 0 }}
                            onClick={closeSearch}
                        ></motion.div>
                        <motion.div
                            className="fixed top-0 left-0 right-0 bg-white z-50 p-5 shadow-lg"
                            initial={{ y: '-100%', opacity: 0 }}
                            animate={{ y: '0%', opacity: 1 }}
                            exit={{ y: '-100%', opacity: 0 }}
                            onClick={(e) => e.stopPropagation()} // Prevent closing on click inside the search
                        >
                            <div className="flex justify-between items-center">
                                <Search className="w-full" onSearchComplete={handleSearchComplete} />
                                <IoClose onClick={toggleSearch} className='cursor-pointer text-xl ml-2' />
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>

            {/* Bottom icons for small screens */}
            <div className="fixed bottom-0 left-0 h-20 items-center text-white text-2xl rounded-t-3xl right-0 bg-green-500 shadow-lg p-3 flex justify-around  lg:hidden">
                <IoReorderThreeSharp onClick={toggleDropdown} className='cursor-pointer text-3xl' />
                <IoSearch onClick={toggleSearch} className='cursor-pointer md:hidden' />
                <FaRegHeart  className='cursor-pointer  '/>
                <FaRegUser  className='cursor-pointer'/>
            </div>
        </div>
    );
};

export default Navbar;
