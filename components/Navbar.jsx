import React from 'react'
import Logo from './Logo'


function Navbar() {
  return (
    <nav className='py-4 md:py-6 border-b'>
      <div className="container mx-auto flex item-center justify-between">
        <Logo/>
      </div>
      
    </nav>
  )
}

export default Navbar
