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

      {/* Terry Fox Walk */}


       <div className='mx-auto container flex-col lg:flex-row flex justify-center items-center my-8'>
         <div className='lg:w-7/12 lg:flex lg:justify-center lg:items-center'>
           <Image
            src='/opportunities/mosaic-lunch.jpg'
            alt='Mosaic lunch'
            width={500}
            height={300}
            className='mb-8 lg:w-[700px] lg:h-auto'
          />
        </div>
        <div className='w-11/12 lg:w-5/12 lg:mx-4'>
          <h1 className='font-semibold text-2xl w-8/12 lg:w-9/12 lg:text-4xl lg:font-semibold'>Mosaic Lunch</h1>
          <div className="images-line lg:my-4 lg:w-1/12">
            <div className="image" style={{ backgroundImage: "url('/image.svg')" }}></div>
            <div className="image" style={{ backgroundImage: "url('/image.svg')" }}></div>
            <div className="image" style={{ backgroundImage: "url('/image.svg')" }}></div>
            <div className="image" style={{ backgroundImage: "url('/image.svg')" }}></div>
          </div>
          <div className=''>
            <p className='mb-8 font-semibold text-lg lg:text-xl'>Sign up now!</p>
            <p className='mb-3 lg:text-lg lg:w-11/12'>
              On Wednesday, November 20th, get ready for the most exciting cultural event of the year at John Fraser &ndash; Mosaic Lunch! 
              In the cafeteria, check out the cultural booths and performances! This is your chance to experience the diverse heritage, 
              passion, and talents with the whole school community, whether it&rsquo;s through delicious food, traditional crafts, or 
              a unique performance. Don&apos;t forget to wear your traditional attire to proudly showcase your cultural heritage!
            </p>
            {/* <p className='mb-8 lg:text-lg lg:w-9/12'>
              Make sure to buy tickets using SchoolCashOnline in the Jag store on Nov. 25th, and 26th and in the Cafeteria on 28th. 
              Using these tickets you can enjoy and purchase a delightful selection of food and goods!
            </p> */}
            <div className='mb-8 w-full flex justify-center items-center lg:justify-normal lg:items-start'>
              {/* Buttons for sign-up links can go here */}
            </div>
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
