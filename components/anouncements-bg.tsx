import React from 'react'
import Image from 'next/image'

const anouncementHeroBackground = () => {
  return (
    <div className="absolute custom-background-3 h-5/6"> {/* Adjust the height as needed */}
        <div className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10">
          <Image
            src="/cw-1.png"
            alt="Left Image"
            width={200} 
            height={300} 
            objectFit="cover"
          />
        </div>
        <div className="absolute bottom-0 right-0">
          <Image
            src="/cw-2.png"
            alt="Right Image"
            width={200} 
            height={300} 
            objectFit="cover" 
          />
        </div>
        <div className='h-full flex justify-center items-center'>
          <div className='border text-center flex justify-center items-center flex-col h-2/6 z-20 absolute bg-translucent-gray'>
            <div className='z-40'>
              <h1>Anouncements</h1>
              <p>Check here for all the up to date news at John Fraser! Join our Google Classroom if you never want to miss an event.</p>
            </div>  
          </div>
        </div> 
      </div>
  )
}

export default anouncementHeroBackground