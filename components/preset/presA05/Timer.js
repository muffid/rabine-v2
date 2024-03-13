'use client'
import React from 'react'
import { cinzel } from '../../globals/Fonts'
import { useState, useEffect,useRef} from 'react'
import { FaCalendarAlt, FaRegCalendarPlus } from "react-icons/fa"
import Image from 'next/image'

const Timer = (props) => {
    const gDrive = "https://drive.usercontent.google.com/download?id="
    const gDriveAuth ="&authuser=0"
  const propsTarget = props.targetDate
  const fadeUp = props.anim.fadeUp
  const bgImage = props.bgImage
  const [timeRemaining, setTimeRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

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
    <div className='w-full flex flex-col overflow-hidden items-center text-[#A88C60] bg-[#1D1E18] backdrop-blur-xl justify-center bg-cover bg-center py-20 px-12 gap-y-8  relative'>
        {/* <Image
            src={bgImage}
            width={1200}
            height={1200}
            className='w-full rounded-3xl absolute -top-40 left-0 object-contain'
            alt='appstore'
        /> */}
     
     
         <div className={'flex flex-row items-center z-10 w-full h-full space-x-5 '+fadeUp}>
            <div className='w-1/3 h-full flex  items-center justify-center '>
                <Image
                    src={gDrive+'1oh-k5jkDJ0dnIhEyccf4fb21h2tmO3bu'+gDriveAuth}
                    width={1200}
                    height={1200}
                    className=' object-cover fadeUp'
                    alt='appstore'
                />
            </div>
            <div className='h-48 w-[1px] bg-[#A88C60]'></div>
            <div className='w-2/3 flex flex-1 h-full flex-col items-start text-left gap-y-3'>
                <h1 className={'text-3xl mb-6'}>SAVE THE DATE</h1>
                <div className='flex flex-row items-center space-x-2'>
                    <h1 className='text-6xl font-bold text-white'>{timeRemaining.days}</h1>
                    <p className='text-xl'>Hari</p>
                </div>
                <div className='flex flex-row space-x-4 items-center'>
                    <div className='flex flex-row items-center space-x-2'>
                        <h1 className='text-3xl font-bold text-white'>{timeRemaining.hours}</h1>
                        <p className='text-lg'>Jam</p>
                    </div>
                    <div className='flex flex-row items-center space-x-2'>
                        <h1 className='text-3xl font-bold text-white'>{timeRemaining.minutes}</h1>
                        <p className='text-lg'>Menit</p>
                    </div>
                    <div className='flex flex-row items-center space-x-2'>
                        <h1 className='text-3xl font-bold text-white'>{timeRemaining.seconds}</h1>
                        <p className='text-lg'>Detik</p>
                    </div>
                </div>
            </div>            
          </div>
          <button className='text-white fadeUp flex flex-row items-center justify-center text-sm rounded-lg  gap-2 border bg-[#151313] border-white px-3 py-2 mt-8
                              hover:bg-white hover:text-black hover:scale-105 transition-all ease-out fadeUp'>
            <FaCalendarAlt/> Buat Pengingat
          </button>
      </div>
  )
}

export default Timer