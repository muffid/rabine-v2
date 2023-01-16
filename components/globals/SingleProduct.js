import React from 'react'
import { FaCartPlus, FaRegEye, FaStar } from 'react-icons/fa'
import Image from 'next/image'

function SingleProduct(props) {
  return (
    <div className='flex flex-col items-center justify-start  p-2 mt-4'>
        <div className='flex flex-col items-start  bg-white border rounded-2xl hover:shadow-xl hover:scale-105 transform transition '>
            <Image
                src={'/img/'+props.img}
                width={400}
                height={400}
                className='rounded-t-2xl w-full '
                style={{objectFit:`cover`}}
                alt='undangan online rabine.id'
            />
            {props.cat === 'PREMIUM' ? (<div className='absolute bg-white flex items-center justify-center rounded top-2 right-2 p-2 text-yellow-400'>
                            <FaStar/>
                        </div>) : ''}
            <div className='p-4 flex flex-row items-start justify-between w-full max-w-[300px] gap-x-2'>
                <h1 className='bold text-sm md:text-lg'>{props.name}</h1>
                
            </div>
            <div className='flex flex-row justify-between w-full items-center text-orange-300 text-[0.65rem] px-4'>
                <div className='flex flex-row'><FaStar/><FaStar/><FaStar/><FaStar/></div>
                <h1 className={`text-[0.60rem] bold  p-1 md:p-2 rounde ${props.cat === 'PREMIUM' ? 'bg-yellow-100 text-yellow-800' : 'bg-green-100 text-green-800'}` }>{props.cat}</h1>
            </div>
            <div className='p-4 flex  gap-y-3  flex-row items-center w-full max-w-[300px] gap-x-2'>
                <button className='bg-slate-100 px-3 py-1 rounded base text-sm flex flex-row items-center gap-x-3 base'><FaRegEye/></button>
                <button className='bg-emerald-600 px-2 w-full py-1 text-white rounded base text-sm flex flex-row items-center justify-center gap-x-2 base'><FaCartPlus/><span className='hidden md:inline'>Order Preset</span></button>
            </div>
        </div>
    </div>
  )
}

export default SingleProduct