'use client'
import React from 'react'
import Image from 'next/image'
import { useState, useEffect,useRef} from 'react'
import { FaCalendarAlt, FaRegCalendarPlus } from "react-icons/fa"
const Timer = (props) => {
  const propsTarget = props.targetDate
  const fadeUp = props.anim.fadeUp
  const bgImage = props.bgImage
  const url = props.url
  const [timeRemaining, setTimeRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const saveDate = () => {
    window.open(url, '_blank');
  }

  useEffect(() => {
    const targetDate = new Date(propsTarget);
    const intervalId = setInterval(() => {
      const now = new Date();
      const difference = targetDate - now;

    
      
      if (difference <= 0) {
        clearInterval(intervalId);
        setTimeRemaining({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0
        });
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        
        setTimeRemaining({
          days,
          hours,
          minutes,
          seconds
        });
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [propsTarget]);
  return (
    <div className='w-full flex flex-col items-center justify-center bg-cover bg-center py-20 px-12 gap-y-8 bg-[#222831] text-white relative'>
        {/* <Image
          src={bgImage}
          fill
          style={{objectFit:"cover"}}
          className='absolute'
          sizes="100vw"
        /> */}
        
         <div className={'grid grid-cols-4 gap-8 '+fadeUp}>
            <div className='flex flex-col items-center justify-center'>
              <h1 className='text-4xl italic'>{timeRemaining.days}</h1>
              <p className='italic '>Days</p>
            </div>
            <div className='flex flex-col items-center justify-center'>
              <h1 className='text-4xl italic'>{timeRemaining.hours}</h1>
              <p className='italic'>Hours</p>
            </div>
            <div className='flex flex-col items-center justify-center'>
              <h1 className='text-4xl italic'>{timeRemaining.minutes}</h1>
              <p className='italic'>Mins</p>
            </div>
            <div className='flex flex-col items-center justify-center'>
              <h1 className='text-4xl italic'>{timeRemaining.seconds}</h1>
              <p className='italic'>Secs</p>
            </div>
          </div>
          <button onClick={saveDate} className='text-[#222831] fadeUp flex flex-row items-center justify-center text-sm rounded-lg gap-2  bg-[#DFD0B8]  px-6 py-2 mt-4 mb-8
                            hover:bg-white hover:text-black hover:scale-105 transition-all ease-out fadeUp'>
            <FaCalendarAlt/> Buat Pengingat
          </button>
            <Image
                src={bgImage}
                width={1200}
                height={1200}
                className='w-[100px] fadeUp'
                alt='appstore'
            />
      </div>
  )
}

export default Timer