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

      <main>
        <div>
          <p>Terry Fox Day holds a profound significance in the hearts of Canadians and, increasingly, people around the world. This annual observance, typically celebrated on the second Sunday in September, serves as a powerful reminder of the enduring legacy of Terry Fox, a true hero who exemplified the spirit of determination, resilience, and selflessness.</p>
          <Image
            src='/opportunities/terry-fox1.jpg'
            alt='Terry Fox Picture 1'
            width={800}
            height={400}
            className='my-8 mx-auto rounded-lg shadow-lg'
          />
        </div>

<p>Terry Fox's journey, known as the Marathon of Hope, began in 1980 when he set out to run across Canada to raise funds and awareness for cancer research. His mission was deeply personal, as he himself battled cancer and lost a leg to the disease. Undeterred by the physical challenges he faced, Terry's unwavering commitment to his cause inspired a nation and ignited a global movement.</p>
<p>Terry Fox Day is a time to reflect on the incredible impact one individual can have on the world. It's a day to remember that no obstacle is insurmountable when fueled by a sense of purpose and the determination to make a difference. Terry's courage and resilience continue to inspire countless individuals to overcome their own challenges and contribute to causes they hold dear.</p>
<p>Moreover, this day serves as a call to action, encouraging people to continue Terry Fox's work by supporting cancer research and other noble causes. The funds raised through Terry Fox Runs held on this day have been instrumental in advancing medical research, leading to breakthroughs in the fight against cancer.</p>
<p>In essence, Terry Fox Day underscores the importance of empathy, community, and the pursuit of a better world. It stands as a tribute to a young man who, though he lost his battle with cancer, sparked a movement that endures to this day. Through his selflessness, courage, and determination, Terry Fox reminds us all that we have the power to change the world, one step at a time.</p>
      </main>



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
