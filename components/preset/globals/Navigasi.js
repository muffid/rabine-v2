import React from 'react'
import Image from 'next/image'
import { useState,useEffect } from 'react'
import { FaCalendarAlt, FaMapMarked, FaCamera, FaComment, FaGifts } from "react-icons/fa"

const Navigasi = ({imgThumb}) => {
    const [scrollTo, setScrollTo] = useState('opening')
    const scrollToTarget = (targetId) => {
        setScrollTo(targetId)
     }
     useEffect(()=>{
        const element = document.getElementById(`${scrollTo}`)
        element.scrollIntoView({behavior:'smooth'})
      },[scrollTo])
  return (
    <div className='lg:hidden flex flex-row text-white text-xl items-center justify-center w-full fixed z-10 bottom-0 py-6 bg-[#3c3838]/50 backdrop-blur-xl space-x-6 '>
      <div className='flex flex-col items-center gap-y-1' onClick={()=>scrollToTarget('mempelai')}>
          <Image
            src={imgThumb}
            width={1200}
            height={1200}
            className='w-12 object-cover h-12 rounded-full shadow-xl'
            alt='appstore'
          />
      </div>
      <div className='flex flex-col items-center gap-y-1' onClick={()=>scrollToTarget('jadwal')}><FaCalendarAlt/> <h1 className='text-xs'>Tanggal</h1></div>
      <div className='flex flex-col items-center gap-y-1' onClick={()=>scrollToTarget('lokasi')}><FaMapMarked/> <h1 className='text-xs'>Map</h1></div>
      <div className='flex flex-col items-center gap-y-1' onClick={()=>scrollToTarget('gallery')}><FaCamera/> <h1 className='text-xs'>Galery</h1></div>
      <div className='flex flex-col items-center gap-y-1' onClick={()=>scrollToTarget('doa')}><FaComment/> <h1 className='text-xs'>Doa</h1></div>
      <div className='flex flex-col items-center gap-y-1' onClick={()=>scrollToTarget('gift')}><FaGifts/> <h1 className='text-xs'>Hadiah</h1></div>    
    </div>
  )
}

export default Navigasi