import Image from 'next/image'
import React from 'react'

function SingleBlogGrid(props) {
  return (
    <div  className='flex flex-row lg:flex-col items-start justify-between gap-y-5 bg-white p-4
                     transition duration-100 hover:shadow-xl hover:scale-105 rounded-2xl lg:self-start gap-x-4'>
    <Image
        src={'/img/'+props.img}
        width={800}
        height={800}
        style={{objectFit:`cover`}}
        className='w-28 lg:w-full rounded-xl '
        alt='rabine.id wedding'
    />
    <div className='flex w-full flex-col gap-y-4'>
        <h1 className='bold cursor-pointer text-sm lg:text-base leading-tight'>{props.judul}</h1>
        <div className='flex flex-col justify-between items-start gap-y-2 w-full'>
            <p className='text-sm bold text-sky-800'>{props.admin}</p>
            <div className='flex flex-row items-center justify-between w-full text-slate-500 text-xs'>
                <p className=''>{props.date}</p>
                <p className='semibold'>{props.time} mins read</p>
            </div>
        </div>
    </div>
</div>
  )
}

export default SingleBlogGrid