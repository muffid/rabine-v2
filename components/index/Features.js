import React from 'react'
import { BiShareAlt,BiMap,BiTimer,BiVideo } from "react-icons/bi";
import { BsArrowsFullscreen,BsMusicNoteBeamed,BsChatLeftDots,BsCardImage } from "react-icons/bs";
import { HiBellAlert } from "react-icons/hi2";

function Features() {
  return (
    <div className='flex flex-col items-center gap-y-4 px-4'>
        <h1 className='bold text-4xl text-center'>Fitur Undangan</h1>
        <p className='text-slate-600 text-lg'>dfdhfjghj</p>
        <div className='grid grid-cols-2 md:grid-cols-3 gap-y-9 mt-4'>
            <div className='flex flex-col lg:flex-row lg:items-start md:items-start gap-x-4 gap-y-3 items-center'>
                <div className='bg-purple-100 w-16 h-16 rounded-xl flex items-center justify-center'>
                    <BiShareAlt className='text-3xl text-purple-800'/>
                </div>
                <div className='flex flex-col items-center md:items-start lg:items-start gap-x-3 gap-y-2 px-3 text-center md:text-left'>
                    <h1 className='bold leading-none '>Buat Nama Tamu Otomatis</h1>
                    <p className='text-xs text-slate-500 '>will be distracted by the readable content of a page when</p>
                </div>
            </div>

            <div className='flex flex-col lg:flex-row lg:items-start md:items-start gap-x-4 gap-y-3 items-center'>
                <div className='bg-orange-100 w-16 h-16 rounded-xl flex items-center justify-center'>
                    <BsArrowsFullscreen className='text-3xl text-orange-800'/>
                </div>
                <div className='flex flex-col items-center md:items-start justify-center lg:items-start gap-x-3 gap-y-2 px-3 text-center md:text-left'>
                    <h1 className='bold leading-none '>Undangan Fullscreen</h1>
                    <p className='text-xs text-slate-500 '>will be distracted by the readable content of a page when</p>
                </div>
            </div>

            <div className='flex flex-col lg:flex-row lg:items-start md:items-start gap-x-4 gap-y-3 items-center'>
                <div className='bg-pink-100 w-16 h-16 rounded-xl flex items-center justify-center'>
                    <BsMusicNoteBeamed className='text-3xl text-pink-800'/>
                </div>
                <div className='flex flex-col items-center md:items-start justify-center lg:items-start gap-x-3 gap-y-2  px-3 text-center md:text-left'>
                    <h1 className='bold leading-none '>Background Music</h1>
                    <p className='text-xs text-slate-500 '>will be distracted by the readable content of a page when</p>
                </div>
            </div>

            <div className='flex flex-col lg:flex-row lg:items-start md:items-start gap-x-4 gap-y-3 items-center'>
                <div className='bg-teal-100 w-16 h-16 rounded-xl flex items-center justify-center'>
                    <BiMap className='text-3xl text-teal-800'/>
                </div>
                <div className='flex flex-col items-center md:items-start justify-center lg:items-start gap-x-3 gap-y-2 px-3 text-center md:text-left'>
                    <h1 className='bold leading-none '>Peta Lokasi</h1>
                    <p className='text-xs text-slate-500 '>will be distracted by the readable content of a page when</p>
                </div>
            </div>

            <div className='flex flex-col lg:flex-row lg:items-start md:items-start gap-x-4 gap-y-3 items-center'>
                <div className='bg-blue-100 w-16 h-16 rounded-xl flex items-center justify-center'>
                    <HiBellAlert className='text-3xl text-blue-800'/>
                </div>
                <div className='flex flex-col items-center md:items-start justify-center lg:items-start gap-x-3 gap-y-2 px-3 text-center md:text-left'>
                    <h1 className='bold leading-none '>Reminder Tanggal</h1>
                    <p className='text-xs text-slate-500 '>will be distracted by the readable content of a page when</p>
                </div>
            </div>

            <div className='flex flex-col lg:flex-row lg:items-start md:items-start gap-x-4 gap-y-3 items-center'>
                <div className='bg-emerald-100 w-16 h-16 rounded-xl flex items-center justify-center'>
                    <BiTimer className='text-3xl text-emerald-800'/>
                </div>
                <div className='flex flex-col items-center md:items-start justify-center lg:items-start gap-x-3 gap-y-2 px-3 text-center md:text-left'>
                    <h1 className='bold leading-none '>Hitung Mundur</h1>
                    <p className='text-xs text-slate-500 '>will be distracted by the readable content of a page when</p>
                </div>
            </div>

            <div className='flex flex-col lg:flex-row lg:items-start md:items-start gap-x-4 gap-y-3 items-center'>
                <div className='bg-yellow-100 w-16 h-16 rounded-xl flex items-center justify-center'>
                    <BiVideo className='text-3xl text-yellow-800'/>
                </div>
                <div className='flex flex-col items-center md:items-start justify-center lg:items-start gap-x-3 gap-y-2 px-3 text-center md:text-left'>
                    <h1 className='bold leading-none '>Video Player</h1>
                    <p className='text-xs text-slate-500 '>will be distracted by the readable content of a page when</p>
                </div>
            </div>

            <div className='flex flex-col lg:flex-row lg:items-start md:items-start gap-x-4 gap-y-3 items-center'>
                <div className='bg-sky-100 w-16 h-16 rounded-xl flex items-center justify-center'>
                    <BsChatLeftDots className='text-3xl text-sky-800'/>
                </div>
                <div className='flex flex-col items-center md:items-start justify-center lg:items-start gap-x-3 gap-y-2 px-3 text-center md:text-left'>
                    <h1 className='bold leading-none '>Ucapan Doa</h1>
                    <p className='text-xs text-slate-500 '>will be distracted by the readable content of a page when</p>
                </div>
            </div>

            <div className='flex flex-col lg:flex-row lg:items-start md:items-start gap-x-4 gap-y-3 items-center'>
                <div className='bg-red-100 w-16 h-16 rounded-xl flex items-center justify-center'>
                    <BsCardImage className='text-3xl text-red-800'/>
                </div>
                <div className='flex flex-col items-center md:items-start justify-center lg:items-start gap-x-3 gap-y-2 px-3 text-center md:text-left'>
                    <h1 className='bold leading-none '>Gallery</h1>
                    <p className='text-xs text-slate-500 '>will be distracted by the readable content of a page when</p>
                </div>
            </div>


        </div>
    </div>
  )
}

export default Features