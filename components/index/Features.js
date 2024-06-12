import React from 'react'
import { BiShareAlt,BiMap,BiTimer,BiVideo,BiBookHeart,BiGift,BiUserCheck } from "react-icons/bi";
import { BsArrowsFullscreen,BsMusicNoteBeamed,BsChatLeftDots,BsCardImage } from "react-icons/bs";
import { HiBellAlert } from "react-icons/hi2";

function Features() {
  return (
    <div className='flex flex-col items-center gap-y-4 px-4 py-[50px]'>
        <h1 className='bold text-4xl text-center'>Fitur Undangan</h1>
        <p className='text-slate-600 text-center '>fitur yang akan kamu dapatkan agar undanganmu lebih menarik dan terlihat modern</p>
        <div className='h-1 w-24 bg-orange-300 rounded-xl'></div>
        <div className='grid grid-cols-2 md:grid-cols-3 gap-6 mt-12 text-base'>
            <div className='border p-2 lg:p-0 lg:border-none rounded-lg flex flex-col lg:flex-row lg:items-start md:items-start gap-x-2 gap-y-3 items-center'>
               
                    <BiShareAlt className='text-3xl lg:text-3xl text-purple-800'/>
               
                <div className='flex flex-col items-center md:items-start lg:items-start gap-x-3 gap-y-2 px-3 text-center md:text-left'>
                    <h1 className='bold leading-none '>Buat Nama Tamu Otomatis</h1>
                    <p className='text-xs text-slate-500 '> undangan online secara otomatis menyusun daftar tamu </p>
                </div>
            </div>

            <div className=' border p-2 lg:p-0 lg:border-none rounded-lg flex flex-col lg:flex-row lg:items-start md:items-start gap-x-2 gap-y-3 items-center'>
              
                    <BsArrowsFullscreen className='text-2xl lg:text-3xl text-orange-800'/>
              
                <div className='flex flex-col items-center md:items-start justify-center lg:items-start gap-x-3 gap-y-2 px-3 text-center md:text-left'>
                    <h1 className='bold leading-none '>Undangan Fullscreen</h1>
                    <p className='text-xs text-slate-500 '>tampilan fullscreen memberikan pengalaman visual yang menarik</p>
                </div>
            </div>

            <div className='border p-2 lg:p-0 lg:border-none rounded-lg flex flex-col lg:flex-row lg:items-start md:items-start gap-x-2 gap-y-3 items-center'>
                
                    <BsMusicNoteBeamed className='text-2xl lg:text-3xl text-pink-800'/>
              
                <div className='flex flex-col items-center md:items-start justify-center lg:items-start gap-x-3 gap-y-2  px-3 text-center md:text-left'>
                    <h1 className='bold leading-none '>Background Music</h1>
                    <p className='text-xs text-slate-500 '>dengan musik, menciptakan atmosfer yang lebih menarik</p>
                </div>
            </div>

            <div className='border p-2 lg:p-0 lg:border-none rounded-lg flex flex-col lg:flex-row lg:items-start md:items-start gap-x-2 gap-y-3 items-center'>
              
                    <BiMap className='text-2xl lg:text-3xl text-teal-800'/>
          
                <div className='flex flex-col items-center md:items-start justify-center lg:items-start gap-x-3 gap-y-2 px-3 text-center md:text-left'>
                    <h1 className='bold leading-none '>Peta Lokasi</h1>
                    <p className='text-xs text-slate-500 '>menunjukkan lokasi acara secara jelas kepada tamu anda</p>
                </div>
            </div>

            <div className='border p-2 lg:p-0 lg:border-none rounded-lg flex flex-col lg:flex-row lg:items-start md:items-start gap-x-2 gap-y-3 items-center'>
               
                    <HiBellAlert className='text-2xl lg:text-3xl text-blue-800'/>
               
                <div className='flex flex-col items-center md:items-start justify-center lg:items-start gap-x-3 gap-y-2 px-3 text-center md:text-left'>
                    <h1 className='bold leading-none '>Reminder Tanggal</h1>
                    <p className='text-xs text-slate-500 '>Pengingat yang akan dikirim kepada tamu menjelang tanggal acara</p>
                </div>
            </div>

            <div className='border p-2 lg:p-0 lg:border-none rounded-lg flex flex-col lg:flex-row lg:items-start md:items-start gap-x-2 gap-y-3 items-center'>
              
                    <BiTimer className='text-3xl lg:text-3xl text-emerald-800'/>
               
                <div className='flex flex-col items-center md:items-start justify-center lg:items-start gap-x-3 gap-y-2 px-3 text-center md:text-left'>
                    <h1 className='bold leading-none '>Hitung Mundur</h1>
                    <p className='text-xs text-slate-500 '>Menampilkan waktu yang tersisa menuju acara</p>
                </div>
            </div>

            <div className='border p-2 lg:p-0 lg:border-none rounded-lg flex flex-col lg:flex-row lg:items-start md:items-start gap-x-2 gap-y-3 items-center'>
                
                    <BiVideo className='text-2xl lg:text-3xl text-yellow-800'/>
                
                <div className='flex flex-col items-center md:items-start justify-center lg:items-start gap-x-3 gap-y-2 px-3 text-center md:text-left'>
                    <h1 className='bold leading-none '>Video Player</h1>
                    <p className='text-xs text-slate-500 '>Menambhakan video dari platform YouTube ke dalam undangan online</p>
                </div>
            </div>

            <div className='border p-2 lg:p-0 lg:border-none rounded-lg flex flex-col lg:flex-row lg:items-start md:items-start gap-x-2 gap-y-3 items-center'>
              
                    <BsChatLeftDots className='text-2xl lg:text-3xl text-sky-800'/>
              
                <div className='flex flex-col items-center md:items-start justify-center lg:items-start gap-x-3 gap-y-2 px-3 text-center md:text-left'>
                    <h1 className='bold leading-none '>Ucapan Doa</h1>
                    <p className='text-xs text-slate-500 '>Tamu anda bisa memberi anda ucapan dan doa untuk pernikahan anda</p>
                </div>
            </div>

            <div className='border p-2 lg:p-0 lg:border-none rounded-lg flex flex-col lg:flex-row lg:items-start md:items-start gap-x-2 gap-y-3 items-center'>
              
                    <BsCardImage className='text-2xl lg:text-3xl text-red-800'/>
               
                <div className='flex flex-col items-center md:items-start justify-center lg:items-start gap-x-3 gap-y-2 px-3 text-center md:text-left'>
                    <h1 className='bold leading-none '>Gallery</h1>
                    <p className='text-xs text-slate-500 '>foto untuk menggambarkan momen indah anda dan pasangan</p>
                </div>
            </div>

            <div className='border p-2 lg:p-0 lg:border-none rounded-lg flex flex-col lg:flex-row lg:items-start md:items-start gap-x-2 gap-y-3 items-center'>
               
                    <BiBookHeart className='text-2xl lg:text-3xl text-lime-800'/>
              
                <div className='flex flex-col items-center md:items-start justify-center lg:items-start gap-x-3 gap-y-2 px-3 text-center md:text-left'>
                    <h1 className='bold leading-none '>Love Story</h1>
                    <p className='text-xs text-slate-500 '>Tunjukan perjalanan cinta anda dan calon pasangan anda ke pengunjung</p>
                </div>
            </div>

            <div className='border p-2 lg:p-0 lg:border-none rounded-lg flex flex-col lg:flex-row lg:items-start md:items-start gap-x-2 gap-y-3 items-center'>
              
                    <BiGift className='text-2xl lg:text-3xl text-purple-800'/>
              
                <div className='flex flex-col items-center md:items-start justify-center lg:items-start gap-x-3 gap-y-2 px-3 text-center md:text-left'>
                    <h1 className='bold leading-none '>Kado Digital</h1>
                    <p className='text-xs text-slate-500 '>memungkinkan tamu yang anda undang bisa meberi anda hadiah</p>
                </div>
            </div>

            <div className='border p-2 lg:p-0 lg:border-none rounded-lg flex flex-col lg:flex-row lg:items-start md:items-start gap-x-2 gap-y-3 items-center'>
                
                    <BiUserCheck className='text-3xl lg:text-3xl text-cyan-800'/>
              
                <div className='flex flex-col items-center md:items-start justify-center lg:items-start gap-x-3 gap-y-2 px-3 text-center md:text-left'>
                    <h1 className='bold leading-none '>Konfirmasi Kehadiran</h1>
                    <p className='text-xs text-slate-500 '>konfirmasi kehadiran tamu yang anda undang</p>
                </div>
            </div>


        </div>
    </div>
  )
}

export default Features