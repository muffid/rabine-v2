'use client'

import { useState } from 'react'
import Image from 'next/image'

import { Swiper, SwiperSlide } from 'swiper/react'
import {Autoplay, Navigation, Thumbs } from 'swiper/modules'



import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'

export default function Gallery({images}) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null)
 

  return (
    <div className='h-full  bg-black py-12 flex gap-y-8 flex-col items-center justify-center'  style={{backgroundImage: "url('/images/preset/A01/Template-1-Marble.webp')"}}>
      <h1 className='text-[2.5rem] font-Royal-Exq'>Our Moments</h1>
      <div className='container'>
        <Swiper
          loop={true}
          spaceBetween={10}
          navigation={false}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          thumbs={{
            swiper:
              thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null
          }}
          modules={[Autoplay,Navigation, Thumbs]}
          className='h-96 w-full rounded-lg'
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className='flex h-full w-full items-center justify-center'>
                <Image
                  src={image.src}
                    width={1000}
                    height={1000}
                  alt={image.alt}
                  className='block h-full w-full object-cover'
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

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