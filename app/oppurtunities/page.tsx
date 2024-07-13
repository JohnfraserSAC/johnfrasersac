'use client'

import React from 'react'
import { useEffect, useState } from 'react'
import CountingAnimation from '@/components/Counting';
import Image from 'next/image';
import Link from 'next/link';


const page = () => {


  return (
    <main>
      <div className='custom-background-4 flex flex-col justify-center items-center text-center' style={{height: "40.3333vh"}}>
        <div className='w-11/12 text-white'>
          <h1 className='font-semibold text-3xl mb-4'>SAC Oppurtunities</h1>
          <p className='font-thin'>SAC has many oppurtunities throughout the school year for you to volunteer, attend events, and apply to be a part of the team!</p>
        </div>
      </div>
      

      <div className='flex-col flex justify-center items-center'>
        <Image
            src='/sac-oppurtunities.jpg'
            alt='sac-oppurtunities'
            width={500}
            height={300}
            className='mb-8'
          />
        <div className='w-11/12'>
          <h1 className='font-semibold text-xl'>Honourary & Grade Rep Applications</h1>
          {/* INSER COOL DIVIDER THING */}
          <p className='mb-8 font-semibold text-lg'>Closed</p>
          <p className='mb-8'>Our honourary & grade rep applications will open next September. To leanr more, check out our Google Classroom (code: i725i36) and visit our Instagram: @johnfrasersac!</p>
          <div className='mb-8 w-full flex justify-center items-center'>
            <Link href={'https://google.com'}>
              <button className='button-2'>
                <p>Join Classroom</p>
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div>
        <h1>Volunteering</h1>
        <div>
        <Image
            src='/sac-oppurtunities.jpg'
            alt='sac-oppurtunities'
            width={500}
            height={300}
          />
          <p>Throughout the year SAC provides many opportunities to get involved with the club while simultaneously receiving volunteer hours. Events such as Haunted House and Mosaic Lunch require a lot of work in which we need YOUR help! During the time of these events, volunteer applications are released for any interested students</p>
          <p>Details on volunteering opportunities will be released on SAC social media platforms, daily announcements, as well as the website.</p>
        </div>
      </div>

      <div>
        <p>Let Numbers Talk</p>
        <CountingAnimation duration={2000} children={100}/>
      </div>
    </main>
  )
}

export default page