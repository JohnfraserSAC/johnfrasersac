'use client'; // Ensures this component is client-side rendered.

import React from 'react';
import CountingAnimation from '@/components/Counting';
import Image from 'next/image';
import Link from 'next/link';

const Page = () => {
  return (
    <main className='overflow-hidden'>
      {/* Header */}
      <div 
        className='custom-background-4 flex flex-col justify-center items-center text-center py-30 pt-10' 
        style={{ height: '50.3333vh' }}
      >
        <div className='container w-11/12 text-white'>  
          <h1 className='font-bold lg:text-6xl text-[40px] mb-4'>SAC Opportunities</h1>
          <p className='text-lg'>
            SAC has many opportunities throughout the school year for you to volunteer, attend events, and apply to be a part of the team!
          </p>
        </div>
      </div>

      {/* Twinkle Links Section */}
      <div className='mx-auto container flex-col lg:flex-row flex justify-center items-center my-8'>
        <div className='w-11/12 lg:w-3/4 lg:mx-4'>
          <h1 className='font-semibold text-2xl w-8/12 lg:w-9/12 lg:text-4xl lg:font-semibold'>Charity Week</h1>
          <div className="images-line lg:my-4 lg:w-1/12">
            <div className="image" style={{ backgroundImage: "url('/image.svg')" }}></div>
            <div className="image" style={{ backgroundImage: "url('/image.svg')" }}></div>
            <div className="image" style={{ backgroundImage: "url('/image.svg')" }}></div>
            <div className="image" style={{ backgroundImage: "url('/image.svg')" }}></div>
          </div>
          <p className='mb-4 lg:text-lg lg:w-full'>
          <i>Charity Week</i> at John Fraser is an exciting school-wide event where every class joins forces 
          to create unique booths, raising funds for a meaningful cause. As the biggest and most anticipated event of the year,
           it combines community spirit, creativity, and fun—all for charity!
          </p>
          <p className='mb-8 italic lg:w-1/2'>
            Sign up your class for Charity Week by filling out the form below!
          </p>
          <div className='mb-8 w-full flex justify-center items-center lg:justify-normal lg:items-start'>
            <Link href={'https://docs.google.com/forms/d/13M6Kk5zegFMl1KroGXiJufdH8yMgulVi06epb8nnz0M/edit?pli=1'}>
              <button className='button-2'>
                <p>Charity week proposal form</p>
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Other sections */}

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
  );
};

export default Page;
