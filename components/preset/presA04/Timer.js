'use client'
import React from 'react'
import { cinzel } from '../../globals/Fonts'
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
    <div className='w-full flex flex-col overflow-hidden items-center bg-white/90 backdrop-blur-xl justify-center bg-cover bg-center py-20 px-12 gap-y-8 text-[#3c3838] relative'>
        {/* <Image
            src={bgImage}
            width={1200}
            height={1200}
            className='w-full rounded-3xl absolute -top-40 left-0 object-contain'
            alt='appstore'
        /> */}
        <h1 className={'text-3xl '+cinzel.className}>SAVE THE DATE</h1>
     
         <div className={'grid grid-cols-2 gap-8 z-10 '+fadeUp}>
            <div className='flex flex-col items-center justify-center bg-white px-4 py-2 rounded-xl shadow-xl'>
              <h1 className='text-3xl font-bold'>{timeRemaining.days}</h1>
              <p className='text-sm'>Hari</p>
            </div>
            <div className='flex flex-col items-center justify-center bg-white px-4 py-2 rounded-xl shadow-xl'>
              <h1 className='text-3xl font-bold'>{timeRemaining.hours}</h1>
              <p  className='text-sm'>Jam</p>
            </div>
            <div className='flex flex-col items-center justify-center bg-white px-4 py-2 rounded-xl shadow-xl'>
              <h1 className='text-3xl font-bold'>{timeRemaining.minutes}</h1>
              <p className='text-sm'>Menit</p>
            </div>
            <div className='flex flex-col items-center justify-center bg-white px-4 py-2 rounded-xl shadow-xl'>
              <h1 className='text-3xl font-bold'>{timeRemaining.seconds}</h1>
              <p className='text-sm'>Detik</p>
            </div>
          </div>
          <button onClick={saveDate} className='text-white fadeUp flex flex-row items-center justify-center text-sm rounded-lg  gap-2 border bg-[#151313] border-white px-3 py-2 mt-8
                              hover:bg-white hover:text-black hover:scale-105 transition-all ease-out fadeUp'>
            <FaCalendarAlt/> Buat Pengingat
          </button>
      </div>
  )
}

export default Timer