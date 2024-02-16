'use client'
import React from 'react'
import { useState, useEffect,useRef} from 'react'
import { FaRegCalendarPlus } from "react-icons/fa"
const Timer = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date('2024-05-24T08:00:00Z') - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const timerRef = useRef(null);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timerRef.current);
  }, []);

  return (
    <div className='w-full flex flex-col items-center justify-center bg-black py-20 px-12 gap-y-8'>
        <h1 className='text-3xl'>Save The Date</h1>
         <div className='grid grid-cols-4 gap-4'>
            <div className='flex flex-col items-center justify-center'>
              <h1 className='text-3xl'>{timeLeft.days}</h1>
              <p>Hari</p>
            </div>
            <div className='flex flex-col items-center justify-center'>
              <h1 className='text-3xl'>{timeLeft.hours}</h1>
              <p>Jam</p>
            </div>
            <div className='flex flex-col items-center justify-center'>
              <h1 className='text-3xl'>{timeLeft.minutes}</h1>
              <p>Menit</p>
            </div>
            <div className='flex flex-col items-center justify-center'>
              <h1 className='text-3xl'>{timeLeft.seconds}</h1>
              <p>Detik</p>
            </div>
          </div>
          <button className='flex flex-row items-center justify-center gap-2 border border-white px-5 py-2
                            hover:bg-white hover:text-black hover:scale-105 transition-all ease-out'>
            <FaRegCalendarPlus/>
            simpan tanggal
          </button>
      </div>
  )
}

export default Timer