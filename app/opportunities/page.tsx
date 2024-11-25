'use client'

import React from 'react'
import { useEffect, useState } from 'react'
import CountingAnimation from '@/components/Counting';
import Image from 'next/image';
import Link from 'next/link';


const page = () => {


  return (
    <main className='overflow-hidden y'>
      {/* Header */}
      <div className='custom-background-4 flex flex-col justify-center items-center text-center py-30 pt-10' style={{height: "50.3333vh"}}>
        <div className='container w-11/12 text-white'>
          <h1 className='font-bold lg:text-6xl text-[40px] mb-4'>SAC Opportunities</h1>
          <p className='text-lg'>SAC has many opportunities throughout the school year for you to volunteer, attend events, and apply to be a part of the team!</p>
        </div>
      </div>
{/* Sections for each event */}
      <div className='mx-auto container flex-col lg:flex-row flex justify-center items-center my-8'>
        <div className='lg:w-7/12 lg:flex lg:justify-center lg:items-center'>
          <Image
          // Image from public file, opportunities folder. Keep it in kebab case
              src='/opportunities/mosaic-lunch.jpg'
              // Alternate text shown if the image doesn't load
              alt='Mosaic lunch'
              // size of the image
              width={500}
              height={300}
              className='mb-8 lg:w-[700px] lg:h-auto'
            />
        </div>
        {/* Title of the event */}
        <div className='w-11/12 lg:w-5/12 lg:mx-4'>
          <h1 className='font-semibold text-2xl w-8/12 lg:w-9/12 lg:text-4xl lg:font-semibold'>Mosaic Lunch</h1>
          {/* Line made from blue parallelograms */}
          <div className="images-line lg:my-4 lg:w-1/12">
            <div className="image" style={{backgroundImage: "url('/image.svg')"}}></div>
            <div className="image" style={{backgroundImage: "url('/image.svg')"}}></div>
            <div className="image" style={{backgroundImage: "url('/image.svg')"}}></div>
            <div className="image" style={{backgroundImage: "url('/image.svg')"}}></div>
          </div>
          <div className=''>
            {/* subtitle for the event */}
            <p className='mb-8 font-semibold text-lg lg:text-xl'>Sign up now!</p>
            {/* Further details of the event */}
            <p className='mb-3 lg:text-lg lg:w-11/12'>On Wednesday, November 27th, get ready for the most exciting cultural event of the year at John Fraser – Mosaic Lunch! In the cafeteria, check out the cultural booths and performances! This is your chance to experience the diverse heritage, passion, and talents with the whole school community, whether it’s through delicious food, traditional crafts, or a unique performance. Don't forget to wear your traditional attire to proudly showcase your cultural heritage!</p>
            <p className='mb-8 lg:text-lg lg:w-9/12'>Make sure to buy tickets using SchoolCashOnline in the Jag store on Nov. 25th, and 26th and in the Cafeteria on 28th. Using these tickets you can enjoy and purchase a delightful selection of food and goods!</p>
            {/* If applicable for the event: buttons found here*/}
            <div className='mb-8 w-full flex justify-center items-center lg:justify-normal lg:items-start'>
             
            </div>
          </div>
        </div>
      </div>

{/* Twinkle links section */}
      <div className='mx-auto container flex-col lg:flex-row flex justify-center items-center my-8'>
        {/* Left: Details */}
        <div className='w-11/12 lg:w-3/4 lg:mx-4'>
          <h1 className='font-semibold text-2xl w-8/12 lg:w-9/12 lg:text-4xl lg:font-semibold'>Twinkle Links</h1>

          {/* Decorative line */}
          <div className="images-line lg:my-4 lg:w-1/12">
            <div className="image" style={{backgroundImage: "url('/image.svg')"}}></div>
            <div className="image" style={{backgroundImage: "url('/image.svg')"}}></div>
            <div className="image" style={{backgroundImage: "url('/image.svg')"}}></div>
            <div className="image" style={{backgroundImage: "url('/image.svg')"}}></div>
          </div>

          {/* Event description */}
          <p className='mb-4 lg:text-lg lg:w-full'>
          Join us for the exciting Twinkle Links event at John Fraser! Everyone's names will be beautifully displayed throughout the school, creating a sparkling connection between us all. If you spot your name, snap a picture and send it to the John Fraser SAC Instagram account. You'll be entered into a raffle for a chance to win a fantastic prize!
          </p>
<p className='mb-8 italic lg:w-1/2'>If you prefer not to have your name displayed publicly, please use the opt-out form below.</p>
          {/* Classroom link */}
          <div className='mb-8 w-full flex justify-center items-center lg:justify-normal lg:items-start'>
            <Link href={'https://docs.google.com/forms/d/e/1FAIpQLSdsnDoU2AaVLVq5jI5vHhgNeOLfwOx2GBRYsP_-aHRSAa47UA/viewform?usp=sharing'}>
              <button className='button-2'>
                <p>Opt-out of Twinkle Links</p>
              </button>
            </Link>
          </div>
        </div>

        
      </div>

         {/* Section: Honourary & Grade Rep Applications */}
         <div className='mx-9 overflow-hidden container flex-col lg:flex-row flex justify-center items-center my-8'>
        {/* Left: Details */}
        <div className='w-11/12 lg:w-5/12 lg:mx-4'>
          <h1 className='font-semibold text-2xl w-8/12 lg:w-9/12 lg:text-4xl lg:font-semibold'>Honourary & Grade Rep Applications</h1>

          {/* Decorative line */}
          <div className="images-line lg:my-4 lg:w-1/12">
            <div className="image" style={{backgroundImage: "url('/image.svg')"}}></div>
            <div className="image" style={{backgroundImage: "url('/image.svg')"}}></div>
            <div className="image" style={{backgroundImage: "url('/image.svg')"}}></div>
            <div className="image" style={{backgroundImage: "url('/image.svg')"}}></div>
          </div>

          {/* Event description */}
          <p className='mb-8 font-semibold text-lg lg:text-xl'>Closed</p>
          <p className='mb-8 lg:text-lg lg:w-9/12'>
            Our honourary & grade rep applications will open next September. To learn more, check out our Google Classroom (code: i725i36) and visit our Instagram: @johnfrasersac!
          </p>

          {/* Classroom link */}
          <div className='mb-8 w-full flex justify-center items-center lg:justify-normal lg:items-start'>
            <Link href={'https://google.com'}>
              <button className='button-2'>
                <p>Join Classroom</p>
              </button>
            </Link>
          </div>
        </div>

        {/* Right: Image */}
        <div className='lg:w-7/12 lg:flex lg:justify-center lg:items-center'>
          <Image
            src='/sac-oppurtunities.jpg'
            alt='sac-oppurtunities'
            width={500}
            height={300}
            className='mb-8 lg:w-[700px] lg:h-auto'
          />
        </div>
      </div>

      {/* Section: Volunteering */}
      <div className='w-full flex flex-col justify-center items-center'>
        <div className='container flex flex-col justify-center items-center lg:flex-row lg:mx-8 mt-32'>
          {/* Title and Image */}
          <div className='lg:flex-col container'>
            <h1 className='font-semibold text-3xl w-8/12 mb-7'>Volunteering</h1>
            <Image
              src='/volunteering-img.jpg'
              alt='sac-oppurtunities'
              width={500}
              height={300}
            />
          </div>

          {/* Volunteering Details */}
          <div className='w-full flex justify-center items-center mt-12'>
            <div className='gap-y-12 flex flex-col justify-center items-center text center w-10/12 leading-10 lg:text-xl'>
              <p>
                Throughout the year SAC provides many opportunities to get involved with the club while simultaneously receiving volunteer hours. 
                Events such as Haunted House and Mosaic Lunch require a lot of work in which we need YOUR help! 
                During the time of these events, volunteer applications are released for any interested students.
              </p>
              <p>
                Details on volunteering opportunities will be released on SAC social media platforms, daily announcements, as well as the website.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Section: Numbers Talk */}
      <hr className='hr-1'></hr>
      <div className='lg:flex lg:justify-center lg:items-center container mx-auto'>
        <div className='flex flex-col lg:flex-row lg:justify-between justify-center items-center text-center gap-y-5 mb-16 lg:w-10/12' data-aos="fade-up">
          <p className='text-5xl font-semibold'>Let Numbers Talk</p>

          {/* Counting Stats */}
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

export default page;