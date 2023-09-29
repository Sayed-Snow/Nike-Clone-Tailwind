import React from 'react'
import { services } from '../constants'
import ServersCard from '../components/ServersCard'

const Servers = () => {
  return (
    <section id='servers' className='max-container flex justify-center flex-wrap gap-9'>
        {services.map((service) => (
          <ServersCard key={service.name} {...service} />
        ))}
      
    </section>
  )
}

export default Servers
