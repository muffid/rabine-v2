import Image from 'next/image'
import React, { useState } from 'react'
import { HiMenuAlt3} from "react-icons/hi";

function Navbar() {
    const [hoverMenu,setHoverMenu] = useState(0)
    const [menuActive,setMenuActive] = useState(1)

  return (
    <div className='w-full bg-white/90 '>
    <div className=' max-w-[1200px] mx-auto px-8 flex flex-row items-center justify-between base text-slate-700  md:py-6 lg:py-8 py-4'>
        {/* <h1 className=' xbold lg:text-3xl text-2xl cursor-pointer text-[#2C090B]'>rabine.id</h1> */}
        <div className='flex flex-col items-end gap-y-4'>
            <Image
                src='/img/rabine.png'
                width={200}
                height={200}
                className='w-[110px] cursor-pointer hover:scale-110 transform duration-150'
            />
           
        </div>
        <div className='flex flex-row items-center justify-between gap-x-8'>
            <div className='hidden lg:flex flex-row items-center justify-between gap-x-6 text-sm bold '>
                <div className=' cursor-pointer relative '>
                    <p onMouseEnter={()=>setHoverMenu(1)} onMouseLeave={()=>setHoverMenu(0)} onClick={()=>setMenuActive(1)}>Home</p>
                    <div className={hoverMenu===1 || menuActive===1 ? 'visible'+' absolute -bottom-2 h-[0.2rem] w-6  bg-orange-600 rounded-xl duration-300' : 'invisible'}></div>
                </div>

                <div className=' cursor-pointer relative'>
                    <p onMouseEnter={()=>setHoverMenu(2)} onMouseLeave={()=>setHoverMenu(0)} onClick={()=>setMenuActive(2)}>About us</p>
                    <div className={hoverMenu===2 || menuActive===2 ? 'visible'+' absolute -bottom-2 h-[0.2rem] w-6  bg-orange-600 rounded-xl duration-300' : 'invisible'}></div>
                </div>

                <div className=' cursor-pointer relative'>
                    <p onMouseEnter={()=>setHoverMenu(3)} onMouseLeave={()=>setHoverMenu(0)} onClick={()=>setMenuActive(3)}>Pricing</p>
                    <div className={hoverMenu===3 || menuActive===3 ? 'visible'+' absolute -bottom-2 h-[0.2rem] w-6  bg-orange-600 rounded-xl duration-300' : 'invisible'}></div>
                </div>

                <div className=' cursor-pointer relative'>
                    <p onMouseEnter={()=>setHoverMenu(4)} onMouseLeave={()=>setHoverMenu(0)} onClick={()=>setMenuActive(4)}>Products</p>
                    <div className={hoverMenu===4 || menuActive===4 ?  'visible'+' absolute -bottom-2 h-[0.2rem] w-6  bg-orange-600 rounded-xl duration-300' : 'invisible'}></div>
                </div>

                <div className=' cursor-pointer relative'>
                    <p onMouseEnter={()=>setHoverMenu(6)} onMouseLeave={()=>setHoverMenu(0)} onClick={()=>setMenuActive(6)}>Blog</p>
                    <div className={hoverMenu===6 || menuActive===6 ? 'visible'+' absolute -bottom-2 h-[0.2rem] w-6  bg-orange-600 rounded-xl duration-300' : 'invisible'}></div>
                   
                </div>

                <div className=' cursor-pointer relative'>
                    <p onMouseEnter={()=>setHoverMenu(5)} onMouseLeave={()=>setHoverMenu(0)} onClick={()=>setMenuActive(5)}>Contact</p>
                    <div className={hoverMenu===5 || menuActive===5 ? 'visible'+' absolute -bottom-2 h-[0.2rem] w-6  bg-orange-600 rounded-xl duration-300' : 'invisible'}></div>
                </div>

                
            </div>
            <button className='hidden lg:inline bg-orange-500 p-4 rounded-xl text-white text-xs hover:bg-orange-600 hover:scale-105 transform duration-200 hover:shadow-xl hover:shadow-orange-200'>Get The App</button>
            <HiMenuAlt3 className='text-2xl cursor-pointer'/>
        </div>
    </div>
    </div>
  )
}

export default Navbar