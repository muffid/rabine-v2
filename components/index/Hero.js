import Image from 'next/image'
import React from 'react'
import { BiDownArrowCircle } from "react-icons/bi"
import { FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa"

function Hero() {
  return (
    <div className='mt-8 grid grid-cols-1 md:grid-cols-2 items-center justify-between gap-x-4 rounded-3xl bg-slate-100  px-8 md:pl-24 py-16 gap-y-8 relative'>
        <div className='flex flex-col items-start gap-y-8'>
            <h1 className='bold text-5xl md:text-5xl lg:text-7xl text-[#2C090B]'>Don't listen to what they say, Go see</h1>
            <div className='h-2 w-14 bg-orange-300 rounded-lg'></div>
            <p className='semibold pr-12'>Your ultimate travel companion. Carries all the information you need while travelling.</p>
            <div className='flex flex-row gap-x-4 lg:gap-x-6 items-center'>
                <div className=' hover:scale-110 hover:shadow-xl cursor-pointer flex flex-row items-center gap-x-4 p-2 transform duration-200 lg:px-6 lg:py-2 bg-white rounded-lg shadow-md shadow-[#EFEAE5]'>
                    <Image
                        src='/img/apple.png'
                        width={200}
                        height={200}
                        className='w-[15px] md:w-[20px]'
                    />
                    <div className='flex flex-col items-start '>
                        <p className='text-xs text-slate-600'>Download on the</p>
                        <h1 className=' text-slate-900 bold text-sm lg:text-base '>Apple Store</h1>
                    </div>
                </div>

                <div className='hover:scale-110 hover:shadow-xl cursor-pointer flex flex-row items-center gap-x-4 transform duration-200 p-2 lg:px-6 lg:py-2 bg-white rounded-lg shadow-md shadow-[#EFEAE5]'>
                    <Image
                        src='/img/google-play.png'
                        width={200}
                        height={200}
                        className='w-[30px]'
                    />
                    <div className='flex flex-col items-start '>
                        <p className='text-xs text-slate-600'>Get it from</p>
                        <h1 className=' text-slate-900 bold  text-sm lg:text-base '>Google Play</h1>
                    </div>
                </div>
            </div>
        </div>
        <div className='w-full relative mt-8'>
            <Image
                src='/img/mobile.png'
                width={1000}
                height={1000}
                className='md:absolute -top-40 w-[300px] md:w-[450px] right-0 lg:-right-12'
            />
           
        </div>
         <div className='bg-white hover:text-orange-600 text-slate-600  rounded-full w-16 h-16 absolute shadow-md -bottom-10 right-[50%] flex items-center justify-center cursor-pointer'>
                <BiDownArrowCircle className='text-center text-4xl  '/>
        </div>
        <div className='absolute md:flex flex-col items-center gap-y-3 -left-6 hidden '>
          <div className='w-12 h-12 rounded-full bg-white flex items-center justify-center cursor-pointer hover:text-orange-600'>
                <FaTwitter/>
          </div>

          <div className='w-12 h-12 rounded-full bg-white flex items-center justify-center cursor-pointer hover:text-orange-600'>
                <FaInstagram/>
          </div>

          <div className='w-12 h-12 rounded-full bg-white flex items-center justify-center cursor-pointer hover:text-orange-600'>
                <FaYoutube/>
          </div>
        </div>
    </div>
  )
}

export default Hero