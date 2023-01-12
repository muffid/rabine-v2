import React, { useState } from 'react'
import { BiXCircle,BiHomeCircle,BiInfoCircle,BiDollar,BiCartAlt,BiNews,BiPhoneCall } from 'react-icons/bi'
import { motion } from 'framer-motion'

function DrawerMenu(open) {
    const [isOpen, setIsOpen] = useState(open)
    console.log(isOpen)
  return (
    <motion.div

        initial={{x:'-100%'}}
        animate={{x: isOpen ? 0 : '-500%'}}
        transition={{duration:0.2}}

        className='drawer absolute  h-[900px] w-[250px] -right-[0px] top-0 z-50  '>
        <div className='bg-red-800 w-full p-6 flex flex-row items-center justify-end  gap-x-2'>
            <p className='text-white text-lg' onClick={()=>setIsOpen(false)}>Close</p>
            <BiXCircle className='text-2xl text-white'/>
        </div>
            
        <div className='w-full h-full bg-white flex flex-col items-end p-8 rounded-b-xl gap-y-6 justify-between text-lg'>
            
            <div className='flex flex-col items-end gap-y-2 semibold'>
                <div className='flex flex-row items-center gap-x-5 bg-white p-4 rounded-xl'>
                    <p>Home</p>
                    <BiHomeCircle/>
                </div>

                <div className='flex flex-row items-center gap-x-5 bg-white p-4 rounded-xl'>
                    <p>About us</p>
                    <BiInfoCircle/>
                </div>

                <div className='flex flex-row items-center gap-x-5 bg-white p-4 rounded-xl'>
                    <p>Pricing</p>
                    <BiDollar/>
                </div>

                <div className='flex flex-row items-center gap-x-5 bg-white p-4 rounded-xl'>
                    <p>Products</p>
                    <BiCartAlt/>
                </div>

                <div className='flex flex-row items-center gap-x-5 bg-white p-4 rounded-xl'>
                    <p>Blog</p>
                    <BiNews/>
                </div>

                <div className='flex flex-row items-center gap-x-5 bg-white p-4 rounded-xl'>
                    <p>Contact</p>
                    <BiPhoneCall/>
                </div>
            </div>
        </div>
    </motion.div>
  )
}

export default DrawerMenu