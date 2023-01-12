import Image from 'next/image'
import React from 'react'

function Beralih() {
  return (
    <div className='grid grid-cols-1 lg:flex flex-row items-end mt-28 bg-slate-100/50 justify-between md:gap-x-6 relative border rounded-3xl mb-12'>
        <div className='w-full h-full flex items-end md:items-center py-6 pl-12 md:justify-center justify-end lg:items-end lg:justify-end'>
        <Image
                    src='/img/MODEL_1.png'
                    width={1000}
                    height={1000}
                    alt='woman Rabine.id'
                    style={{objectFit:`cover`}}
                    className='w-[170px] md:w-[270px] mr-8 lg:absolute z-10 top-12  '
                />
        <Image
                    src='/img/BG_LOVE.png'
                    width={1000}
                    height={1000}
                    alt='Bg Love Rabine.id'
                    style={{objectFit:`cover`}}
                    className=' w-[1200px] max-h-[560px] top-0 left-0 opacity-50 absolute -z-0 rounded-2xl '
                />

<Image
                    src='/img/BG_LOVE.png'
                    width={1000}
                    height={1000}
                    alt='Bg Love Rabine.id'
                    style={{objectFit:`cover`}}
                    className=' w-[1200px] max-h-[560px] bottom-0 left-0 opacity-50 absolute -z-0 rounded-2xl lg:hidden '
                />
           
        
        <div className='flex flex-row items-center justify-center bg-white rounded-xl shadow-md gap-x-4 absolute px-3 py-1 top-12 left-4 md:px-4 md:py-3 md:top-24 md:left-12 z-10'>
            <Image
                src='/img/check-mark.png'
                width={500}
                height={500}
                alt='check rabine'
                className='w-8'
            />
            <p className='semibold text-xs lg:text-base '>Mudah dipakai</p>
        </div>

        <div className='flex flex-row items-center justify-center bg-white rounded-xl shadow-md gap-x-4 absolute px-3 py-1 top-28 left-12 md:px-4 md:py-3 md:top-48 md:left-28 z-10'>
            <Image
                src='/img/check-mark.png'
                width={500}
                height={500}
                alt='check rabine'
                className='w-8'
            />
            <p className='semibold text-xs lg:text-base'>Lebih Murah</p>
        </div>

        <div className='flex flex-row items-center justify-center bg-white rounded-xl shadow-md gap-x-4 absolute  px-3 py-1 top-44 left-4 md:px-4 md:py-3 md:top-72 md:left-8 z-10 '>
            <Image
                src='/img/check-mark.png'
                width={500}
                height={500}
                alt='check rabine'
                className='w-8'
            />
            <p className='semibold text-xs lg:text-base'>Mudah disebar</p>
        </div>

        <div className='flex flex-row items-center justify-center bg-white rounded-xl shadow-md gap-x-4 absolute px-3 py-1 top-60 left-12 md:px-4 md:py-3 md:top-[380px] md:left-28  z-10'>
            <Image
                src='/img/check-mark.png'
                width={500}
                height={500}
                alt='check rabine'
                className='w-8'
            />
            <p className='semibold text-xs lg:text-base'>Banyak Fitur</p>
        </div>

        

        </div>
        
        <div className='flex flex-col items-start gap-y-6 p-8 w-full z-10'>
            <p className='text-slate-500 xbold'>KEUNGGULAN</p>
            <h1 className='text-[#2C090B] text-4xl md:text-4xl bold pr-4'>Kenapa harus menggunakan undangan digital?</h1>
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
                            src='/img/jigsaw.png'
                            width={500}
                            height={500}
                            className='w-7'
                            alt='rabine easy'
                        />
                    </div>
                    <div className='flex flex-col items-start gap-y-1'>
                        <h1 className=' bold'>Banyak Fitur</h1>
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