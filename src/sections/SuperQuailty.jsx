import React from 'react'
import { shoe8 } from '../assets/images'

const SuperQuailty = () => {
  return (
    <section id='SuperQuailty' className='flex justify-between items-center max-lg:flex-col gap-10 w-full max-container'>
      <div className='mt-10  '>
        <h1 className='font-palanquin text-4xl font-bold '>
            We Provide You <span className=' text-coral-red  mt-3'>Super <br /> Quality</span> Shoes
        </h1>
        <p className='font-montserrat text-slate-gray mt-2 lg:max-w-lg'>
        Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>
        <button className='mt-10 bg-coral-red text-white font-semibold py-3 px-8 rounded-full'>View details</button>
      </div>
      <div className=' '>
        <img src={shoe8} className='w-[570px] h-[522px]'/>
      </div>
      
    </section>
  )
}

export default SuperQuailty
