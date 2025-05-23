'use client';
import React, { useMemo, useState, useEffect, useRef } from 'react';
import clubs from '@/utils/clubs';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const Page = () => {
  const [sortOrder, setSortOrder] = useState('ascending');
  const [windowWidth, setWindowWidth] = useState(0);
  const [activeClubId, setActiveClubId] = useState(null);

  // Handle window resizing to detect width 
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWindowWidth(window.innerWidth);

      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };

      window.addEventListener('resize', handleResize);

      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  // Sort clubs by name based on the sortOrder
  const sortedAnnouncements = useMemo(() => {
    return clubs.slice().sort((a, b) => {
      return sortOrder === 'ascending'
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name);
    });
  }, [sortOrder]);

  // Toggle club dropdown visibility
  const toggleClub = (clubId: any) => {
    setActiveClubId((prev) => (prev === clubId ? null : clubId));
  };

  return (
    <main className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
      <div className="custom-background-4 w-full px-auto text-center py-20 lg:pt-40">
        <div className='container mx-auto'>
          <h1 className="text-3xl lg:text-6xl font-bold mb-5 text-white">Clubs</h1>
          <p className="text-lg lg:w-6/12 mx-auto text-gray-300 mb-5">
            Check here for all the updates and clubs at John Fraser Secondary School!
          </p>  
          <Link href='https://docs.google.com/spreadsheets/d/1gHvHkLVwV21s-vFNmRKdqwaBZlhQx1HRjXFa8dwhhAU/edit?usp=sharing'>
            <button className='button-5'>Clubs Masterlist</button>
          </Link>
        </div>  
      </div>

      {/* Sort Buttons */}
      <div className="flex justify-center space-x-4 my-8">
        <button
          className={`px-4 py-2 rounded-lg font-semibold ${sortOrder === 'ascending' ? 'button-2' : 'button-3'} transition duration-300 ease-in-out`}
          onClick={() => setSortOrder('ascending')}
        >
          A-Z
        </button>
        <button
          className={`px-4 py-2 rounded-lg font-semibold ${sortOrder === 'descending' ? 'button-2' : 'button-3'} transition duration-300 ease-in-out`}
          onClick={() => setSortOrder('descending')}
        >
          Z-A
        </button>
      </div>

      {/* Club Dropdowns */}
      <AnimatePresence mode="wait">
        <motion.div
          key={sortOrder}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="container grid grid-cols-1 gap-2 my-5 md:w-3/4 px-4 lg:px-0 mx-auto"
        >
          {sortedAnnouncements.map((club) => (
            <div
              key={club.id}
              className="bg-white rounded-lg p-4 transition duration-300"
            >
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleClub(club.id)}
              >
                <h2 className="text-xl font-semibold text-gray-800">{club.name}</h2>
                <span className="text-gray-500">
                  <motion.span
                    animate={{ rotate: activeClubId === club.id ? 540 : 0 }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                    style={{ display: 'inline-block' }}
                  >
                    ▼
                  </motion.span>
                </span>
              </div>

              {/* Dropdown Content with animation */}
              <AnimatePresence initial={false}>
                {activeClubId === club.id && (
                  <motion.div
                    key="content"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden mt-4"
                  >
                    <p className="text-gray-600 mb-4">{club.description}</p>
                    {club.insta && (
                      <Link href={club.insta} target="_blank">
                        <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300">
                          Learn More
                        </button>
                      </Link>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </motion.div>
      </AnimatePresence>
    </main>
  );
};

export default Page;
