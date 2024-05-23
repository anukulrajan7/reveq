import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { FaBars } from 'react-icons/fa'; // Example icon from react-icons library
import { RxCross1 } from "react-icons/rx";

function Navbar() {
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };


    return (
        <nav className='bg-white shadow-md fixed top-0 left-0 right-0 z-10'>
            <div className='mx-auto px-4 sm:px-6 lg:px-8 max-w-[1272px]'>
                <div className='flex justify-between py-4 items-center'>
                    <div className='flex'>
                        <a href="#home" className=' flex items-center text-blue-600 font-bold italic hover:bg-[#f2f2f275] px-4 py-2 rounded-md text-[1.5rem]'>
                            Revq
                        </a>

                    </div>
                    <div className='hidden sm:block '>
                        <div className='flex space-x-4'>
                            <a href="#home" className={'text-gray-700 hover:bg-[#f2f2f275] px-3 py-2 rounded-md text-sm font-medium ' + (location?.hash === "#home" ? "bg-[#f2f2f275]" : "bg-transparent")}>Home</a>
                            <a href="#feature" className={'text-gray-700 hover:bg-[#f2f2f275] px-3 py-2 rounded-md text-sm font-medium ' + (location?.hash === "#feature" ? "bg-[#f2f2f275]" : "bg-transparent")}>Features</a>
                            <a href="#pricing" className={'text-gray-700 hover:bg-[#f2f2f275] px-3 py-2 rounded-md text-sm font-medium ' + (location?.hash === "#pricing" ? "bg-[#f2f2f275]" : "bg-transparent")}>Pricing</a>
                        </div>

                    </div>
                    <div className='hidden sm:block'>
                        <div className='flex items-center'>
                            <button className='border border-gray-200 px-4 py-2 rounded-md text-sm font-medium hover:bg-[#f2f2f275]'>Login</button>
                            <button className='border border-gray-200 px-4 py-2 rounded-md text-sm font-medium hover:bg-[#f2f2f275]'>Sign Up</button>
                        </div>
                    </div>
                    <div className='flex items-center sm:hidden mr-2 transition-all'>

                        {isOpen ? < RxCross1 onClick={toggleMenu} className='h-6 w-6 transition-all' /> : <FaBars onClick={toggleMenu} className='h-6 w-6 transition-all' />}

                    </div>
                </div>
            </div>

            {/* Responsive menu */}
            {isOpen && (
                <div className='sm:hidden  flex flex-col items-center justify-center gap-2 transition-all'>
                    <div className='px-2 pt-2 pb-3 space-y-2'>
                        <a href="#home" className='block px-3 py-2 rounded-md text-base font-medium text-gray-500 hover:bg-gray-100 text-center'>Home</a>
                        <a href="#feature" className='block px-3 py-2 rounded-md text-base font-medium text-gray-500 hover:bg-gray-100 text-center'>Features</a>
                        <a href="#pricing" className='block px-3 py-2 rounded-md text-base font-medium text-gray-500 hover:bg-gray-100 text-center'>Pricing</a>
                    </div>
                    <div className='pt-4 pb-2 border-t border-gray-200 w-full'>
                        <div className='flex items-center px-5 flex-col gap-1 mb-5'>
                            <button className='border border-gray-200 py-2  w-[50%] rounded-md text-sm font-medium hover:bg-gray-100'>Login</button>
                            <button className='border border-gray-200  py-2  w-[50%] rounded-md text-sm font-medium hover:bg-gray-100'>Sign Up</button>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}

export default Navbar;
