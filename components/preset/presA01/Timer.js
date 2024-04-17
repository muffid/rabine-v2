'use client'
import React from 'react'
import Image from 'next/image'
import { useState, useEffect,useRef} from 'react'
import { FaRegCalendarPlus } from "react-icons/fa"
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
    <div className='w-full flex flex-col items-center justify-center bg-black py-20 px-12 gap-y-8 relative'>
       <Image
          src={bgImage}
          fill
          style={{objectFit:"cover"}}
          className='absolute'
          sizes="100vw"
        />
        <h1 className={'text-[2.5rem] font-Royal-Exq '+fadeUp}>Save The Date</h1>
         <div className={'grid grid-cols-4 gap-4 '+fadeUp}>
            <div className='flex flex-col items-center justify-center'>
              <h1 className='text-[2rem] font-Royal-Exq'>{timeRemaining.days}</h1>
              <p>Hari</p>
            </div>
            <div className='flex flex-col items-center justify-center'>
              <h1 className='text-[2rem] font-Royal-Exq'>{timeRemaining.hours}</h1>
              <p>Jam</p>
            </div>
            <div className='flex flex-col items-center justify-center'>
              <h1 className='text-[2rem] font-Royal-Exq'>{timeRemaining.minutes}</h1>
              <p>Menit</p>
            </div>
            <div className='flex flex-col items-center justify-center'>
              <h1 className='text-[2rem] font-Royal-Exq'>{timeRemaining.seconds}</h1>
              <p>Detik</p>
            </div>
          </div>
          <button onClick={saveDate} className={'flex flex-row items-center justify-center gap-2 border border-white px-5 py-2 hover:bg-white hover:text-black hover:scale-105 transition-all ease-out '+fadeUp}>
            <FaRegCalendarPlus/>
            simpan tanggal
          </button>
      </div>
  )
}

export default Timer