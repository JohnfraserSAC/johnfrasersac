import React from 'react'
import Image from 'next/image'

const anouncementHeroBackground = () => {
  return (
    <div className="relative custom-background-3 h-5/6"> {/* Adjust the height as needed */}
        <div className="absolute top-1/2 left-0 transform -translate-y-1/2">
          <Image
            src="/cw-1.png"
            alt="Left Image"
            width={500} 
            height={300} 
            objectFit="cover"
          />
        </div>
        <div className="absolute bottom-0 right-0">
          <Image
            src="/cw-2.png"
            alt="Right Image"
            width={500} 
            height={300} 
            objectFit="cover" 
          />
        </div>
      </div>
  )
}

export default anouncementHeroBackground