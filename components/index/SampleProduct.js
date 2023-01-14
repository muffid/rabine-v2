import React from 'react'
import SingleProduct from '../globals/SingleProduct'

function SampleProduct() {
  return (
    <div className='flex flex-col items-center gap-y-4'>
        <h1 className='bold text-xl'>Pilih Preset Desain Yang Kamu Suka</h1>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-4'>
            <SingleProduct img='prod2.jpg' cat='BASIC' name='Name Props'/>
        </div>
    </div>
  )
}

export default SampleProduct