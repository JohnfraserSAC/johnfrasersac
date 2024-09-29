import React, { FC } from 'react';

const API_URL = process.env.NEXT_PUBLIC_SHEETDB_ENDPOINT_URL;

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

// grab and generate the proper data
export async function generateStaticParams() {
  if (!API_URL) {
    throw new Error('API URL is not defined');
  }
  const response = await fetch(API_URL, {
    next: { revalidate: 200 }
  });
  const data = await response.json();

  console.log('Fetched data:', data); // Log the fetched data

  if (!Array.isArray(data)) {
    throw new Error('Fetched data is not an array');
  }

  return data.map((announcement: any) => ({
    slug: announcement.slug,
  }));
}

// now provide the corresponding data for the slug that you have been directed to. SLUGS MUST HAVE UNIQUE IDS
async function fetchAnnouncement(slug: string): Promise<Announcement | null> {
  if (!API_URL) {
    throw new Error('API URL is not defined');
  }
  const response = await fetch(API_URL, {
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