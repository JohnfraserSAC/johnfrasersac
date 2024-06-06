import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <main>

      {/* HERO SECTION */}
      <div className='relative h-screen custom-background-1'>
        <div className='flex flex-col items-center justify-center text-center h-full w-full'>
          <div className='flex justify-between text-left gap-40'>
            <div className='w-4/12'>
              <h1 className='text-white'>John Fraser Student Council</h1>
              <p className='text-white'>Run By Students, For Students. I removed the election results!</p>
              <div className='flex text-center items-center justify-start mt-8 gap-8'>
                <a href='/oppurtunities'>
                  <button className='button-1'>
                    <p className='text-bold'>Get Involved</p>
                  </button>
                </a>
                <a href='/anouncements'>
                  <p className='text-white transition-colors duration-200 ease-in-out hover:text-yellow-500'>View Anouncements &rarr;</p>
                </a>
              </div>
            </div>
            <Image
              className='rounded-xl'
              src='/hero.jpg' 
              width={500}
              height={1}
              alt='hero image' />
          </div>
        </div>
      </div>

      {/* WHO WE ARE SECTION */}


      {/* UPCOMING EVENTS SECTION */}


      {/* MEET OUR TEAM + SOCIALS SECTION */}


      {/* LINKS SECTION */}
    </main>
  )
}

export default page