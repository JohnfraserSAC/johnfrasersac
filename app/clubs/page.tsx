"use client"

import React, { useMemo } from 'react'
import clubs from '@/components/clubs'
import { useState } from 'react';
import Link from 'next/link';
// Import motion and AnimatePresence
import { motion, AnimatePresence } from 'framer-motion';

const page = () => {
  const [sortOrder, setSortOrder] = useState('ascending');

  // Use useMemo to avoid unnecessary sorts on re-render
  const sortedAnnouncements = useMemo(() => clubs.sort((a, b) => {
    if (sortOrder === 'ascending') {
      return a.name.localeCompare(b.name);
    } else {
      return b.name.localeCompare(a.name);
    }
  }), [sortOrder]);

  return (
    <main>
      <div className='h-96 flex justify-center items-center flex-col text-center'>
        <h1>Clubs</h1>
        <p>Check here for all the updates and clubs here at John Fraser Secondary School!</p>
      </div>
      <div className='w-full flex justify-center items-center'>
        <div id='filter' className='w-7/12 flex justify-center items-center mb-28'>
          <button className='button-2' onClick={() => setSortOrder('ascending')}>A-Z</button>
          <button className='button-2' onClick={() => setSortOrder('descending')}>Z-A</button>
        </div>
      </div>
      <div className='w-full flex justify-center items-center mb-24'>
        <div className='justify-center items-center flex-col grid grid-cols-3  w-7/12'>
        <AnimatePresence>
          {sortedAnnouncements.map((club, index) => (
            <motion.div
              key={club.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: ((index % 3) === 1) ? 60 : 0 }} // Apply conditional y offset
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

export default page