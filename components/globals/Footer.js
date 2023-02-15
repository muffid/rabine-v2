import Image from 'next/image'
import React from 'react'

function Footer() {
  return (
    <div className=' mx-auto bg-slate-50 text-slate-700 p-8 mt-8'>
      <div className='flex md:max-w-[1200px] mx-auto flex-col items-center justify-center space-y-4 lg:px-16 '>
        <div className='grid grid-cols-2  md:grid-cols-5 gap-x-2 gap-y-4 '>
            <div className='flex flex-col items-start gap-y-4 col-span-2 lg:col-span-1 pr-36 md:pr-24 mb-4 md:mb-0'>
             <Image
                src='/img/rabine.png'
                width={700}
                height={700}
                alt='rabine.id'
                className='w-[120px] lg:min-w-[130px]'
             />
              <p className=' text-xs'>Deliver through Quality
              </p>
            </div>

            <div className='flex flex-col items-start gap-y-4'>
              <h1 className='text-xl xbold'>Company</h1>
              <div className='flex flex-col items-start gap-y-1'>
                <p className=' text-xs'>About</p>
                <p className=' text-xs'>Careers</p>
                <p className=' text-xs'>Mobile</p>
              </div>
            </div>

            <div className='flex flex-col items-start gap-y-4'>
              <h1 className='text-xl xbold'>Contact</h1>
              <div className='flex flex-col items-start gap-y-1'>
                <p className=' text-xs'>Help</p>
                <p className=' text-xs'>FAQ</p>
                <p className=' text-xs'>Press</p>
                <p className=' text-xs'>Affiliate</p>
              </div>
            </div>

            <div className='flex flex-col items-start gap-y-4'>
              <h1 className='text-xl xbold'>more</h1>
              <div className='flex flex-col items-start gap-y-1'>
                <p className=' text-xs'>Disclaimer</p>
                <p className=' text-xs'>Tips</p>
                <p className=' text-xs'>Privacy & Policy</p>
              </div>
            </div>

            <div className='flex flex-col items-start gap-y-3 pt-1 md:pt-0'>
            <p className=' text-xs'>Discover Our App</p>
              <div className='flex flex-row justify-between items-center gap-x-3'>
            
              </div>
            
             
            </div>
        </div>
        <div className=''>
          <p className=' text-xs mt-6'>Copyright rabine.id 2023</p>
        </div>
    </div>
  </div>
  )
}

export default Footer
// Duitkuisme_123 Midtransisme_123