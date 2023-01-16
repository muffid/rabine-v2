import React, { useState } from 'react'
import SingleProduct from '../globals/SingleProduct'

function SampleProduct(props) {
   const [whatCat,setWhatCat] = useState('ALL')

  return (
    <div id={`content${props.id}`} className='flex flex-col items-center gap-y-4'>
        <h1 className='bold text-xl'>Pilih Preset Desain Yang Kamu Suka</h1>
        <div  className='flex flex-row items-center justify-between gap-x-4 p-4 base text-xs'>
            <h1 onClick={()=>setWhatCat('ALL')} className={`p-2  border rounded-lg ${whatCat === 'ALL' ? 'bg-slate-200' : 'bg-white'}  cursor-pointer`}>Semua</h1>
            <h1 onClick={()=>setWhatCat('BASIC')} className={`p-2  border rounded-lg  ${whatCat === 'BASIC' ? 'bg-green-200' : 'bg-white'} cursor-pointer`}>Basic</h1>
            <h1 onClick={()=>setWhatCat('PREMIUM')} className={`p-2 border rounded-lg  ${whatCat === 'PREMIUM' ? 'bg-yellow-200' : 'bg-white'} cursor-pointer`}>Premium</h1>
        </div>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-4'>
            {props.data.map((item)=>
                whatCat === 'ALL' ? (
                 <SingleProduct img={item.img} cat={item.kategori} name={item.nama} key={item.nama}/>
                ): whatCat === item.kategori ? (<SingleProduct img={item.img} cat={item.kategori} name={item.nama} key={item.nama}/>):''
            )}
        </div>
    </div>
  )
}

export default SampleProduct