'use client'
import React from 'react'
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';



// import required modules
import { EffectFade, Navigation, Autoplay, } from 'swiper/modules';

const SlideOpening = ({images}) => {
  return (
    <div className='w-full'>
         <Swiper
            spaceBetween={30}
            effect={'fade'}
            fadeEffect={{ crossFade: true }}
            loop={true}
            navigation={false}
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
            }}
            modules={[Autoplay, EffectFade, Navigation]}
            className="mySwiper"
        >

        {images.map((image,index) =>(
            <SwiperSlide key={index}>
                  <Image
                            src={image.src}
                            width={1200}
                            height={1200}
                            className='w-full object-cover h-full'
                            alt='appstore'
                        />
            </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default SlideOpening