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
    next: { revalidate: 200 }
  });
  const data: Announcement[] = await response.json();
  console.log('Fetched data:', data);
  return data.map((announcement: any) => ({
    slug: announcement.slug,
  }));
}

async function fetchAnnouncement(slug: string): Promise<Announcement | null> {
  const response = await fetch('https://sheetdb.io/api/v1/07ube0lmjw2nh', {
    next: { revalidate: 200 }
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
        <p>can&apos;t find that one lol.</p>
      </div>
    );
  }

  return (
    <div className='flex flex-col justify-center items-center'>
      <div key={announcement.id} className='container flex flex-col justify-center items-center my-40  gap-y-10'>
        <div className='h-full  w-full'>
          <h1 className='text-5xl font-semibold text-center underline'>{announcement.title}</h1>
          <div className='w-full flex justify-center items-center mt-4'>
            <p className=' w-8/12'>{announcement.content}</p>
          </div>
        </div>
        <div className='w-full  text-right mr-12'>
          <p>Posted on: {announcement.date}</p>
        </div>
      </div>
    </div>
  );
};

export default Page;