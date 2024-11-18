'use client'

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
 
export default function NotFound() {
  return (
    <main className='h-screen'>
        <div className='h-full flex justify-center items-center flex-col text-center'>
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
    </main>
  )
}