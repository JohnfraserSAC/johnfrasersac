import React from 'react';
import Link from 'next/link';
import announcements from '@/components/announcementData';


export default function AnnouncementList() {
  return (
    <div className='flex justify-center items-center flex-col text-center border' style={{height: '50.3333vh'}}>
      <h1>Announcements</h1>
      <div className='w-full border flex justify-center items-center '>
        <ul className='w-6/12 text-center border'>
          {announcements.map((announcement) => (
            <li key={announcement.id}>
              <div className='flex justify-between'>
                <Link href={`/announcements/search/${announcement.slug}`}>
                  <p className=''>{announcement.title}</p>
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