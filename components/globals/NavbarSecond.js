import Image from 'next/image'
import React, { useState } from 'react'
import { HiMenuAlt3, HiSearch} from "react-icons/hi";
import { BiXCircle,BiHomeCircle,BiInfoCircle,BiNews,BiPhoneCall,BiDotsVertical,BiEnvelopeOpen } from 'react-icons/bi'
import { motion } from 'framer-motion'
import { useRecoilState } from 'recoil';
import { navState } from '../../recoil/navState';
import { useRouter } from 'next/router';

function NavbarSecond() {
    const [hoverMenu,setHoverMenu] = useState(0)
    const [menuActive,setMenuActive] = useRecoilState(navState)
    const[isOpen,setIsOpen] = useState(false)
    const router = useRouter()

    function goToHome(){
      router.push({
        pathname:'/'
      })
    }

  return (
    <div className='w-full bg-white/80 backdrop-blur-sm fixed top-0 z-20 border-b '>
        <div className=' max-w-[1200px] mx-auto px-8 flex flex-row items-center justify-between base text-slate-700  py-6 relative '>
      
        <motion.div
            initial={{x:'100vw'}}
            animate={{x: isOpen ? 0 : '100vw'}}
            transition={{duration:0.3,ease:'backInOut'}}
            className='drawer absolute  h-[100vh] w-[100vw]  top-0 z-50 right-0 md:hidden '>
            <div className='bg-gradient-to-r from-pink-600 to-orange-500 w-full p-6 flex flex-row items-center justify-end text-sm gap-x-2 pr-18'>
                <p className='text-white mr-24 bold text-base'>rabine.id</p>
                <p className='text-white ' onClick={()=>setIsOpen(false)}>Close</p>
                <BiXCircle className=' text-white'onClick={()=>setIsOpen(false)}/>
            </div>
                
            <div className='w-full h-full bg-white/95 backdrop-blur-sm flex flex-col items-end p-8 rounded-b-xl gap-y-6 justify-between text-lg relative'>
                <div className='bg-white h-16 w-8 -left-3 top-[40%] absolute rounded-xl  flex items-center justify-center'>
                    <BiDotsVertical className='text-2xl cursor-pointer'onClick={()=>setIsOpen(false)}/>
                </div>
                <div className='flex flex-col items-end gap-y-7 semibold text-sm'>
                    <div className='flex flex-row items-center gap-x-5  rounded-xl 'onClick={()=>{setIsOpen(false);setMenuActive(1);goToHome()}}>
                        <p>Beranda</p>
                        <BiHomeCircle/>
                    </div>

                    <div className='flex flex-row items-center gap-x-5  rounded-xl'onClick={()=>{setIsOpen(false);setMenuActive(3);goToHome()}}>
                        <p>Harga</p>
                        <BiInfoCircle/>
                    </div>
                    <div className='flex flex-row items-center gap-x-5  rounded-xl' onClick={()=>{setIsOpen(false);setMenuActive(5);goToHome()}}>
                        <p>Template</p>
                        <BiEnvelopeOpen/>
                    </div>

                    <div className='flex flex-row items-center gap-x-5  rounded-xl' onClick={()=>{setIsOpen(false);setMenuActive(6);goToHome()}}>
                        <p>Blog</p>
                        <BiNews/>
                    </div>

                    <div className='flex flex-row items-center gap-x-5  rounded-xl'>
                        <p>Kontak</p>
                        <BiPhoneCall/>
                    </div>
                </div>
            </div>
        </motion.div>

            <div className='flex flex-col items-end gap-y-4'>
                <Image
                  onClick={()=>{goToHome();setMenuActive(1)}}
                    src='/img/rabine.png'
                    width={200}
                    height={200}
                    className='w-[110px] cursor-pointer hover:scale-110 transform duration-150'
                    alt='phone_rabine'
                />
            
            </div>
            <div className='flex flex-row items-center justify-between gap-x-4'>
                <div className='hidden md:flex flex-row items-center justify-between gap-x-6 text-sm bold '>
                    <div className=' cursor-pointer relative '>
                        <p onMouseEnter={()=>setHoverMenu(1)} onMouseLeave={()=>setHoverMenu(0)} onClick={()=>{setMenuActive(1);goToHome()}}>Beranda</p>
                        <div className={hoverMenu===1 || menuActive===1 ? 'visible'+' absolute -bottom-2 h-[0.2rem] w-6  bg-orange-600 rounded-xl duration-300' : 'invisible'}></div>
                    </div>

             
                    <div className=' cursor-pointer relative'>
                        <p onMouseEnter={()=>setHoverMenu(3)} onMouseLeave={()=>setHoverMenu(0)} onClick={()=>{setMenuActive(3);goToHome()}}>Harga</p>
                        <div className={hoverMenu===3 || menuActive===3 ? 'visible'+' absolute -bottom-2 h-[0.2rem] w-6  bg-orange-600 rounded-xl duration-300' : 'invisible'}></div>
                    </div>

                    <div className=' cursor-pointer relative'>
                        <p onMouseEnter={()=>setHoverMenu(5)} onMouseLeave={()=>setHoverMenu(0)} onClick={()=>{setMenuActive(5);goToHome()}}>Template</p>
                        <div className={hoverMenu===5 || menuActive===5 ?  'visible'+' absolute -bottom-2 h-[0.2rem] w-6  bg-orange-600 rounded-xl duration-300' : 'invisible'}></div>
                    </div>

                    <div className=' cursor-pointer relative'>
                        <p onMouseEnter={()=>setHoverMenu(6)} onMouseLeave={()=>setHoverMenu(0)} onClick={()=>{setMenuActive(6);goToHome()}}>Blog</p>
                        <div className={hoverMenu===6 || menuActive===6 ? 'visible'+' absolute -bottom-2 h-[0.2rem] w-6  bg-orange-600 rounded-xl duration-300' : 'invisible'}></div>
                    
                    </div>

                    <div className=' cursor-pointer relative'>
                        <p onMouseEnter={()=>setHoverMenu(5)} onMouseLeave={()=>setHoverMenu(0)} onClick={()=>setMenuActive(9)}>Kontak</p>
                        <div className={hoverMenu===9 || menuActive===9 ? 'visible'+' absolute -bottom-2 h-[0.2rem] w-6  bg-orange-600 rounded-xl duration-300' : 'invisible'}></div>
                    </div>
                </div>
                <button className='hidden lg:inline bg-gradient-to-r from-pink-600 to-orange-500 p-3 rounded-3xl  text-white text-xs ml-6  hover:scale-105 transform duration-200 '>Order Sekarang</button>
                <div className='flex flex-row items-center ml-8 gap-x-4 lg:ml-4'> 
                    <HiSearch className='text-2xl cursor-pointer'/>
                    <HiMenuAlt3 className='text-2xl cursor-pointer md:hidden' onClick={()=>setIsOpen(true)}/>
                </div>
              
            </div>
        </div>
    </div>
  )
}

export default NavbarSecond