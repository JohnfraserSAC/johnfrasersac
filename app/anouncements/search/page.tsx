"use client"

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import announcements from '@/components/announcementData';

export default function AnnouncementList() {
  const [searchDate, setSearchDate] = useState('');
  const [filteredAnnouncements, setFilteredAnnouncements] = useState([]);

  useEffect(() => {
    const sortedAnnouncements = [...announcements].sort((a, b) => new Date(b.date) - new Date(a.date));
  
    let filtered;
    if (searchDate) {
      // Format the search date as MM-DD-YYYY
      const searchDateFormatted = new Date(searchDate + 'T00:00:00').toLocaleDateString('en-US', {
        month: '2-digit', day: '2-digit', year: 'numeric'
      });
      filtered = sortedAnnouncements.filter(announcement => {
        // Format each announcement date as MM-DD-YYYY for comparison
        const announcementDateFormatted = new Date(announcement.date + 'T00:00:00').toLocaleDateString('en-US', {
          month: '2-digit', day: '2-digit', year: 'numeric'
        });
        return announcementDateFormatted === searchDateFormatted;
      });
    } else {
      filtered = sortedAnnouncements.slice(0, 5);
    }
    setFilteredAnnouncements(filtered);
  }, [searchDate]);

  return (
    <div className='flex flex-col items-center text-center justify-center' style={{height: '50.333vh'}}>
      <h1>Announcements</h1>
      <input
        type="date"
        value={searchDate}
        onChange={(e) => setSearchDate(e.target.value)}
        className="mb-4"
        aria-label="Search by date"
      />
      <table className='w-full'>
        <thead>
          <tr>
            <th>Title</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {filteredAnnouncements.map((announcement) => (
            <tr key={announcement.id}>
              <td>
                <Link href={`/anouncements/search/${announcement.slug}`} passHref>
                  <p aria-label={`Read more about ${announcement.title}`}>{announcement.title}</p>
                </Link>
              </td>
              <td>{new Date(announcement.date).toLocaleDateString('en-US', {
                month: '2-digit', day: '2-digit', year: 'numeric'
              })}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}