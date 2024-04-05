import React from 'react'
import Logo from './Logo'
import LanguageSwitcher from './LanguageSwitcher'


function Navbar() {
  return (
    <nav className='py-4 md:py-6 border-b'>
      <div className="container mx-auto flex item-center justify-between">
        <Logo />
        <LanguageSwitcher/>
      </div>
      
    </nav>
  )
}

export default Navbar
