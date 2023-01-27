import Image from 'next/image'
import React from 'react'
import { FaEye,FaCartPlus, FaStar } from 'react-icons/fa'


function DetailPreset({idPreset,namePreset,catPreset,imgPreset,priceP}) {
  return (
    <div className='mt-[110px] grid grid-cols-1 md:grid-cols-2 md:items-start lg:items-center justify-between gap-x-8 rounded-3xl border border-slate-200  px-8  py-6 gap-y-8 relative'>
        
        <div className='w-full relative mt-8 p-8 rounded-xl bg-slate-50'>
            <Image
                src={'/img/'+imgPreset}
                width={1000}
                height={1000}
                className='rounded-xl shadow-xl'
                alt='mobile-rabine'
            />
              {catPreset=== 'premium' ? (<div className='absolute bg-white shadow-lg flex items-center justify-center rounded top-6 right-6 text-lg  p-2 text-yellow-400'>
                            <FaStar/>
                        </div>) : ''}
           
        </div>

        <div className='flex flex-col items-start justify-center  h-full  p-8 gap-y-8'>
            <h1 className='bold text-2xl md:text-3xl lg:text-3xl text-[#2C090B]'>{namePreset}</h1>
            <div className='h-2 w-14 bg-orange-300 rounded-lg'></div>
            <div className='flex flex-col gap-y-2'>
                <p className='bold text-lg'>Rp. {priceP}</p>
                <p className={` ${catPreset === 'basic' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-orange-600'} text-center rounded-lg py-2 `}>{catPreset}</p>
            </div>
           
            <div className='flex flex-row gap-x-4 lg:gap-x-6 items-center flex-shrink-0 mt-2'>
                <div className=' hover:scale-110 hover:shadow-xl cursor-pointer flex flex-row items-center gap-x-4 transform duration-200 px-4 py-3  bg-white rounded-lg shadow-md '>
                   <FaEye/>
                   
                        <h1 className=' text-slate-900 text-sm '>Demo</h1>
                </div>

                <div className='hover:scale-110 hover:shadow-xl cursor-pointer flex flex-row items-center gap-x-4 transform duration-200 px-5 py-3 bg-gradient-to-r from-pink-600 to-orange-500 rounded-lg shadow-md '>
                   <FaCartPlus className='text-white'/>
                    <h1 className=' text-white text-sm  '>Order</h1>
                </div>
            </div>
        </div>
     
    
    </div>
  )
}

export default DetailPreset