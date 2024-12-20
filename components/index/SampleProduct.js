import React, { useEffect, useState } from 'react'
import SingleProduct from '../globals/SingleProduct'
import { useRouter } from 'next/router'

function SampleProduct(props) {
    const [whatCat,setWhatCat] = useState('ALL')
    const router= useRouter()
    const arrProducts = props.data
    return (
    
        <div id={`content${props.id}`} className='flex flex-col items-center gap-y-4 px-6'>
            <h1 className='bold text-xl'>Pilih Preset Desain Yang Kamu Suka</h1>
            <div  className='flex flex-row items-center justify-between gap-x-4 p-4 base text-xs'>
                <h1 onClick={()=>setWhatCat('ALL')} className={`p-2  border rounded-lg ${whatCat === 'ALL' ? 'bg-slate-200' : 'bg-white'}  cursor-pointer`}>Semua</h1>
                <h1 onClick={()=>setWhatCat('Basic')} className={`p-2  border rounded-lg  ${whatCat === 'Basic' ? 'bg-green-200' : 'bg-white'} cursor-pointer`}>Basic</h1>
                <h1 onClick={()=>setWhatCat('Premium')} className={`p-2 border rounded-lg  ${whatCat === 'Premium' ? 'bg-yellow-200' : 'bg-white'} cursor-pointer`}>Premium</h1>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 lg:gap-4'>
                {arrProducts.map((item)=>
                    whatCat === 'ALL' ? (
                    <SingleProduct key={item.id} id={item.id} img={item.image.url} cat={item.category} slug={item.slug} name={item.productName}  />
                    ): whatCat === item.category ? ( <SingleProduct key={item.id} id={item.id} img={item.image.url} cat={item.category} slug={item.slug} name={item.productName}/>):''
                )}
            </div>
            {/* <button onClick={()=>{  router.push({
                pathname:`/halaman_iku`
            
            })}} className=' hover:scale-105 transition duration-100 rounded-full text-sm bg-gradient-to-r from-pink-600 to-orange-600 text-white px-4 mt-8 py-3'>Semua Template</button> */}
        </div>
  )
}

export default SampleProduct