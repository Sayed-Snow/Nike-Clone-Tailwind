import React from 'react'
import { star } from '../assets/icons'

const ProductCard = ({imgURL,name,price}) => {
  return (
    <div className='flex flex-1 flex-col w-full max-sm:w-full '>
        <img src={imgURL} alt={name} className='w-[280px] h-[280px] '/>
        <div className='mt-8 flex justify-start gap-2.5'>
            <img src={star} alt='star' className='w-[24px] h-[24px]'/>
            <p className='font-montserrat text-slate-gray text-sm'>(4.5)</p>
        </div>
        <h3 className='font-semibold text-2xl leading-normal font-palanquin mt-2'>{name}</h3>
        <p className='mt-2 font-semibold font-montserrat text-coral-red'>{price}</p>
    </div>
  )
}

export default ProductCard
