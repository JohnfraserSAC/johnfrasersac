'use client'

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
 
export default function NotFound() {
  return (
    <main className='h-screen '>
      <div className="absolute inset-0 z-0">
          <Image
            src="/hero-bg.png"
            layout="fill"
            objectFit="cover"
            alt="Hero background"
            priority
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className='absolute z-10 min-h-screen min-w-full flex justify-center items-center'>
          <div className='flex justify-center items-center flex-col text-center text-white'>
            <h1 className='text-4xl font-bold'>Error 404</h1>
            <h2 className='text-2xl'>Page not found</h2>
            <Image
                src='/john-fraser-logo.png'
                height={300}
                width={200}
                alt='dog slipping'
                    />
            <p className='text-lg'><Link href='/' className='bg-blue-200 text-blue-950 underline p-3'>Go Back</Link></p>
          </div>
        </div>
    </main>
  )
}