import React, { useState } from 'react'
import review1 from "../assets/asset 18.webp"
import review2 from "../assets/asset 19.webp"
import review3 from "../assets/asset 20.webp"
import review4 from "../assets/asset 21.webp"
import review5 from "../assets/asset 22.webp"
import { client } from '../components/client'
import videoFrame1 from "../assets/first.mp4"
import { faq } from "../components/Faq";
import { FaPlus, FaQ } from "react-icons/fa6";

const reviewImage = [review1, review2, review3, review4, review5];

const Rating = ({ rating }) => {
    const fullStars = Math.floor(rating);
    const halfStars = rating % 1 !== 0 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStars;
    const Star = ({ filled, half }) => {
        if (half) {
            return (
                <svg className="w-6 h-6 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                    <defs>
                        <linearGradient id="half-grad">
                            <stop offset="50%" stopColor="currentColor" />
                            <stop offset="50%" stopColor="transparent" />
                        </linearGradient>
                    </defs>
                    <path fill="url(#half-grad)" d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957h4.15c.969 0 1.371 1.24.588 1.81l-3.356 2.441 1.286 3.957c.3.921-.755 1.688-1.538 1.118L10 13.011l-3.367 2.441c-.783.57-1.838-.197-1.538-1.118l1.286-3.957-3.356-2.441c-.783-.57-.38-1.81.588-1.81h4.15l1.286-3.957z"></path>
                </svg>
            );
        }
        return (
            <svg className={`w-6 h-6 ${filled ? 'text-yellow-500' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957h4.15c.969 0 1.371 1.24.588 1.81l-3.356 2.441 1.286 3.957c.3.921-.755 1.688-1.538 1.118L10 13.011l-3.367 2.441c-.783.57-1.838-.197-1.538-1.118l1.286-3.957-3.356-2.441c-.783-.57-.38-1.81.588-1.81h4.15l1.286-3.957z"></path>
            </svg>
        );
    };

    return (
        <div className="flex items-center ">
            {[...Array(fullStars)].map((_, index) => (
                <Star key={`full-${index}`} filled={true} />
            ))}
            {halfStars === 1 && <Star half={true} />}
            {[...Array(emptyStars)].map((_, index) => (
                <Star key={`empty-${index}`} filled={false} />
            ))}
        </div>
    );
};

const renderRoundedImage = (imageArray) => {
    return <div className='flex gap-0 relative'>
        {
            imageArray?.map((imgUrl, index) => {
                return <img src={imgUrl} className={`w-9 rounded-full object-contain z-[${index + 1}]`} alt="" />

            })
        }
    </div>

}
const FaqShow = ({ faq }) => {
    const [open, setOpen] = useState(false);
    return <div className='py-6 px-[2rem] shadow-md border border-gray-400 rounded-[20px] flex flex-col gap-[1rem]'>
        <div className='flex w-full justify-between items-center  '>
            <p className='text-[1.4rem]  '>{faq?.question}</p>
            <FaPlus onClick={() => setOpen(!open)} className={`text-[1.3rem] ${open ? "rotate-45" : "rotate-0"} transition-all  `}></FaPlus>
        </div>
        {
            open && <div className='flex flex-col gap-[1rem] items-start'>

                <p className='text-start text-[1rem] '>{faq?.answer?.desc}</p>
                <ul className='text-start list-disc  px-[2rem]'>
                    {
                        faq?.answer?.points?.map((item) => {
                            return <li>{item}</li>
                        })
                    }
                </ul>
            </div>

        }

    </div>
}

function Home() {
    return (
        <div className='w-[90%] mx-auto  my-[1rem] mt-[8rem] z-0'>
            <section className='max-w-[1272px] mx-auto md:max-h-[400px] flex flex-col justify-center items-center gap-[1.5rem] ' id="home">
                <p className='text-[.925rem] inter-Font font-[600] bgGradient py-2 px-4 border-[1px] rounded-full borderGradient text-[#0070f3] '>LinkedIn Automation & Sales Pipeline Tool</p>
                <h1 className='text-[2rem] md:text-[3rem] w-[70%] lg:text-[4rem] text-center text-[#0c0f12] inter-font md:font-semibold lg:font-bold leading-tight'>Leverage The Power of Your <span className="text-[#0077b5]"> LinkedIn </span>Connections</h1>
                <p className='text-[#000] tracking-normal text-[1.1rem] inter-font text-center'>Nurture your prospects on LinkedIn and always stay on the top of their minds</p>
                <button className='cursor-pointer  bg-[#0070f3] tracking-normal   text-white font-semibold md:text-[1rem] py-3 px-7 rounded-lg'>Join the beta waitlist</button>
                <div className='flex gap-[1rem] items-center'>
                    {
                        renderRoundedImage(reviewImage)
                    }
                    <div>{
                        <Rating rating={4.5} />

                    }
                        <span className='text-sm font-[500]'>from 140 Reviews</span></div>
                </div>
            </section>
            <section className='max-w-[900px] mx-auto md:max-h-[400px] my-[3rem] flex flex-col justify-center text-center items-center gap-[1.5rem] '>
                <h1 className='text-[2rem] md:text-[3rem] lg:text-[3.5rem] text-[#0c0f12] inter-font md:font-semibold  leading-tight'>Why a CRM with social media integration is useful?</h1>
                <p className='text-[#000] tracking-normal text-[1.25rem] inter-font'>By combining social media data with traditional CRM data, businesses get a 360-degree view of their customers. This includes insights into customers' social interactions, preferences, and behaviors, alongside their transaction history and contact information.</p>
            </section>
            <section className='flex w-full mx-auto overflow-hidden items-center md:px-5 py-5 my-7 gap-[1rem] justify-center'>
                {
                    client?.map((imgUrl) => {
                        return <img src={imgUrl} className='h-[2rem] object-contain'></img>
                    })
                }
            </section>
            <section className='w-full mx-auto bg-[#fafafa] max-w-[1272px] md:p-[3rem] rounded-lg my-[4rem] shadow-md shadow-gray-50' id="feature">
                <div className='grid grid-cols-2 gap-[2rem] items-center'>
                    <div className='p-3  overflow-hidden'>
                        <video src={videoFrame1} autoPlay loop muted className='w-full h-[300px] object-cover rounded-[40px]'></video>
                    </div>
                    <div className='p-5 flex flex-col items-start gap-[1rem]'>
                        <h1 className='text-[2rem] md:text-[3rem] lg:text-[3rem] text-[#0c0f12] inter-font md:font-semibold text-start  leading-tight'>Find A Connection's Recent Activity</h1>
                        <p className='text-gray-500 text-start '>Always know which post they are engaging with</p>
                        {/* <button className='cursor-pointer  bg-[#0070f3] tracking-normal   text-white font-semibold md:text-[1rem] py-3 px-7 rounded-lg'>See related intregation</button> */}
                    </div>
                </div>
                <div className='grid grid-cols-2 gap-[2rem] items-center justify-center'>
                    <div className='p-5 flex flex-col items-start gap-[1rem]'>
                        <h1 className='text-[2rem] md:text-[3rem] lg:text-[3rem] text-[#0c0f12] inter-font md:font-semibold text-start  leading-tight'>Detailed Insights for All Connections</h1>
                        <p className='text-gray-500 text-start '>Get data about all your 2nd & 3rd degree connections</p>
                        {/* <button className='cursor-pointer  bg-[#0070f3] tracking-normal   text-white font-semibold md:text-[1rem] py-3 px-7 rounded-lg'>See related intregation</button> */}
                    </div>
                    <div className='p-3  overflow-hidden'>
                        <video src={videoFrame1} autoPlay loop muted className='w-full h-[300px] object-cover rounded-[40px]'></video>
                    </div>
                </div>
                <div className='grid grid-cols-2 gap-[2rem] items-center'>
                    <div className='p-3  overflow-hidden'>
                        <video src={videoFrame1} autoPlay loop muted className='w-full h-[300px] object-cover rounded-[40px]'></video>
                    </div>
                    <div className='p-5 flex flex-col items-start gap-[1rem]'>
                        <h1 className='text-[2rem] md:text-[3rem] lg:text-[3rem] text-[#0c0f12] inter-font md:font-semibold text-start  leading-tight'>Engage With Your Prospects</h1>
                        <p className='text-gray-500 text-start '>Get AI-powered insights based on relevancy & recency</p>
                        {/* <button className='cursor-pointer  bg-[#0070f3] tracking-normal   text-white font-semibold md:text-[1rem] py-3 px-7 rounded-lg'>See related intregation</button> */}
                    </div>
                </div>
                <div className='grid grid-cols-2 gap-[2rem] items-center justify-center'>
                    <div className='p-5 flex flex-col items-start gap-[1rem]'>
                        <h1 className='text-[2rem] md:text-[3rem] lg:text-[3rem] text-[#0c0f12] inter-font md:font-semibold text-start  leading-tight'>Analys Who Is Engaging With Your Posts</h1>
                        <p className='text-gray-500 text-start '>Find detailed information about all engagment metrics</p>
                        {/* <button className='cursor-pointer  bg-[#0070f3] tracking-normal   text-white font-semibold md:text-[1rem] py-3 px-7 rounded-lg'>See related intregation</button> */}
                    </div>
                    <div className='p-3  overflow-hidden'>
                        <video src={videoFrame1} autoPlay loop muted className='w-full h-[300px] object-cover rounded-[40px]'></video>
                    </div>
                </div>
            </section >

            <section className='max-w-[700px] mx-auto flex flex-col items-center '>
                <p className='text-[.925rem] inter-Font font-[600] bgGradient py-2 mb-4 px-4 border-[1px] rounded-full borderGradient text-[#0070f3] '>Breakcold FAQ</p>

                <h1 className='text-[2rem] md:text-[3rem] lg:text-[3rem] text-[#0c0f12] inter-font md:font-semibold text-start  leading-tight'>Frequently Asked Questions</h1>
                <div className='w-full flex flex-col gap-[1.5rem] my-[2rem]'>
                    {faq?.map((faqs) => {
                        return <FaqShow faq={faqs}></FaqShow>
                    })}
                </div>
            </section>


        </div >
    )
}

export default Home