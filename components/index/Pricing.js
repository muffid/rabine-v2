
import React, { useState } from 'react'
import { motion } from 'framer-motion';
import { BiCaretRight } from "react-icons/bi";
import { BsCheckLg } from "react-icons/bs";
import { FaLeaf,FaStar,FaCrown } from "react-icons/fa";

function Pricing(props) {

    const [isBasicClicked,setBasicClicked] = useState(false)
    const [isPremClicked,setPremClicked] = useState(false)
    const [isExcClicked,setIsExcClcked] = useState(false)
    const basic = props.fitur.paket.basic
    const premium = props.fitur.paket.premium

  return (
    <div id={`content${props.id}`} className='mt-20 md:w-full lg:w-3/4 mx-auto flex flex-col items-center justify-center gap-y-4 bg-gradient-to-br from-orange-50
                     to-purple-50 rounded-3xl py-8 px-12 mb-12'>
        <h1 className='text-4xl bold mb-4'>Harga Paket</h1>
        <div className='flex flex-col md:flex-row gap-x-8 justify-center w-full gap-y-6'>


            <div  className='bg-white rounded-xl px-6  flex flex-col items-start justify-between md:w-1/3 py-8 gap-y-3 md:self-start'>
                <div className='flex flex-row items-center gap-x-4 bold text-lg text-pink-800'>
                    <FaLeaf/>
                    <p>Reguler</p>
                </div>
               
                <div className='flex flex-row items-end mt-4 gap-x-1'>
                    <h1 className='text-slate-500 text-4xl'>Rp</h1>
                    <h1 className='semibold text-4xl'>100.</h1>
                    <h1 className='semibold text-xl  -ml-1'>000</h1>
                </div>
                <p className='text-xs text-slate-500 '>per undangan</p>
                <button className='rounded-lg px-5 py-3 w-full bg-pink-200 text-pink-900  bold hover:scale-105 hover:shadow-xl hover:shadow-pink-100 duration-75 '>Lihat Desain</button>
                <p className='bold text-sm mt-4'>Fitur Paket Basic</p>
                <motion.div layout transition={{
                    layout:{
                        duration:0.1
                    }
                }
            }  className='flex flex-col gap-y-1'>
                   {basic.less.map((item,index)=> (
                         <div key={index} className='flex flex-row items-center gap-x-3'>
                         <BsCheckLg className='text-emerald-500 text-xs'/>
                         <p className='text-slate-700 text-sm'>{item}</p>
                     </div>
                   ))}
                   
                    {isBasicClicked && (
                        <div  className='flex flex-col gap-y-1'>
                            {basic.more.map((item,index)=>(
                                <div key={index} className='flex flex-row items-center gap-x-3'>
                                    <BsCheckLg className='text-emerald-500 text-xs'/>
                                    <p className='text-slate-700 text-sm'>{item}</p>
                                </div>
                            ))}   
                        </div>)
                    }

                    <div className='flex flex-row gap-x-4 items-center mt-4 cursor-pointer text-blue-600'  onClick={()=>setBasicClicked(!isBasicClicked)}>
                        <h1 className='bold text-sm'>{isBasicClicked ? 'Lihat lebih sedikit' : 'Lihat lebih banyak'}</h1>  
                        <motion.h1 
                              animate={{ rotate: isBasicClicked ? -90 : 90 }}
                              transition={{ duration: 0.2 }}
                        className='bold '><BiCaretRight/></motion.h1>
                    </div>
                </motion.div>
            </div>

            <div className='bg-white rounded-xl px-6  flex flex-col items-start justify-between md:w-1/3 py-8 gap-y-3 relative md:self-start'>
                <div className='absolute top-3 right-4 bg-slate-100 text-teal-900 p-1 rounded-sm text-[0.65rem] bold'>POPULAR</div>
                <div className='flex flex-row items-center gap-x-4 bold text-lg text-pink-800'>
                    <FaStar/>
                    <p>Premium</p>
                </div>
             
                <div className='flex flex-row items-end mt-4 gap-x-1'>
                    <h1 className='text-slate-500 text-4xl'>Rp</h1>
                    <h1 className='semibold text-4xl'>175.</h1>
                    <h1 className='semibold text-xl  -ml-1'>000</h1>
                </div>
                <p className='text-xs text-slate-500 '>per undangan</p>
                <button className='rounded-lg px-5 py-3 w-full bg-pink-200 text-pink-900  bold hover:scale-105 hover:shadow-xl hover:shadow-pink-100 duration-75 '>Lihat Desain</button>
                <p className='bold text-sm mt-4'>Fitur Paket Premium</p>
                <motion.div layout transition={{
                    layout:{
                        duration:0.1
                    }
                }
            } className='flex flex-col gap-y-1'>
                      {premium.less.map((item,index)=> (
                         <div key={index} className='flex flex-row items-center gap-x-3'>
                         <BsCheckLg className='text-emerald-500 text-xs'/>
                         <p className='text-slate-700 text-sm'>{item}</p>
                     </div>
                   ))}
                   
                    {isPremClicked && (
                        <div  className='flex flex-col gap-y-1'>
                        {premium.more.map((item,index)=>(
                            <div key={index} className='flex flex-row items-center gap-x-3'>
                                <BsCheckLg className='text-emerald-500 text-xs'/>
                                <p className='text-slate-700 text-sm'>{item}</p>
                            </div>
                        ))}   
                    </div>)
                    }
                    
                    <div className='flex flex-row gap-x-4 items-center mt-4 cursor-pointer text-blue-600' onClick={()=>setPremClicked(!isPremClicked)}>
                    <h1 className='bold text-sm' >{isPremClicked ? 'Lihat lebih sedikit' : 'Lihat lebih banyak'}</h1>
                    <motion.h1 
                              animate={{ rotate: isPremClicked ? -90 : 90 }}
                              transition={{ duration: 0.2 }}
                        className='bold '><BiCaretRight/></motion.h1>
                    </div>
                </motion.div>
            </div>

            <div className='bg-white rounded-xl px-6  flex flex-col items-start justify-between md:w-1/3 gap-y-3 py-8 md:self-start'>
                <div className='flex flex-row items-center gap-x-4 bold text-lg text-pink-800'>
                    <FaCrown/>
                    <p>Exclusive</p>
                </div>
            
                <div className='flex flex-row items-end mt-4 gap-x-1'>
                    <h1 className='text-slate-500 text-2xl'>Cooming Soon</h1>
                   
                </div>
                
              
                <p className='text-sm text-slate-500 mt-4'>Maaf, untuk sementara ini fitur untuk kategori exclusive sedang dalam tahap pengembangan</p>
                <div className='flex flex-col gap-y-1'>
                  
                </div>
              
            </div>
        </div>  
    </div>
  )
}

export default Pricing