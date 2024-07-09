"use client"

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { fetchAnnouncements } from '@/components/announcementData';

export default function AnnouncementList() {
  const [announcements, setAnnouncements] = useState<{ id: string, title: string, slug: string, date: string }[]>([]);
  const [sortOrder, setSortOrder] = useState('descending'); // Default to 'descending'


  // with api enabled
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const data = await fetchAnnouncements();
  //     setAnnouncements(data);
  //   };
  //   fetchData();
  // }, []);

  // for mock tests
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchAnnouncements();
      // Map over the data to convert id from number to string
      const formattedData = data.map(announcement => ({
        ...announcement,
        id: announcement.id.toString(), // Convert id to string
      }));
      setAnnouncements(formattedData);
    };
    fetchData();
  }, []);
  

  // Function to sort announcements
  const sortedAnnouncements = announcements.sort((a, b) => {
    // Check if either date is undefined and handle accordingly
    if (!a.date || !b.date) {
      // Assume undefined dates are "less" than defined dates
      if (!a.date && b.date) {
        return sortOrder === 'descending' ? 1 : -1;
      }
      if (a.date && !b.date) {
        return sortOrder === 'descending' ? -1 : 1;
      }
      // If both dates are undefined, consider them equal
      return 0;
    }
  
    // If both dates are defined, proceed with localeCompare
    if (sortOrder === 'descending') {
      return b.date.localeCompare(a.date); // Most recent to least recent
    } else {
      return a.date.localeCompare(b.date); // Least recent to most recent
    }
  });

  return (
    <div className='flex justify-center items-center flex-col text-center' style={{height: '90.3333vh'}}>
      <h1 className='text-5xl font-bold '> JFSS Announcements</h1>
      <div className='w-full flex justify-center items-center mt-12 lg:mt-40 lg:flex-row flex-col'>
        <div id='filter' className='flex flex-col justify-center items-center mb-12 w-5/12 '>
          <button className='button-2' onClick={() => setSortOrder('descending')}>Most Recent to Least Recent</button>
          <button className='button-2' onClick={() => setSortOrder('ascending')}>Least Recent to Most Recent</button>
        </div>
        <ul className='w-7/12 text-center overflow-y-auto' style={{height: '20vh'}}>
          {sortedAnnouncements.map((announcement) => (
            <li key={announcement.id}>
              <div className='flex justify-evenly mb-4'>
                <Link href={`/announcements/search/${announcement.slug}`}>
                  <p className='font-bold underline'>{announcement.title}</p>
                </Link>
                <p className='text-blue-500'>{announcement.date}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}