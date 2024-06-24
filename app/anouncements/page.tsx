import React from 'react'
import Image from 'next/image'
import AnouncementHeroBackground from '@/components/anouncements-bg'

const page = () => {
  return (
    <main>
      {/* HERO */}
      <div className='h-screen'>
        <AnouncementHeroBackground />
        {/* rest of the content will go here */}
      </div>
     
    </main>
  )
}

export default page