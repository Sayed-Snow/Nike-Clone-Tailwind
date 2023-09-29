import React, { useState } from 'react'
import headerLogo from '../assets/images/header-logo.svg'
import { navLinks } from '../constants'
import { hamburger } from '../assets/icons'

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
  <header className='padding-x py-8 absolute z-10 w-full'>
    <nav className='flex justify-between items-center max-container'>
      <a href="/"><img src={headerLogo} alt='logo' width={130} height={29}/></a>
      <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
        {navLinks.map((link, index) => (
          <li key={link.label}>
            <a href={link.href} className='font-monts errat leading-normal text-lg text-slate-gray'>
              {link.label}
              </a>
          </li>
        ))}
        </ul>
        <div className='hidden max-lg:block'>
          <img src={hamburger} alt='hamburger' width={25} height={25} onClick={handleMenu}/>
        </div>

    </nav>
    <div className={` align-bottom top-0 left-0 w-full h-full bg-white z-10 ${isMenuOpen ? 'block' : 'hidden'}`}> 
        <ul className='hidden flex-col justify-center items-center gap-16  max-lg:block'>
          {navLinks.map((link, index) => (<li key={link.label} className='py-6 text-right'>
            <a href={link.href} className='font-monts errat leading-normal text-lg text-slate-gray'>
              {link.label}
              </a>
          </li>
        ))}
          </ul>
        </div>
  </header>
  
  )
}

export default Nav
