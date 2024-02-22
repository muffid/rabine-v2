'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';



// import required modules
import { EffectFade, Navigation, Autoplay, } from 'swiper/modules';

const GalleryFade = ({images}) => {
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
                <img src={image.src}/>
            </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default GalleryFade