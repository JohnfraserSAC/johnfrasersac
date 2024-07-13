import React from 'react'
import Image from 'next/image'

const anouncementHeroBackground = () => {
  return (
    <div className="absolute custom-background-3" style={{height: '83.333vh'}}>
        <div className="absolute top-1/2 left-0 transform -translate-y-1/2 z-auto">
          <Image
            src="/cw-1.png"
            alt="Left Image"
            width={200} 
            height={300} 
            objectFit="cover"
            className='lg:w-[600px]'
          />
        </div>
        <div className="absolute bottom-0 right-0">
          <Image
            src="/cw-2.png"
            alt="Right Image"
            width={200} 
            height={300} 
            objectFit="cover" 
            className='lg:w-[600px]'
          />
        </div>
        <div className='h-full flex justify-center items-center'>
          <div className='translate-y-1/3 h-full z-20 lg:w-7/12 w-full'>
            <div className='absolute inset-0 bg-translucent-gray h-2/6'></div>
          </div>
        </div>
          <div className='absolute inset-0 flex justify-center items-center z-30 lg:w-full'>
              <div className='z-40 flex flex-col justify-center items-center lg:w-4/12'>
                <h1 className='text-4xl'>Anouncements</h1>
                <p className='w-9/12 text-center'>Check here for all the up to date news at John Fraser! Join our Google Classroom if you never want to miss an event.</p>
              </div>  
          </div> 

      </div>
  )
}

export default anouncementHeroBackground