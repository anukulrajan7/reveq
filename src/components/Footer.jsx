import React from 'react'
import { BsInstagram } from 'react-icons/bs'
import { BsFacebook } from 'react-icons/bs'
import { BsLinkedin } from 'react-icons/bs'
import { BsYoutube } from 'react-icons/bs'

function Footer() {
    return (
        <div className='py-[1rem] max-w-[1322px] mx-auto'>
            <div className='border-[1px] border-gray-200'></div>

            <div className='flex py-[1rem] items-center gap-[2rem] px-[2rem]'>
                <h1 className='text-[#0070f3]  font-bold text-[2rem] '>Revque</h1>
                <div className='flex items-center gap-3'>
                    <BsInstagram className='w-9 h-9 object-contain px-1 py-2 bg-[#f2f2f2] rounded-md' ></BsInstagram>
                    <BsFacebook className='w-9 h-9 object-contain px-1 py-2 bg-[#f2f2f2] rounded-md' ></BsFacebook>
                    <BsLinkedin className='w-9 h-9 object-contain px-1 py-2 bg-[#f2f2f2] rounded-md' ></BsLinkedin>
                    <BsYoutube className='w-9 h-9 object-contain px-1 py-2 bg-[#f2f2f2] rounded-md'></BsYoutube>
                </div>

            </div>


        </div>

    )
}

export default Footer