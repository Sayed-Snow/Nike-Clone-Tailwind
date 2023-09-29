import React from 'react'

const ServersCard = ({imgURL,label,subtext}) => {
  return (
    <div className='flex-1 sm:w-[350px] sm:min-w-[360px] w-full rounded-[20px] shadow-3xl px-10 py-16'>
      <div className='w-11 h-11 flex justify-center items-center bg-coral-red rounded-full'>
      <img src={imgURL} alt={label} className='  w-[24px] h-[24px]' />
      </div>
      <h3 className='font-palanquin text-2xl font-bold mt-6'>{label}</h3>
      <p className='font-montserrat text-slate-gray mt-2'>{subtext}</p>
    </div>
  )
}

export default ServersCard
