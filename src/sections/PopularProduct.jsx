import React from 'react'
import { products } from '../constants'
import ProductCard from '../components/ProductCard'

const PopularProduct = () => {
  return (
    <section id='products'>
        <h1 className='mt-10 font-palanquin text-4xl font-bold'>
            Our <span className='text-coral-red inline-block mt-3'>Popular</span> Products
        </h1>
        <p className='font-montserrat text-slate-gray mt-2 lg:max-w-lg'>
        Experience top-notch quality and style with our sought-after
          selections. Discover a world of comfort, design, and value
        </p>   
        <div className='mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10'>
          {products.map((product) => (
            <ProductCard key={product.name} {...product} />
          ))}
          </div>

    </section>
  )
}

export default PopularProduct
