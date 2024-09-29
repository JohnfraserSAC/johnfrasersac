'use client'

import React from 'react'
import { useEffect, useState } from 'react'
import CountingAnimation from '@/components/Counting';
import Image from 'next/image';
import Link from 'next/link';


const page = () => {


  return (
    <main className=''>
      <div className='custom-background-4 flex flex-col justify-center items-center text-center py-30 pt-10' style={{height: "50.3333vh"}}>
        <div className='container w-11/12 text-white'>
          <h1 className='font-bold lg:text-6xl text-[40px] mb-4'>SAC Opportunities</h1>
          <p className='text-lg'>SAC has many opportunities throughout the school year for you to volunteer, attend events, and apply to be a part of the team!</p>
        </div>
      </div>
      

      <div className='mx-auto container flex-col lg:flex-row flex justify-center items-center my-8'>
        <div className='lg:w-7/12 lg:flex lg:justify-center lg:items-center'>
          <Image
              src='/sac-oppurtunities.jpg'
              alt='sac-oppurtunities'
              width={500}
              height={300}
              className='mb-8 lg:w-[700px] lg:h-auto'
            />
        </div>
        <div className='w-11/12 lg:w-5/12 lg:mx-4'>
          <h1 className='font-semibold text-2xl w-8/12 lg:w-9/12 lg:text-4xl lg:font-semibold'>Honourary & Grade Rep Applications</h1>
          <div className="images-line lg:my-4 lg:w-1/12">
            <div className="image" style={{backgroundImage: "url('/image.svg')"}}></div>
            <div className="image" style={{backgroundImage: "url('/image.svg')"}}></div>
            <div className="image" style={{backgroundImage: "url('/image.svg')"}}></div>
            <div className="image" style={{backgroundImage: "url('/image.svg')"}}></div>
          </div>
          <div className=''>
            <p className='mb-8 font-semibold text-lg lg:text-xl'>Closed</p>
            <p className='mb-8 lg:text-lg lg:w-9/12'>Our honourary & grade rep applications will open next September. To leanr more, check out our Google Classroom (code: i725i36) and visit our Instagram: @johnfrasersac!</p>
            <div className='mb-8 w-full flex justify-center items-center lg:justify-normal lg:items-start'>
              <Link href={'https://google.com'}>
                <button className='button-2'>
                  <p>Join Classroom</p>
                </button>
              </Link>
            </div>
          </div>
          
        </div>
      </div>
      <div className='w-full flex flex-col justify-center items-center'>
        <div className='container flex flex-col justify-center items-center lg:flex-row lg:mx-8 mt-32'>
          <div className='lg:flex-col container'>
            <h1 className='font-semibold text-3xl w-8/12 mb-7'>Volunteering</h1>
            <Image
                src='/volunteering-img.jpg'
                alt='sac-oppurtunities'
                width={500}
                height={300}
              />
          </div>
          <div className='w-full flex justify-center items-center mt-12'>
            <div className='gap-y-12 flex flex-col justify-center items-center text center w-10/12 leading-10 lg:text-xl'>
              <p>Throughout the year SAC provides many opportunities to get involved with the club while simultaneously receiving volunteer hours. Events such as Haunted House and Mosaic Lunch require a lot of work in which we need YOUR help! During the time of these events, volunteer applications are released for any interested students</p>
              <p>Details on volunteering opportunities will be released on SAC social media platforms, daily announcements, as well as the website.</p>
            </div>
          </div>
        </div>
      </div>

      <hr className='hr-1'></hr>
      <div className='lg:flex lg:justify-center lg:items-center container mx-auto'>
        <div className='flex flex-col lg:flex-row lg:justify-between justify-center items-center text-center gap-y-5 mb-16 lg:w-10/12' data-aos="fade-up">
          <p className='text-5xl font-semibold'>Let Numbers Talk</p>
          <div className='text-5xl font-extrabold'>
            <p><CountingAnimation duration={2000}>100</CountingAnimation>+</p>
            <p className='font-normal text-base'>Clubs</p>
          </div>
          
          <div className='text-5xl font-extrabold'>
            <p><CountingAnimation duration={2000}>1000</CountingAnimation>+</p>
            <p className='font-normal text-base'>Voters Last Year</p>
          </div>
          <div className='text-5xl font-extrabold'>
            <p><CountingAnimation duration={2000}>25</CountingAnimation>+</p>
            <p className='font-normal text-base'>Major Events</p>
          </div>
        </div>
      </div>
    </main>
  )
}

export default page