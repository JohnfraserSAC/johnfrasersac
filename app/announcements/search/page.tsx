"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import announcementsData from '@/components/announcementData';

export default function AnnouncementList() {
  const [sortOrder, setSortOrder] = useState('descending'); // Default to 'descending'

  // Function to sort announcements
  const sortedAnnouncements = announcementsData.sort((a, b) => {
    if (sortOrder === 'descending') {
      return b.date.localeCompare(a.date); // Most recent to least recent
    } else {
      return a.date.localeCompare(b.date); // Least recent to most recent
    }
  });

  return (
    <div className='flex justify-center items-center flex-col text-center' style={{height: '50.3333vh'}}>
      <h1>Announcements</h1>
      <div className='w-full flex justify-center items-center '>
        <div id='filter'>
          <button className='button-2' onClick={() => setSortOrder('descending')}>Most Recent to Least Recent</button>
          <button className='button-2' onClick={() => setSortOrder('ascending')}>Least Recent to Most Recent</button>
        </div>
        <ul className='w-6/12 text-center'>
          {sortedAnnouncements.map((announcement) => (
            <li key={announcement.id}>
              <div className='flex justify-between'>
                <Link href={`/announcements/search/${announcement.slug}`}>
                  <a className=''>{announcement.title}</a> {/* Updated to use <a> inside <Link> */}
                </Link>
                <p className=''>{announcement.date}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}