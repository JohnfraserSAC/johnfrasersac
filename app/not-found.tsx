'use client'

import React from 'react';
import Image from 'next/image';
import { UseBgCondition } from '@/components/BgConditionContext';
import { useEffect } from 'react';
 
export default function NotFound() {
  const { setBgCondition } = UseBgCondition();

  useEffect(() => {
  setBgCondition("blackbg");

  return () => setBgCondition("");
  }, []);
  return (
    <main className='h-screen'>
        <div className='h-full flex justify-center items-center flex-col text-center'>
            <h1 className='text-4xl font-bold'>Whoops!</h1>
            <h2 className='text-2xl'>Looks like you slipped up!</h2>
            <Image
                src='/dog-slip.jpg'
                height={400}
                width={400}
                alt='dog slipping'
                    />
            <p className='text-lg'>Here&apos;s the way <a href='/' style={{ color: 'blue', textDecoration: 'underline' }}>home</a></p>
        </div>
    </main>
  )
}