import React from 'react';
import announcements from '@/components/announcementData';

export default function Page({ params }: { params: { slug: string } }) {
  // Find the announcement that matches the slug
  const announcement = announcements.find(announcement => announcement.slug === params.slug);

  // Render the announcement or a not found message
  return (
    <div>
      
      {announcement ? (
        <div className=' flex flex-col justify-center items-center' style={{ height: '50.3333vh' /* 5/6 of the viewport height */ }}>
            <h1 className=''>{announcement.title}</h1>
            <p>{announcement.content}</p>
            <div className='w-full text-left'>
                <p className=''>Posted on: {announcement.date}</p>
            </div>
        </div>
      ) : (
        <p>Announcement not found.</p>
      )}
    </div>
  );
}