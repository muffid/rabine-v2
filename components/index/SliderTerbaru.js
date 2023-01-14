import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay,Pagination,Navigation } from 'swiper';
import 'swiper/css';
import "swiper/css/pagination";
import SingleProduct from '../globals/SingleProduct';




function SliderTerbaru(props) {
  return (
    <div className='px-6 lg:px-4'>
         <Swiper
            loop={props.loop}
            slidesPerView={props.slide}
            spaceBetween={5}
            centeredSlides={true}
            autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            }}
       
            pagination={{
            clickable: true,
            }}
          
            modules={[Autoplay,Pagination, Navigation]}
            className="mySwiper py-8 flex flex-col gap-y-8"
        >
          <SwiperSlide>
            <SingleProduct name='Moss Summer' cat='BASIC' img='prod1.jpg'/>
          </SwiperSlide>
          <SwiperSlide>
            <SingleProduct name='Dorby Cassen' cat='PREMIUM' img='prod2.jpg'/>
          </SwiperSlide>
          <SwiperSlide>
            <SingleProduct name='Faded Corny' cat='PREMIUM' img='prod4.jpg'/>
          </SwiperSlide>
          <SwiperSlide>
            <SingleProduct name='Lunar Sage' cat='BASIC' img='prod5.jpg'/>
          </SwiperSlide>
        </Swiper> 
    </div>
  )
}

export default SliderTerbaru