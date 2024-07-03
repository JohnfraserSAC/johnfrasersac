"use client"

import React, { useMemo, useState, useEffect } from 'react';
import clubs from '@/components/clubs';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const Page = () => {
  const [sortOrder, setSortOrder] = useState('ascending');
  const [windowWidth, setWindowWidth] = useState(0); // Initialize with a default value

  useEffect(() => {
    // Ensure window object is accessed only on the client side
    if (typeof window !== 'undefined') {
      setWindowWidth(window.innerWidth);

      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };

      window.addEventListener('resize', handleResize);

      // Cleanup the event listener on component unmount
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  const sortedAnnouncements = useMemo(() => clubs.sort((a, b) => {
    if (sortOrder === 'ascending') {
      return a.name.localeCompare(b.name);
    } else {
      return b.name.localeCompare(a.name);
    }
  }), [sortOrder]);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  return (
    <main>
      <div className='h-96  flex justify-center items-center flex-col text-center '>
        <h1 className='text-4xl mb-5 lg:text-6xl font-bold'>Clubs</h1>
        <p className='w-7/12 text-lg'>Check here for all the updates and clubs here at John Fraser Secondary School!</p>
      </div>
      <div className='w-full flex h-40 justify-center items-start mb-12'>
        <div id='filter' className='flex '>
          <button className='button-2' onClick={() => setSortOrder('ascending')}>A-Z</button>
          <button className='button-2' onClick={() => setSortOrder('descending')}>Z-A</button>
        </div>
      </div>
      <div className='w-full flex justify-center items-center mb-24'>
        <div className='justify-center items-center flex-col lg:grid lg:grid-cols-3 lg:w-7/12'>
          <AnimatePresence>
            {sortedAnnouncements.map((club, index) => (
              <motion.div
                key={club.id}
                initial={{ opacity: 1, y: (windowWidth > 768 && (index % 3) === 1) ? 60 : 0 }} // Apply conditional y offset based on window width
                animate={{ opacity: 1, y: (windowWidth > 768 && (index % 3) === 1) ? 60 : 0 }} // Same as initial to prevent animation on scroll
                exit={{ opacity: 0, y: -20 }}
                layout
                className="asd123"
              >
                <div className=''>
                  <h2>{club.name}</h2>
                  <p>{club.description}</p>
                  <Link href={club.insta ?? ''} target='_blank'>
                    <button className='button-5'>Learn More</button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </main>
  );
};

export default Page