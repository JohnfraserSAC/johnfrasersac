"use client"

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { fetchAnnouncements } from '@/utils/announcementData';
import { UseBgCondition } from '@/components/BgConditionContext';

interface Announcement {
  id: string;
  slug: string;
  title: string;
  content: string;
  date: string;
}

export default function AnnouncementList() {
  const [announcements, setAnnouncements] = useState<{ id: string, title: string, slug: string, date: string }[]>([]);
  const [sortedAnnouncements, setSortedAnnouncements] = useState<{id: string, title: string, slug: string, date: string }[]>([]);
  const [sortOrder, setSortOrder] = useState('descending'); 

  const { setBgCondition } = UseBgCondition();

  useEffect(() => {
	setBgCondition("blackbg");

	return () => setBgCondition("");
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchAnnouncements();
      const formattedData = data.map((announcement: { id: { toString: () => any; }; }) => ({
        ...announcement,
        id: announcement.id.toString(),
      }));
      setAnnouncements(formattedData);
    };
    fetchData();
  }, []);


  
  useEffect(() => {
    const sortAnnouncements = announcements.sort((a, b) => {
      if (!a.date || !b.date) {
        if (!a.date && b.date) {
          return sortOrder === 'descending' ? 1 : -1;
        }
        if (a.date && !b.date) {
          return sortOrder === 'descending' ? -1 : 1;
        }
        return 0;
      }
    
      if (sortOrder === 'descending') {
        return b.date.localeCompare(a.date); // most to least recent
      } else {
        return a.date.localeCompare(b.date); // least to most recent
      }
    });
      setSortedAnnouncements(sortAnnouncements);
    }, [announcements, sortOrder]);

    console.log(sortedAnnouncements)

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