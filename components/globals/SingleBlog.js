import Image from 'next/image'
import React from 'react'

function SingleBlog() {
  return (
    <div className='flex flex-col items-start gap-y-5 bg-white p-4 rounded-2xl '>
        <Image
            src={'/img/blog1.jpg'}
            width={800}
            height={800}
            style={{objectFit:`cover`}}
            className='w-full rounded-t-2xl '
            alt='rabine.id wedding'
        />
        
        <h1 className='xbold text-2xl cursor-pointer '>5 Hal yang membahagiakan dari pernikahan</h1>
        <p className='text-sm text-slate-500 pr-6'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident excepturi repellat placeat molestias numquam ea recusandae vitae reiciendis ut soluta.</p>
        <div className='flex flex-row justify-between items-center w-full'>
            <p className='text-sm bold'>Muff Mahnun</p>
            <div className='flex flex-row items-center justify-between gap-x-4 mr-4'>
                <p className='text-slate-700 text-xs'>15 Jan 2023</p>
                <p className='text-slate-700 text-xs semibold'>3 mins read</p>
            </div>
           
        </div>
    </div>
  )
}

export default SingleBlog