'use client'

import { useState } from 'react'
import Image from 'next/image'

import { Swiper, SwiperSlide } from 'swiper/react'
import {Autoplay, Navigation, Thumbs } from 'swiper/modules'



import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'

export default function Gallery({images,id}) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null)
 

  return (
    <div id={id} className='w-full flex flex-col items-center justify-center bg-white p-4  gap-y-8 text-[#151313]'>
 
      <div className='container'>
        {/* Thumbnail */}
        <Swiper
          onSwiper={setThumbsSwiper}
          loop={true}
          spaceBetween={12}
          slidesPerView={4}
        //   freeMode={true}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          watchSlidesProgress={true}
          modules={[Autoplay,Navigation, Thumbs]}
          className='thumbs mt-3 h-32 w-full rounded-lg'
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <button className='flex h-full w-full items-center justify-center'>
                <Image
                 width={1000}
                 height={1000}
                  src={image.src}
                  alt={image.alt}
                  className='block h-full w-full object-cover'
                />
              </button>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}