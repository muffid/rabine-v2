import Image from 'next/image'
import React from 'react'

function Beralih() {
  return (
    <div className='grid grid-cols-1 lg:flex flex-row items-center mt-28 bg-slate-100/50 justify-between md:gap-x-6 relative border rounded-3xl'>
        <div className='w-full flex items-end justify-end'>
        <Image
                    src='/img/MODEL_1.png'
                    width={1000}
                    height={1000}
                    alt='woman Rabine.id'
                    style={{objectFit:`cover`}}
                    className='w-[170px] md:w-[270px] mr-8 lg:absolute z-10 -top-16'
                />
        <Image
                    src='/img/BG_LOVE.png'
                    width={1000}
                    height={1000}
                    alt='Bg Love Rabine.id'
                    style={{objectFit:`cover`}}
                    className=' w-[1200px] max-h-[490px] top-0 left-0 opacity-50 absolute -z-0 rounded-2xl '
                />
        </div>
        
        <div className='flex flex-col items-start gap-y-6 p-8 w-full z-10'>
            <p className='text-slate-500 xbold'>GET CONNECTED</p>
            <h1 className='text-[#2C090B] text-4xl md:text-4xl bold'>Share your memories with your travel buddys</h1>
            <div className='h-1 w-16 bg-orange-300 rounded-xl'></div>
            <p className='text-sm semibold'>
            Berbagai manfaat yang kamu peroleh jika kamu pakai undangan digital
            </p>
            <div className='flex flex-col items-start gap-y-4'>
                <div className='flex flex-row items-center gap-x-5'>
                    <div className='flex items-center justify-center bg-white h-14 w-14 shadow-md rounded-xl flex-shrink-0'>
                        <Image
                            src='/img/snap.png'
                            width={500}
                            height={500}
                            className='w-8'
                            alt='rabine easy'
                        />
                    </div>
                    <div className='flex flex-col items-start gap-y-1'>
                        <h1 className=' bold'>Berbagai macam kemudahan</h1>
                        <p className='text-xs text-slate-600'> will be distracted by the readable content
                            of a page when</p>
                    </div>
                </div>

                <div className='flex flex-row items-center gap-x-5'>
                    <div className='flex items-center justify-center bg-white h-14 w-14 shadow-md rounded-xl flex-shrink-0'>
                        <Image
                            src='/img/decrease.png'
                            width={500}
                            height={500}
                            className='w-8'
                            alt='rabine easy'
                        />
                    </div>
                    <div className='flex flex-col items-start gap-y-1'>
                        <h1 className=' bold'>Biaya lebih murah</h1>
                        <p className='text-xs text-slate-600'> will be distracted by the readable content
                            of a page when</p>
                    </div>
                </div>

                <div className='flex flex-row items-center gap-x-5'>
                    <div className='flex items-center justify-center bg-white h-14 w-14 shadow-md rounded-xl flex-shrink-0'>
                        <Image
                            src='/img/send.png'
                            width={500}
                            height={500}
                            className='w-7'
                            alt='rabine easy'
                        />
                    </div>
                    <div className='flex flex-col items-start gap-y-1'>
                        <h1 className=' bold'>Lebih mudah disebar</h1>
                        <p className='text-xs text-slate-600'> will be distracted by the readable content
                            of a page when</p>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Beralih