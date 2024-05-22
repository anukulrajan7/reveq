import React from 'react'
import { useLocation } from 'react-router-dom'

function Navbar() {
    const location = useLocation();
    return (
        <div className='w-full py-3 px-7 shadow-md  fixed top-0 z-10 bg-white'>
            <div className='max-w-[1272px] mx-auto flex justify-between'>

                <a href="#home" className='text-[1.7rem] text-blue-600 font-bold italic hover:bg-[#f2f2f275] px-7 py-2 rounded-md'>Revque</a>
                <div className='flex gap-[1rem] items-center'>
                    <a href="#home" className='hover:bg-[#f2f2f275] px-2 py-2 rounded-md' >Home</a>
                    <a href="#feature" className='hover:bg-[#f2f2f275] px-2 py-2 rounded-md' >Features</a>
                    <a href="#pricing" className='hover:bg-[#f2f2f275] px-2 py-2 rounded-md' >Pricing</a>
                </div>
                <div className='flex gap-4 items-center'>
                    <button className='border border-gray-200 px-4 py-2 rounded-md font-[500] text-[.925rem]  hover:bg-[#f2f2f275]'>Login</button>
                    <button className='border border-gray-200 px-4 py-2 rounded-md font-[500] text-[.925rem]  hover:bg-[#f2f2f275]'>Sign Up</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar