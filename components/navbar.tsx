import React from 'react'
import Image from 'next/image'

const Navbar = () => {
  return (
    <main className='absolute top-0 z-50 bg-transparent w-full'>
       <div className='flex justify-between mx-60'>
        <div className='text-left'>
          <div>
            <a href='/'>
              <Image
                src='/WSAC-Logo.png' 
                alt='logo' 
                width={200}
                height={1} />
            </a>
          </div>
        </div>
        <div className='flex text-right gap-8  justify-center items-center'>
          <div>
            <a href='/anouncements'>Anouncements</a>
          </div>
          <div>
            <a href='/oppurtunities'>SAC Oppurtunities</a>
          </div>
          <div>
            <a href='/clubs'>Clubs</a>
          </div>
          <div>
            <a href='/team'>Our Team</a>
          </div>
          <div>
            <a href='/frasertickets'>FraserTickets</a>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Navbar