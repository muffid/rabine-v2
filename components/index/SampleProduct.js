import React, { useState } from 'react'
import SingleProduct from '../globals/SingleProduct'

function SampleProduct(props) {
   const [whatCat,setWhatCat] = useState('ALL')
    console.log(props.data)
  return (
    <div id={`content${props.id}`} className='flex flex-col items-center gap-y-4 px-6'>
        <h1 className='bold text-xl'>Pilih Preset Desain Yang Kamu Suka</h1>
        <div  className='flex flex-row items-center justify-between gap-x-4 p-4 base text-xs'>
            <h1 onClick={()=>setWhatCat('ALL')} className={`p-2  border rounded-lg ${whatCat === 'ALL' ? 'bg-slate-200' : 'bg-white'}  cursor-pointer`}>Semua</h1>
            <h1 onClick={()=>setWhatCat('basic')} className={`p-2  border rounded-lg  ${whatCat === 'basic' ? 'bg-green-200' : 'bg-white'} cursor-pointer`}>Basic</h1>
            <h1 onClick={()=>setWhatCat('premium')} className={`p-2 border rounded-lg  ${whatCat === 'premium' ? 'bg-yellow-200' : 'bg-white'} cursor-pointer`}>Premium</h1>
        </div>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 lg:gap-4'>
            {props.data.map((item)=>
                whatCat === 'ALL' ? (
                 <SingleProduct id={item.id} img={item.img} cat={item.kategori} name={item.nama} key={item.nama} tag={item.tag}/>
                ): whatCat === item.kategori ? (<SingleProduct img={item.img} cat={item.kategori} name={item.nama} key={item.nama}  tag={item.tag}/>):''
            )}
        </div>
    </div>
  )
}

export default SampleProduct