import Image from 'next/image'
import React from 'react'
import { FaEye,FaCartPlus, FaStar } from 'react-icons/fa'
import { useRouter } from 'next/router'
import Link from 'next/link';

function DetailPreset({idPreset,namePreset,catPreset,imgPreset,priceP,slug}) {
    const router= useRouter()
    const dynamicLink = '/preset/'+slug;
   
  return (
    <div className='mt-[110px] grid grid-cols-1 md:grid-cols-2 md:items-start lg:items-center justify-between gap-x-8 rounded-3xl border bg-slate-50 border-slate-200  md:px-6  md:py-4 gap-y-8 relative'>
        
        <div className='w-full relative md:mt-8 p-8 rounded-t-3xl bg-white'>
            <Image
                src={imgPreset}
                width={1000}
                height={1000}
                className='rounded-xl shadow-xl  lg:w-[70%]'
                alt='mobile-rabine'
            />
              {catPreset=== 'premium' ? (<div className='absolute bg-white shadow-lg flex items-center justify-center rounded top-6 right-6 text-lg  p-2 text-yellow-400'>
                            <FaStar/>
                        </div>) : ''}
           
        </div>

        <div className='flex flex-col items-start justify-center  h-full  p-8 gap-y-4'>
            <h1 className='bold text-2xl md:text-3xl lg:text-3xl text-[#2C090B]'>{namePreset}</h1>
            <div className='h-2 w-14 bg-orange-300 rounded-lg'></div>
            <div className='flex flex-col gap-y-4 flex-grow-0 items-start'>
                <p className='bold text-lg'>Rp. {priceP}</p>
                <p className={`${catPreset === 'basic' ? 'bg-green-100 text-green-800' : 'bg-orange-100 text-orange-600'} px-1 `}>{catPreset}</p>
             
                    {/* <div className='grid grid-flow-col gap-x-4 gap-y-4 text-sm'>
                        {tagPreset.map((item)=>
                            <p key={item} className='text-slate-600 px-2 py-1 rounded-xl border cursor-pointer hover:bg-white hover:shadow-lg flex-grow-0'>{item}</p>
                        )}
                    </div> */}
            
              
            </div>
           
            <div className='flex flex-row gap-x-4 lg:gap-x-6 items-center flex-shrink-0 mt-2'>
          
                <a target="_blank" onClick={(e) => {e.preventDefault(); window.open('https://rabine.vercel.app/preset/'+slug+'?to=Tamu', '_blank')}} className=' hover:scale-110 hover:shadow-xl cursor-pointer flex flex-row items-center gap-x-4 transform duration-200 px-4 py-3  bg-white rounded-full shadow-md '>
                   <FaEye/>
                   
                        <h1 className=' text-slate-900 text-sm '>Demo</h1>
                </a>
         

                <div className='hover:scale-110 hover:shadow-xl cursor-pointer flex flex-row items-center gap-x-4 transform duration-200 px-5 py-3 bg-gradient-to-r from-pink-600 to-orange-500 rounded-full shadow-md '>
                   <FaCartPlus className='text-white'/>
                    <h1 className=' text-white text-sm  '>Order</h1>
                </div>
            </div>
        </div>
     
    
    </div>
  )
}

export default DetailPreset