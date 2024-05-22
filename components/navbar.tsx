import React from 'react'

const Navbar = () => {
  return (
    <div className='flex'>
        <div className='flex-1'>
            <a href='#'>Home</a>
        </div>
        <div className='flex-1'>
            <a href='#'>About</a>
        </div>
        <div className='flex-1'>
            <a href='#'>Contact</a>
        </div>
    </div>
  )
}

export default Navbar