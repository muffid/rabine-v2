'use client'

import { useState } from 'react'
import Image from 'next/image'

import { Swiper, SwiperSlide } from 'swiper/react'
import {Autoplay, Navigation, Thumbs } from 'swiper/modules'



import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'

export default function GalleryFade({images,id}) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null)
 

  return (
    <div id={id} className='h-full w-full bg-white/90 backdrop-blur-xl py-12 flex gap-y-8 flex-col items-center justify-center px-4 '>
     
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
                  className=' h-full w-full object-cover rounded-lg'
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