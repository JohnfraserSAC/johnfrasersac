import React from 'react';

interface Announcement {
  id: number;
  slug: string;
  title: string;
  content: string;
  date: string;
}

export async function generateStaticParams() {
  const response = await fetch('https://sheetdb.io/api/v1/07ube0lmjw2nh', {})
  const data = await response.json();
  return data.map(() => ({
  }))

}

const page = () => {
  return (
    <div>
      {/* {announcement ? (
        <div className='flex flex-col justify-center items-center' style={{ height: '50.3333vh' }}>
          <h1>{announcement.title}</h1>
          <p>{announcement.content}</p>
          <div className='w-full text-left'>
            <p>Posted on: {announcement.date}</p>
          </div>
        </div>
      ) : (
        <p>Announcement not found.</p>
      )} */}
    </div>
  );
}

export default page