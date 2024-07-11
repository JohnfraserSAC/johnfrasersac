"use client"

import React from 'react';
import { fetchAnnouncements } from '@/utils/announcementData';

interface Announcement {
  id: number;
  slug: string;
  title: string;
  content: string;
  date: string;
}

export default function Page({ params }: { params: { slug: string } }) {
  const [announcements, setAnnouncements] = React.useState<Announcement[]>([]);

  React.useEffect(() => {
    const fetchAndSetAnnouncements = async () => {
      const data = await fetchAnnouncements();
      setAnnouncements(data);
    };

    fetchAndSetAnnouncements();
  }, []);

  const announcement = announcements.find(announcement => announcement.slug === params.slug);

  return (
    <div>
      {announcement ? (
        <div className='flex flex-col justify-center items-center' style={{ height: '50.3333vh' }}>
          <h1>{announcement.title}</h1>
          <p>{announcement.content}</p>
          <div className='w-full text-left'>
            <p>Posted on: {announcement.date}</p>
          </div>
        </div>
      ) : (
        <p>Announcement not found.</p>
      )}
    </div>
  );
}