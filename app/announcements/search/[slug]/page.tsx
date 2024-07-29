import React, { FC } from 'react';

interface Announcement {
  id: number;
  slug: string;
  title: string;
  content: string;
  date: string;
}

interface PageProps {
  params: {
    id: number;
    slug: string;
    title: string;
    content: string;
    date: string;
  }
}

export async function generateStaticParams() {
  const response = await fetch('https://sheetdb.io/api/v1/07ube0lmjw2nh', {
    next: { revalidate: 86400 }
  });
  const data: Announcement[] = await response.json();
  console.log('Fetched data:', data);
  return data.map((announcement: any) => ({
    slug: announcement.slug,
  }));
}

async function fetchAnnouncement(slug: string): Promise<Announcement | null> {
  const response = await fetch('https://sheetdb.io/api/v1/07ube0lmjw2nh', {
    next: { revalidate: 10 }
  });
  const data: Announcement[] = await response.json();
  return data.find((announcement) => announcement.slug === slug) || null;
}

const Page: FC<PageProps> = async ({ params }) => {
  const { slug } = params;
  const announcement = await fetchAnnouncement(slug);

  if (!announcement) {
    return (
      <div className='flex flex-col justify-center items-center' style={{ height: '50.3333vh' }}>
        <p>Announcement not found.</p>
      </div>
    );
  }

  return (
    <div className='flex flex-col justify-center items-center' style={{ height: '50.3333vh' }}>
      <div key={announcement.id}>
        <h1>{announcement.title}</h1>
        <p>{announcement.content}</p>
        <div className='w-full text-left'>
          <p>Posted on: {announcement.date}</p>
        </div>
      </div>
    </div>
  );
};

export default Page;