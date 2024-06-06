import React from 'react'
import Image from 'next/image'


const page = () => {
  return (
    <main>
      <div className='relative h-screen custom-background-1'>
        <div className='flex flex-col border items-center justify-center text-center h-full w-full'>
          <div className='flex text-left gap-40'>
            <div>
              <h1>John Fraser Student Council</h1>
              <p>Run By Students, For Students. I removed the election results!</p>
              <div className='flex text-center items-center justify-center mt-8 gap-8'>
                <a href='/oppurtunities'>
                  <button className='button-1'>
                    Get Involved
                  </button>
                </a>
                <a href='/anouncements'>
                  <p className='transition-colors duration-200 ease-in-out hover:text-yellow-500'>View Anouncements &rarr;</p>
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
    </main>
  )
}

export default page