import React, { useState,useEffect,useRef } from 'react'
import 'swiper/css';
import "swiper/css/pagination";
import SliderTerbaru from './SliderTerbaru';

function LatestProd({data}) {
    const [windowSize, setWindowSize] = useState(3);
    const [perSlide,setPerSlide] = useState(1)
    const winRef = useRef(windowSize)

      useEffect(() => {
       if(window.innerWidth > 1023){
        setPerSlide(5)
       }
        function handleResize() {

            setWindowSize(window.innerWidth)
            winRef.current = windowSize;
            if(winRef.current < 800){
                setPerSlide(2)
            }else if(winRef.current >= 800 && winRef.current < 1023){
                setPerSlide(2)
            }else{
                setPerSlide(5)
            }

        }
    
        window.addEventListener('resize', handleResize)
            return () => {
        window.removeEventListener('resize', handleResize)
        }
          
      }, [windowSize])

     

  return (
    <div className='flex flex-col items-center gap-y-4  mx-auto py-20 bg-gradient-to-br from-cyan-50/60 to bg-purple-100/60'>
    <h1 className={'font-bold  lg:text-4xl text-3xl text-center text-[#181E4B] '}>Preset Desain</h1>
    <p className='text-center font-semibold p-2 bg-yellow-200'>Desain Terbaru</p>
    <div className=' mt-8 w-full max-w-[1500px] ' >
        <SliderTerbaru slide={perSlide} loop={true} data={data}/>
    </div>
   
</div>
  )
  
}

export default LatestProd