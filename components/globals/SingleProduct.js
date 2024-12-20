import React from 'react'
import {  FaStar } from 'react-icons/fa'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { navState } from '../../recoil/navState';
import { useRecoilState } from 'recoil';

function SingleProduct(props) {

    const [menuActive,setMenuActive] = useRecoilState(navState)
    const router= useRouter()
    function viewProduct(){
        setMenuActive(5)
        router.push({
            pathname:`/product_detail/${props.slug}`
          
        })
    }

  return (
   <div className='flex flex-col items-center justify-start  p-2 mt-4 ' onClick={()=>viewProduct()}>
        <div className='flex flex-col items-start  bg-white border rounded-2xl hover:shadow-xl cursor-pointer hover:scale-105 transform transition '>
            <Image
                src={props.img}
                width={400}
                height={400}
                className='rounded-t-2xl w-full '
                style={{objectFit:`cover`}}
                alt='undangan online rabine.id'
            />
            {props.cat === 'premium' ? (<div className='absolute bg-white flex items-center justify-center rounded top-2 right-2 p-2 text-yellow-400'>
                            <FaStar/>
                        </div>) : ''}
            <div className='p-4 flex flex-row items-start justify-between w-full max-w-[300px] gap-x-2'>
                <h1 className='bold text-sm md:text-base'>{props.name}</h1>
                
            </div>
            <div className='flex flex-row justify-between w-full items-center text-orange-300 text-[0.65rem] px-5 py-4' >
                <div className='flex flex-row'><FaStar/><FaStar/><FaStar/><FaStar/></div>
                <h1 className={`text-xs   p-1 md:p-2 rounded-lg ${props.cat === 'Premium' ? 'bg-yellow-100 text-orange-600' : 'bg-green-100 text-green-800'}` }>{props.cat}</h1>
            </div>
            
        </div>
    </div>
 
  )
}

export default SingleProduct