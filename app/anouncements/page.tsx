import React from 'react';
import Image from 'next/image';
import AnouncementHeroBackground from '@/components/anouncements-bg'; // Assuming the correct component name is 'AnouncementHeroBackground'
import { EmblaOptionsType } from 'embla-carousel';
import EmblaCarousel from './EmblaCarousel'; // Assuming EmblaCarousel is in the same directory
import '../css/base.css';
import '../css/sandbox.css';
import '../css/embla.css';

const OPTIONS: EmblaOptionsType = { dragFree: true, loop: true };
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

type PropType = {
  options?: EmblaOptionsType;
};

const page: React.FC<PropType> = () => {
  return (
    <main>
      {/* HERO */}
      <div className='h-screen'>
        <AnouncementHeroBackground />
        <div>
          <h1>Anouncements</h1>
          <p>Check here for all the up to date news at John Fraser! Join our Google Classroom if you never want to miss an event.</p>
        </div>
      </div>

      {/* ACKNOWLEDGEMENT + CAROUSEL + ALL ANNOUNCEMENTS */}
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
    </main>
  );
};

export default page;