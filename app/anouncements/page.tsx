import React from 'react';
import Image from 'next/image';
import AnouncementHeroBackground from '@/components/anouncements-bg'; 

const page = () => {
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

      
    </main>
  );
};

export default page;