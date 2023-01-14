import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay,Pagination,Navigation } from 'swiper';
import 'swiper/css';
import "swiper/css/pagination";
import Image from 'next/image'
import { FaRegEye,FaStar,FaCartPlus } from "react-icons/fa";



function SliderTerbaru(props) {
  return (
    <div>
         <Swiper
            loop={props.loop}
            slidesPerView={props.slide}
            spaceBetween={5}
            centeredSlides={true}
            autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            }}
       
            pagination={{
            clickable: true,
            }}
          
            modules={[Autoplay,Pagination, Navigation]}
            className="mySwiper py-8 flex flex-col gap-y-8"
        >
            <SwiperSlide>
                <div className='flex flex-col items-center justify-start p-2'>
                    <div className='flex flex-col items-start  bg-white rounded-2xl hover:shadow-xl hover:scale-105 transform transition  relative'>
                        <Image
                            src='/img/prod1.jpg'
                            width={400}
                            height={400}
                            className='rounded-t-2xl w-[300px]'
                            style={{objectFit:`cover`}}
                            alt='undangan online rabine.id'
                        />
                        <div className='absolute bg-white flex items-center justify-center rounded top-2 right-2 p-2 text-yellow-400'>
                            <FaStar/>
                        </div>
                       <div className='p-4 flex flex-row items-start justify-between w-full max-w-[300px] gap-x-2'>
                            <h1 className='bold text-lg'>Chroma Dark</h1>
                            <h1 className='text-xs bold bg-yellow-100 p-2 rounded text-yellow-800 '>PREMIUM</h1>
                       </div>

                        <div className='flex flex-row gap-x-1 items-center text-orange-300 text-[0.65rem] px-4'>
                            <FaStar/><FaStar/><FaStar/><FaStar/>
                        </div>

                       <div className='p-4 flex flex-row items-center w-full max-w-[300px] gap-x-4'>
                           <button className='bg-slate-50 px-3 py-2 rounded-lg base text-sm flex flex-row items-center gap-x-3 base'><FaRegEye/> preview</button>
                           <button className='bg-gradient-to-r from-pink-600 to-orange-500 px-3 py-2 text-white rounded-lg base text-sm flex flex-row items-center gap-x-3 base'><FaCartPlus/> Order Preset</button>
                       </div>
                    
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className='flex flex-col items-center justify-start p-2'>
                    <div className='flex flex-col items-start  bg-white rounded-2xl hover:shadow-xl hover:scale-105 transform transition '>
                        <Image
                            src='/img/prod2.jpg'
                            width={400}
                            height={400}
                            className='rounded-t-2xl w-[300px]'
                            style={{objectFit:`cover`}}
                            alt='undangan online rabine.id'
                        />
                        <div className='p-4 flex flex-row items-start justify-between w-full max-w-[300px] gap-x-2'>
                            <h1 className='bold text-lg'>Faded Gravy</h1>
                            <h1 className='text-xs bold bg-green-100 p-2 rounded text-green-800 '>BASIC</h1>
                        </div>

                        <div className='flex flex-row gap-x-1 items-center text-orange-300 text-[0.65rem] px-4'>
                            <FaStar/><FaStar/><FaStar/><FaStar/>
                        </div>

                       <div className='p-4 flex flex-row items-center w-full max-w-[300px] gap-x-4'>
                           <button className='bg-slate-50 px-3 py-2 rounded-lg base text-sm flex flex-row items-center gap-x-3 base'><FaRegEye/> preview</button>
                           <button className='bg-gradient-to-r from-pink-600 to-orange-500 px-3 py-2 text-white rounded-lg base text-sm flex flex-row items-center gap-x-3 base'><FaCartPlus/> Order Preset</button>
                       </div>
                        
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className='flex flex-col items-center justify-start  p-2'>
                    <div className='flex flex-col items-start  bg-white rounded-2xl hover:shadow-xl hover:scale-105 transform transition  relative'>
                        <Image
                            src='/img/prod8.jpg'
                            width={400}
                            height={400}
                            className='rounded-t-2xl w-[300px] '
                            style={{objectFit:`cover`}}
                            alt='undangan online rabine.id'
                        />
                         <div className='absolute bg-white flex items-center justify-center rounded top-2 right-2 p-2 text-yellow-400'>
                            <FaStar/>
                        </div>
                        <div className='p-4 flex flex-row items-start justify-between w-full max-w-[300px] gap-x-2'>
                            <h1 className='bold text-lg'>Rouffle Glam</h1>
                            <h1 className='text-xs bold bg-yellow-100 p-2 rounded text-yellow-800 '>PREMIUM</h1>
                       </div>

                       <div className='flex flex-row gap-x-1 items-center text-orange-300 text-[0.65rem] px-4'>
                            <FaStar/><FaStar/><FaStar/><FaStar/>
                        </div>

                       <div className='p-4 flex flex-row items-center w-full max-w-[300px] gap-x-4'>
                           <button className='bg-slate-50 px-3 py-2 rounded-lg base text-sm flex flex-row items-center gap-x-3 base'><FaRegEye/> preview</button>
                           <button className='bg-gradient-to-r from-pink-600 to-orange-500 px-3 py-2 text-white rounded-lg base text-sm flex flex-row items-center gap-x-3 base'><FaCartPlus/> Order Preset</button>
                       </div>
                        
                    </div>
                </div>
            </SwiperSlide>

            <SwiperSlide>
            <div className='flex flex-col items-center justify-start  p-2'>
                    <div className='flex flex-col items-start  bg-white rounded-2xl hover:shadow-xl hover:scale-105 transform transition '>
                        <Image
                            src='/img/prod10.jpg'
                            width={400}
                            height={400}
                            className='rounded-t-2xl w-[300px] '
                            style={{objectFit:`cover`}}
                            alt='undangan online rabine.id'
                        />
                        <div className='p-4 flex flex-row items-start justify-between w-full max-w-[300px] gap-x-2'>
                            <h1 className='bold text-lg'>Green Moss</h1>
                            <h1 className='text-xs bold bg-green-100 p-2 rounded text-green-800 '>BASIC</h1>
                       </div>

                       <div className='flex flex-row gap-x-1 items-center text-orange-300 text-[0.65rem] px-4'>
                            <FaStar/><FaStar/><FaStar/><FaStar/>
                        </div>

                       <div className='p-4 flex flex-row items-center w-full max-w-[300px] gap-x-4'>
                           <button className='bg-slate-50 px-3 py-2 rounded-lg base text-sm flex flex-row items-center gap-x-3 base'><FaRegEye/> preview</button>
                           <button className='bg-gradient-to-r from-pink-600 to-orange-500 px-3 py-2 text-white rounded-lg base text-sm flex flex-row items-center gap-x-3 base'><FaCartPlus/> Order Preset</button>
                       </div>

                    </div>
                </div>
            </SwiperSlide>
        </Swiper> 
    </div>
  )
}

export default SliderTerbaru