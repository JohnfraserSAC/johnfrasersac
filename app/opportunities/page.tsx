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

      <div className='mx-auto container flex-col lg:flex-row flex justify-center items-center my-8'>
        <div className='lg:w-7/12 lg:flex lg:justify-center lg:items-center'>
          <Image
            src='/opportunities/Semi.jpg'
            alt='Semi Formal'
            width={500}
            height={300}
            className='mb-8 lg:w-[700px] lg:h-auto'
          />
        </div>
        <div className='w-11/12 lg:w-5/12 lg:mx-4'>
          <h1 className='font-semibold text-2xl w-8/12 lg:w-9/12 lg:text-4xl lg:font-semibold'>Semi-Formal</h1>
          <div className="images-line lg:my-4 lg:w-1/12">
            <div className="image" style={{ backgroundImage: "url('/image.svg')" }}></div>
            <div className="image" style={{ backgroundImage: "url('/image.svg')" }}></div>
            <div className="image" style={{ backgroundImage: "url('/image.svg')" }}></div>
            <div className="image" style={{ backgroundImage: "url('/image.svg')" }}></div>
          </div>
          <div className=''>
            <p className='mb-8 font-semibold text-lg lg:text-xl'>Upcoming… Feb 12, 2026</p>
            <p className='mb-3 lg:text-lg lg:w-11/12'>
              Mark your calendars Jags! Semi Formal is happening on February 12 at the NUVO event space and the theme is… Winter Wonderland!!
            </p>
          </div>
        </div>
      </div>

      <div className='mx-auto container flex-col lg:flex-row flex justify-center items-center my-8'>
        <div className='lg:w-7/12 lg:flex lg:justify-center lg:items-center'>
          <Image
            src='/opportunities/Festive.jpg'
            alt='Festive Photobooth'
            width={500}
            height={300}
            className='mb-8 lg:w-[700px] lg:h-auto'
          />
        </div>
        <div className='w-11/12 lg:w-5/12 lg:mx-4'>
          <h1 className='font-semibold text-2xl w-8/12 lg:w-9/12 lg:text-4xl lg:font-semibold'>Snowy Cinema x Winter Food Drive</h1>
          <div className="images-line lg:my-4 lg:w-1/12">
            <div className="image" style={{ backgroundImage: "url('/image.svg')" }}></div>
            <div className="image" style={{ backgroundImage: "url('/image.svg')" }}></div>
            <div className="image" style={{ backgroundImage: "url('/image.svg')" }}></div>
            <div className="image" style={{ backgroundImage: "url('/image.svg')" }}></div>
          </div>
          <div className=''>
            <p className='mb-8 font-semibold text-lg lg:text-xl'>Dec 18, 2025</p>
            <p className='mb-3 lg:text-lg lg:w-11/12'>
              The break is upon us Jags! SAC x FAC brought the student body a buyout they never expected! In P3, FAC ran a Student vs Teacher volleyball spirit rally while SAC ran the P4 movie screening the Grinch! We raised over $1500 for charity through this buyout in the name of the holiday spirit, great job! On top of that, SAC raised more money than ever before for our winter food drive where classes competed to see which homeroom could raise the most money/canned goods for our local food bank!
            </p>
          </div>
        </div>
      </div>

      <div className='mx-auto container flex-col lg:flex-row flex justify-center items-center my-8'>
        <div className='lg:w-7/12 lg:flex lg:justify-center lg:items-center'>
          <Image
            src='/opportunities/TwinkleLinks.jpg'
            alt='Twinkle Links'
            width={500}
            height={300}
            className='mb-8 lg:w-[700px] lg:h-[500px]'
          />
        </div>
        <div className='w-11/12 lg:w-5/12 lg:mx-4'>
          <h1 className='font-semibold text-2xl w-8/12 lg:w-9/12 lg:text-4xl lg:font-semibold'>Twinkle Links</h1>
          <div className="images-line lg:my-4 lg:w-1/12">
            <div className="image" style={{ backgroundImage: "url('/image.svg')" }}></div>
            <div className="image" style={{ backgroundImage: "url('/image.svg')" }}></div>
            <div className="image" style={{ backgroundImage: "url('/image.svg')" }}></div>
            <div className="image" style={{ backgroundImage: "url('/image.svg')" }}></div>
          </div>
          <div className=''>
            <p className='mb-8 font-semibold text-lg lg:text-xl'>December 2025</p>
            <p className='mb-3 lg:text-lg lg:w-11/12'>
              Look around our school! All of a sudden, bright festive lights everywhere! Students found their names and submitted the pictures for a chance to enter a raffle.
            </p>
          </div>
        </div>
      </div>

      <div className='mx-auto container flex-col lg:flex-row flex justify-center items-center my-8'>
        <div className='lg:w-7/12 lg:flex lg:justify-center lg:items-center'>
          <Image
            src='/opportunities/Workshop.jpg'
            alt='TSMS Workshop'
            width={500}
            height={300}
            className='mb-8 lg:w-[700px] lg:h-auto'
          />
        </div>
        <div className='w-11/12 lg:w-5/12 lg:mx-4'>
          <h1 className='font-semibold text-2xl w-8/12 lg:w-9/12 lg:text-4xl lg:font-semibold'>TSMS Workshop</h1>
          <div className="images-line lg:my-4 lg:w-1/12">
            <div className="image" style={{ backgroundImage: "url('/image.svg')" }}></div>
            <div className="image" style={{ backgroundImage: "url('/image.svg')" }}></div>
            <div className="image" style={{ backgroundImage: "url('/image.svg')" }}></div>
            <div className="image" style={{ backgroundImage: "url('/image.svg')" }}></div>
          </div>
          <div className=''>
            <p className='mb-8 font-semibold text-lg lg:text-xl'>Dec 4, 2025</p>
            <p className='mb-3 lg:text-lg lg:w-11/12'>
              SAC wrapped up the TSMS Grade 8 leadership workshop! Finally bringing it back after a long awaited time. We had a blast presenting, running activities and celebrating with our future Jags!
            </p>
          </div>
        </div>
      </div>

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
            <p className='mb-8 font-semibold text-lg lg:text-xl'>Nov 27, 2025</p>
            <p className='mb-3 lg:text-lg lg:w-11/12'>
              The most exciting cultural event of the year at John Fraser, Mosaic Lunch, brought the whole school together in the cafeteria for cultural booths and performances. It was a chance for everyone to experience our diverse heritage, passion, and talent through delicious food, traditional crafts, and unique performances. Students also wore traditional attire to proudly showcase their cultural heritage. Through this event, we raised over $1000 for families in need through the Peel Winter Caring Program. Great Job Fraser!
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

      <div className='mx-auto container flex-col lg:flex-row flex justify-center items-center my-8'>
        <div className='lg:w-7/12 lg:flex lg:justify-center lg:items-center'>
          <Image
            src='/opportunities/Retreat.jpg'
            alt='Retreat'
            width={500}
            height={300}
            className='mb-8 lg:w-[700px] lg:h-auto'
          />
        </div>
        <div className='w-11/12 lg:w-5/12 lg:mx-4'>
          <h1 className='font-semibold text-2xl w-8/12 lg:w-9/12 lg:text-4xl lg:font-semibold'>SAC Retreat</h1>
          <div className="images-line lg:my-4 lg:w-1/12">
            <div className="image" style={{ backgroundImage: "url('/image.svg')" }}></div>
            <div className="image" style={{ backgroundImage: "url('/image.svg')" }}></div>
            <div className="image" style={{ backgroundImage: "url('/image.svg')" }}></div>
            <div className="image" style={{ backgroundImage: "url('/image.svg')" }}></div>
          </div>
          <div className=''>
            <p className='mb-8 font-semibold text-lg lg:text-xl'>Nov 17, 2025</p>
            <p className='mb-3 lg:text-lg lg:w-11/12'>
              On this day, the council went on a retreat for team bonding out in YMCA collecting memories far more memorable than planned! There were lots of fun activities like tree top trekking, archery and lots of eating!
            </p>
          </div>
        </div>
      </div>

      <div className='mx-auto container flex-col lg:flex-row flex justify-center items-center my-8'>
        <div className='lg:w-7/12 lg:flex lg:justify-center lg:items-center'>
          <Image
            src='/opportunities/FearFestMain.jpg'
            alt='Fear Fest'
            width={500}
            height={300}
            className='mb-8 lg:w-[700px] lg:h-auto'
          />
        </div>
        <div className='w-11/12 lg:w-5/12 lg:mx-4'>
          <h1 className='font-semibold text-2xl w-8/12 lg:w-9/12 lg:text-4xl lg:font-semibold'>Fraser Fear Fest/Fear Week</h1>
          <div className="images-line lg:my-4 lg:w-1/12">
            <div className="image" style={{ backgroundImage: "url('/image.svg')" }}></div>
            <div className="image" style={{ backgroundImage: "url('/image.svg')" }}></div>
            <div className="image" style={{ backgroundImage: "url('/image.svg')" }}></div>
            <div className="image" style={{ backgroundImage: "url('/image.svg')" }}></div>
          </div>
          <div className=''>
            <p className='mb-8 font-semibold text-lg lg:text-xl'>Oct 28, 2025</p>
            <p className='mb-3 lg:text-lg lg:w-11/12'>
              Something spooky is going on… Fraser Fear Fest! SAC&rsquo;s brand new Halloween event where we took the initiative to create a large scale event early in the year. It was a blast seeing everyone enjoy the inflatables, haunted maze, booths, movies and snacks! Thank you so much to FAC, Visual Arts Club, AV club, Arts Council and Fraser Chefs for running booths and supporting the event! We hit over 360 attendees for this event!
            </p>
          </div>
        </div>
      </div>

      <div className='mx-auto container flex-col lg:flex-row flex justify-center items-center my-8'>
        <div className='lg:w-7/12 lg:flex lg:justify-center lg:items-center'>
          <Image
            src='/opportunities/Sunrise.jpg'
            alt='Senior Sunrise'
            width={500}
            height={300}
            className='mb-8 lg:w-[700px] lg:h-auto'
          />
        </div>
        <div className='w-11/12 lg:w-5/12 lg:mx-4'>
          <h1 className='font-semibold text-2xl w-8/12 lg:w-9/12 lg:text-4xl lg:font-semibold'>Senior Sunrise</h1>
          <div className="images-line lg:my-4 lg:w-1/12">
            <div className="image" style={{ backgroundImage: "url('/image.svg')" }}></div>
            <div className="image" style={{ backgroundImage: "url('/image.svg')" }}></div>
            <div className="image" style={{ backgroundImage: "url('/image.svg')" }}></div>
            <div className="image" style={{ backgroundImage: "url('/image.svg')" }}></div>
          </div>
          <div className=''>
            <p className='mb-8 font-semibold text-lg lg:text-xl'>Oct 17, 2025</p>
            <p className='mb-3 lg:text-lg lg:w-11/12'>
              Thank you so much to all the seniors who came to the senior sunrise event! It was a great time seeing the majority of our graduating class come together, good luck on your post secondary planning and studying!
            </p>
          </div>
        </div>
      </div>

      <div className='mx-auto container flex-col lg:flex-row flex justify-center items-center my-8'>
        <div className='lg:w-7/12 lg:flex lg:justify-center lg:items-center'>
          <Image
            src='/opportunities/CPL.jpg'
            alt='CPL'
            width={500}
            height={300}
            className='mb-8 lg:w-[700px] lg:h-auto'
          />
        </div>
        <div className='w-11/12 lg:w-5/12 lg:mx-4'>
          <h1 className='font-semibold text-2xl w-8/12 lg:w-9/12 lg:text-4xl lg:font-semibold'>Club Promo Lunch</h1>
          <div className="images-line lg:my-4 lg:w-1/12">
            <div className="image" style={{ backgroundImage: "url('/image.svg')" }}></div>
            <div className="image" style={{ backgroundImage: "url('/image.svg')" }}></div>
            <div className="image" style={{ backgroundImage: "url('/image.svg')" }}></div>
            <div className="image" style={{ backgroundImage: "url('/image.svg')" }}></div>
          </div>
          <div className=''>
            <p className='mb-8 font-semibold text-lg lg:text-xl'>Oct 6-7, 2025</p>
            <p className='mb-3 lg:text-lg lg:w-11/12'>
              Thank you to all who came and took part in Club Promo Lunch! We&rsquo;re so proud to see all the clubs show off their creativity and spirit this year.
            </p>
          </div>
        </div>
      </div>

      <div className='mx-auto container flex-col lg:flex-row flex justify-center items-center my-8'>
        <div className='lg:w-7/12 lg:flex lg:justify-center lg:items-center'>
          <Image
            src='/opportunities/TerryFox.jpg'
            alt='Terry Fox'
            width={500}
            height={300}
            className='mb-8 lg:w-[700px] lg:h-auto'
          />
        </div>
        <div className='w-11/12 lg:w-5/12 lg:mx-4'>
          <h1 className='font-semibold text-2xl w-8/12 lg:w-9/12 lg:text-4xl lg:font-semibold'>Terry Fox</h1>
          <div className="images-line lg:my-4 lg:w-1/12">
            <div className="image" style={{ backgroundImage: "url('/image.svg')" }}></div>
            <div className="image" style={{ backgroundImage: "url('/image.svg')" }}></div>
            <div className="image" style={{ backgroundImage: "url('/image.svg')" }}></div>
            <div className="image" style={{ backgroundImage: "url('/image.svg')" }}></div>
          </div>
          <div className=''>
            <p className='mb-8 font-semibold text-lg lg:text-xl'>Sept 26, 2025</p>
            <p className='mb-3 lg:text-lg lg:w-11/12'>
              For Terry Fox, SAC fired up a “Heat for Hope” BBQ to support the food drive, while also debuting our brand-new tap machines that will power most of our future events! Thanks to everyone&rsquo;s support, we raised $3,710.40 for the Terry Fox Foundation. Way to go, Jags!
              And it didn&rsquo;t stop there: SAC and FAC teamed up to run a hugely successful Terry Fox Walk, and we wrapped it all up with a week long Terry Fox themed trivia game, complete with five individual prizes up for grabs.

            </p>
          </div>
        </div>
      </div>

      <div className='mx-auto container flex-col lg:flex-row flex justify-center items-center my-8'>
        <div className='lg:w-7/12 lg:flex lg:justify-center lg:items-center'>
          <Image
            src='/opportunities/NineOrientation.jpg'
            alt='Grade Nine Orientation'
            width={500}
            height={300}
            className='mb-8 lg:w-[700px] lg:h-auto'
          />
        </div>
        <div className='w-11/12 lg:w-5/12 lg:mx-4'>
          <h1 className='font-semibold text-2xl w-8/12 lg:w-9/12 lg:text-4xl lg:font-semibold'>Grade 9 Orientation</h1>
          <div className="images-line lg:my-4 lg:w-1/12">
            <div className="image" style={{ backgroundImage: "url('/image.svg')" }}></div>
            <div className="image" style={{ backgroundImage: "url('/image.svg')" }}></div>
            <div className="image" style={{ backgroundImage: "url('/image.svg')" }}></div>
            <div className="image" style={{ backgroundImage: "url('/image.svg')" }}></div>
          </div>
          <div className=''>
            <p className='mb-8 font-semibold text-lg lg:text-xl'>Sept 2, 2025</p>
            <p className='mb-3 lg:text-lg lg:w-11/12'>
              SAC collaborated with FAC, PM and Arts Council for an incredible day for the Grade 9&rsquo;s stepping foot into the high school world! From activities to delicious food and exciting presentations. It was all about building connections and making John Fraser feel like home!
            </p>
          </div>
        </div>
      </div>

    </main>
  );
};

export default Page;
