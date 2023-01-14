import React, { useState,useEffect,useRef } from 'react'
import { RiSendPlaneFill } from "react-icons/ri";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay,Pagination,Navigation } from 'swiper';
import 'swiper/css';
import "swiper/css/pagination";
import Image from 'next/image'
import SliderTerbaru from './SliderTerbaru';

function LatestProd() {
    const [windowSize, setWindowSize] = useState(3);
    const [perSlide,setPerSlide] = useState(1)
    const winRef = useRef(windowSize)

      useEffect(() => {
       if(window.innerWidth > 1023){
        setPerSlide(4)
       }
        function handleResize() {

            setWindowSize(window.innerWidth)
            winRef.current = windowSize;
            if(winRef.current < 800){
                setPerSlide(2)
            }else if(winRef.current >= 800 && winRef.current < 1023){
                setPerSlide(2)
            }else{
                setPerSlide(4)
            }

        }
    
        window.addEventListener('resize', handleResize)
            return () => {
        window.removeEventListener('resize', handleResize)
        }
          
      }, [windowSize])

     

  return (
    <div className='flex flex-col items-center gap-y-4  mx-auto mt-20 mb-20 bg-gradient-to-br from-cyan-50/60 to bg-purple-100/60 py-8'>
    <h1 className={'font-bold  lg:text-4xl text-3xl text-center text-[#181E4B] '}>Preset Desain</h1>
    <p className='text-center font-semibold p-2 bg-yellow-200'>Desain Terbaru</p>
    <div className=' mt-8 w-full max-w-[1500px] ' >
       {/* jkkj */}
        <SliderTerbaru slide={perSlide} loop={true}/>
    </div>
   
</div>
  )
  
}

export default LatestProd