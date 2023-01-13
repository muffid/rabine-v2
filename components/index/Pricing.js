import Image from 'next/image'
import React from 'react'
import { BiChevronDown } from "react-icons/bi";
import { BsCheckLg } from "react-icons/bs";
import { FaLeaf,FaStar,FaCrown } from "react-icons/fa";

function Pricing() {
  return (
    <div className='mt-20 md:w-full lg:w-3/4 mx-auto flex flex-col items-center justify-center gap-y-4 bg-gradient-to-r from-orange-50
                     to-purple-50 rounded-3xl py-8 px-12 mb-12'>
        <h1 className='text-4xl bold mb-4'>Harga Paket</h1>
        <div className='flex flex-col md:flex-row gap-x-8 justify-center w-full gap-y-6'>


            <div className='bg-white rounded-xl px-6  flex flex-col items-start justify-between md:w-1/3 py-8 gap-y-3'>
                <div className='flex flex-row items-center gap-x-4 bold text-lg text-pink-800'>
                    <FaLeaf/>
                    <p>Reguler</p>
                </div>
                <p className='text-xs text-slate-500 pr-8'>cocok untuk budget minim </p>
                <div className='flex flex-row items-end mt-4 gap-x-1'>
                    <h1 className='text-slate-500 text-4xl'>Rp</h1>
                    <h1 className='semibold text-4xl'>75.</h1>
                    <h1 className='semibold text-xl  -ml-1'>000</h1>
                </div>
                <p className='text-xs text-slate-500 '>per undangan</p>
                <button className='rounded-lg px-5 py-3 w-full bg-pink-200 text-pink-900  bold '>Lihat Desain</button>
                <p className='bold text-sm mt-4'>Fitur Paket Basic</p>
                <div className='flex flex-col gap-y-1'>
                    <div className='flex flex-row items-center gap-x-3'>
                        <BsCheckLg className='text-emerald-500 text-xs'/>
                        <p className='text-slate-500 text-xs'> Foto calon mempelai</p>
                    </div>
                    <div className='flex flex-row items-center gap-x-3'>
                        <BsCheckLg className='text-emerald-500 text-xs'/>
                        <p className='text-slate-500 text-xs'>Tanggal Akad dan resepsi</p>
                    </div>
                    <div className='flex flex-row items-center gap-x-3'>
                        <BsCheckLg className='text-emerald-500 text-xs'/>
                        <p className='text-slate-500 text-xs'>Peta lokasi</p>
                    </div>
                </div>
               
            </div>

            <div className='bg-white rounded-xl px-6  flex flex-col items-start justify-between md:w-1/3 py-8 gap-y-3'>
                <div className='flex flex-row items-center gap-x-4 bold text-lg text-pink-800'>
                    <FaStar/>
                    <p>Premium</p>
                </div>
                <p className='text-xs text-slate-500 pr-8'>cocok untuk budget minim </p>
                <div className='flex flex-row items-end mt-4 gap-x-1'>
                    <h1 className='text-slate-500 text-4xl'>Rp</h1>
                    <h1 className='semibold text-4xl'>75.</h1>
                    <h1 className='semibold text-xl  -ml-1'>000</h1>
                </div>
                <p className='text-xs text-slate-500 '>per undangan</p>
                <button className='rounded-lg px-5 py-3 w-full bg-pink-200 text-pink-900  bold '>Lihat Desain</button>
                <p className='bold text-sm mt-4'>Fitur Paket Basic</p>
                <div className='flex flex-col gap-y-1'>
                    <div className='flex flex-row items-center gap-x-3'>
                        <BsCheckLg className='text-emerald-500 text-xs'/>
                        <p className='text-slate-500 text-xs'> Foto calon mempelai</p>
                    </div>
                    <div className='flex flex-row items-center gap-x-3'>
                        <BsCheckLg className='text-emerald-500 text-xs'/>
                        <p className='text-slate-500 text-xs'>Tanggal Akad dan resepsi</p>
                    </div>
                    <div className='flex flex-row items-center gap-x-3'>
                        <BsCheckLg className='text-emerald-500 text-xs'/>
                        <p className='text-slate-500 text-xs'>Peta lokasi</p>
                    </div>
                </div>
             
               
            </div>

            <div className='bg-white rounded-xl px-6  flex flex-col items-start justify-between md:w-1/3 gap-y-3 py-8'>
                <div className='flex flex-row items-center gap-x-4 bold text-lg text-pink-800'>
                    <FaCrown/>
                    <p>Exclusive</p>
                </div>
                <p className='text-xs text-slate-500 pr-8'>cocok untuk budget minim </p>
                <div className='flex flex-row items-end mt-4 gap-x-1'>
                    <h1 className='text-slate-500 text-4xl'>Rp</h1>
                    <h1 className='semibold text-4xl'>75.</h1>
                    <h1 className='semibold text-xl  -ml-1'>000</h1>
                </div>
                <p className='text-xs text-slate-500 '>per undangan</p>
                <button className='rounded-lg px-5 py-3 w-full bg-pink-200 text-pink-900  bold '>Lihat Desain</button>
                <p className='bold text-sm mt-4'>Fitur Paket Basic</p>
                <div className='flex flex-col gap-y-1'>
                    <div className='flex flex-row items-center gap-x-3'>
                        <BsCheckLg className='text-emerald-500 text-xs'/>
                        <p className='text-slate-500 text-xs'> Foto calon mempelai</p>
                    </div>
                    <div className='flex flex-row items-center gap-x-3'>
                        <BsCheckLg className='text-emerald-500 text-xs'/>
                        <p className='text-slate-500 text-xs'>Tanggal Akad dan resepsi</p>
                    </div>
                    <div className='flex flex-row items-center gap-x-3'>
                        <BsCheckLg className='text-emerald-500 text-xs'/>
                        <p className='text-slate-500 text-xs'>Peta lokasi</p>
                    </div>
                </div>
              
            </div>
        </div>  
    </div>
  )
}

export default Pricing