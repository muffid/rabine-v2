import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay,Pagination,Navigation } from 'swiper';
import 'swiper/css';
import "swiper/css/pagination";
import SingleProduct from '../globals/SingleProduct';

function SliderTerbaru(props) {
  
  return (
    <div className='px-6 lg:px-0'>
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
            {props.data.map((items)=>
              <SwiperSlide  key={items.id}>
                 <SingleProduct  id={items.id} img={items.img} cat={items.category} name={items.title} tag={items.tag}/>
              </SwiperSlide>
                
            )}
 
        </Swiper> 
    </div>
  )
}

export default SliderTerbaru