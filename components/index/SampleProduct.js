import React from 'react'
import SingleProduct from '../globals/SingleProduct'

function SampleProduct() {
  return (
    <div className='flex flex-col items-center gap-y-4'>
        <h1 className='bold text-xl'>Pilih Preset Desain Yang Kamu Suka</h1>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-4'>
            <SingleProduct img='prod2.jpg' cat='BASIC' name='Trasy Urang Mangatus'/>
            <SingleProduct img='prod6.jpg' cat='PREMIUM' name='Wingko Ketan'/>
            <SingleProduct img='prod7.jpg' cat='PREMIUM' name='Wingko Ketan'/>
            <SingleProduct img='prod8.jpg' cat='BASIC' name='Yasmin Surti Nandi'/>
            <SingleProduct img='prod9.jpg' cat='PREMIUM' name='Lukito Ok'/>
        </div>
    </div>
  )
}

export default SampleProduct