'use client'; // Ensures this component is client-side rendered.

import React from 'react';
import CountingAnimation from '@/components/Counting';
import Image from 'next/image';
import Link from 'next/link';

interface Opportunity {
  id: number;
  title: string;
  date: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

const OPPORTUNITIES: Opportunity[] = [
  {
    id: 1,
    title: 'Semi-Formal',
    date: 'Upcoming… Feb 12, 2026',
    description: 'Mark your calendars Jags! Semi Formal is happening on February 12 at the NUVO event space and the theme is… Winter Wonderland!!',
    imageSrc: '/opportunities/Semi.jpg',
    imageAlt: 'Semi Formal',
  },
  {
    id: 2,
    title: 'Snowy Cinema x Winter Food Drive',
    date: 'Dec 18, 2025',
    description: 'The break is upon us Jags! SAC x FAC brought the student body a buyout they never expected! In P3, FAC ran a Student vs Teacher volleyball spirit rally while SAC ran the P4 movie screening the Grinch! We raised over $1500 for charity through this buyout in the name of the holiday spirit, great job! On top of that, SAC raised more money than ever before for our winter food drive where classes competed to see which homeroom could raise the most money/canned goods for our local food bank!',
    imageSrc: '/opportunities/Festive.jpg',
    imageAlt: 'Festive Photobooth',
  },
  {
    id: 3,
    title: 'Twinkle Links',
    date: 'December 2025',
    description: 'Look around our school! All of a sudden, bright festive lights everywhere! Students found their names and submitted the pictures for a chance to enter a raffle.',
    imageSrc: '/opportunities/TwinkleLinks.jpg',
    imageAlt: 'Twinkle Links',
  },
  {
    id: 4,
    title: 'TSMS Workshop',
    date: 'Dec 4, 2025',
    description: 'SAC wrapped up the TSMS Grade 8 leadership workshop! Finally bringing it back after a long awaited time. We had a blast presenting, running activities and celebrating with our future Jags!',
    imageSrc: '/opportunities/Workshop.jpg',
    imageAlt: 'TSMS Workshop',
  },
  {
    id: 5,
    title: 'Mosaic Lunch',
    date: 'Nov 27, 2025',
    description: 'The most exciting cultural event of the year at John Fraser, Mosaic Lunch, brought the whole school together in the cafeteria for cultural booths and performances. It was a chance for everyone to experience our diverse heritage, passion, and talent through delicious food, traditional crafts, and unique performances. Students also wore traditional attire to proudly showcase their cultural heritage. Through this event, we raised over $1000 for families in need through the Peel Winter Caring Program. Great Job Fraser!',
    imageSrc: '/opportunities/mosaic-lunch.jpg',
    imageAlt: 'Mosaic lunch',
  },
  {
    id: 6,
    title: 'SAC Retreat',
    date: 'Nov 17, 2025',
    description: 'On this day, the council went on a retreat for team bonding out in YMCA collecting memories far more memorable than planned! There were lots of fun activities like tree top trekking, archery and lots of eating!',
    imageSrc: '/opportunities/Retreat.jpg',
    imageAlt: 'Retreat',
  },
  {
    id: 7,
    title: 'Fraser Fear Fest/Fear Week',
    date: 'Oct 28, 2025',
    description: 'Something spooky is going on… Fraser Fear Fest! SAC’s brand new Halloween event where we took the initiative to create a large scale event early in the year. It was a blast seeing everyone enjoy the inflatables, haunted maze, booths, movies and snacks! Thank you so much to FAC, Visual Arts Club, AV club, Arts Council and Fraser Chefs for running booths and supporting the event! We hit over 360 attendees for this event!',
    imageSrc: '/opportunities/FearFestMain.jpg',
    imageAlt: 'Fear Fest',
  },
  {
    id: 8,
    title: 'Senior Sunrise',
    date: 'Oct 17, 2025',
    description: 'Thank you so much to all the seniors who came to the senior sunrise event! It was a great time seeing the majority of our graduating class come together, good luck on your post secondary planning and studying!',
    imageSrc: '/opportunities/Sunrise.jpg',
    imageAlt: 'Senior Sunrise',
  },
  {
    id: 9,
    title: 'Club Promo Lunch',
    date: 'Oct 6-7, 2025',
    description: 'Thank you to all who came and took part in Club Promo Lunch! We’re so proud to see all the clubs show off their creativity and spirit this year.',
    imageSrc: '/opportunities/CPL.jpg',
    imageAlt: 'CPL',
  },
  {
    id: 10,
    title: 'Terry Fox',
    date: 'Sept 26, 2025',
    description: 'For Terry Fox, SAC fired up a “Heat for Hope” BBQ to support the food drive, while also debuting our brand-new tap machines that will power most of our future events! Thanks to everyone’s support, we raised $3,710.40 for the Terry Fox Foundation. Way to go, Jags! And it didn’t stop there: SAC and FAC teamed up to run a hugely successful Terry Fox Walk, and we wrapped it all up with a week long Terry Fox themed trivia game, complete with five individual prizes up for grabs.',
    imageSrc: '/opportunities/TerryFox.jpg',
    imageAlt: 'Terry Fox',
  },
  {
    id: 11,
    title: 'Grade 9 Orientation',
    date: 'Sept 2, 2025',
    description: 'SAC collaborated with FAC, PM and Arts Council for an incredible day for the Grade 9’s stepping foot into the high school world! From activities to delicious food and exciting presentations. It was all about building connections and making John Fraser feel like home!',
    imageSrc: '/opportunities/NineOrientation.jpg',
    imageAlt: 'Grade Nine Orientation',
  },
];

const Page = () => {
  return (
    <main className='overflow-hidden'>
      <div
        className='custom-background-4 flex flex-col justify-center items-center text-center py-30 pt-10'
        style={{ height: '50.3333vh' }}
      >
        <div className='container w-11/12 text-white' data-aos="fade-up">
          <h1 className='font-bold lg:text-6xl text-[40px] mb-10'>SAC Opportunities</h1>
          <p className='text-lg mb-16'>
            SAC has many opportunities throughout the school year for you to volunteer, attend events, and apply to be a part of the team!
          </p>
          <p className='text-5xl font-semibold mb-20'>Let Numbers Talk</p>
        </div>
        <div className='flex flex-col lg:flex-row lg:justify-between text-white justify-center items-center text-center mb-16 lg:w-10/12' data-aos="fade-up">
          <div className='text-5xl font-extrabold'>
            <p><CountingAnimation duration={2000}>67</CountingAnimation>+</p>
            <p className='font-normal text-base'>Clubs</p>
          </div>
          <div className='text-5xl font-extrabold'>
            <p><CountingAnimation duration={2000}>1000</CountingAnimation>+</p>
            <p className='font-normal text-base'>Voters Last Year</p>
          </div>
          <div className='text-5xl font-extrabold'>
            <p><CountingAnimation duration={2000}>15</CountingAnimation>+</p>
            <p className='font-normal text-base'>Major Events</p>
          </div>
        </div>
      </div>

      {OPPORTUNITIES.map((opportunity) => (
        <div key={opportunity.id} className='mx-auto container flex-col lg:flex-row flex justify-center items-center my-8'>
          <div className='lg:w-7/12 lg:flex lg:justify-center lg:items-center'>
            <Image
              src={opportunity.imageSrc}
              alt={opportunity.imageAlt}
              width={500}
              height={300}
              className='mb-8 lg:w-[700px] lg:h-[500px]'
            />
          </div>
          <div className='w-11/12 lg:w-5/12 lg:mx-4'>
            <h1 className='font-semibold text-2xl w-8/12 lg:w-9/12 lg:text-4xl lg:font-semibold'>{opportunity.title}</h1>
            <div className="images-line lg:my-5 lg:w-1/11">
              {Array.from({ length: 10 }, (_, i) => (
                <div key={i} className="image" style={{ backgroundImage: "url('/image.svg')" }} />
              ))}
            </div>
            <div className=''>
              <p className='mb-8 font-semibold text-lg lg:text-xl'>{opportunity.date}</p>
              <p className='mb-3 lg:text-lg lg:w-11/12'>
                {opportunity.description}
              </p>
            </div>
          </div>
        </div>
      ))}

    </main>
  );
};

export default Page;
