import clientPromise from '@/lib/mongodb';
import { notFound } from 'next/navigation';
import { format, parseISO } from 'date-fns';
import ReactMarkdown from 'react-markdown';


export default async function AnnouncementsForDatePage({ params }: { params: { date: string } }) {
  const client = await clientPromise;
  const db = client.db();

  // Find all approved announcements for this date
  const announcements = await db
    .collection('announcements')
    .find({ date: params.date, approval: true })
    .toArray();

  if (!announcements || announcements.length === 0) return notFound();

  // Format the date for display
  let displayDate = params.date;
  try {
    displayDate = format(parseISO(params.date), 'MMMM do, yyyy');
  } catch {}

  return (
    <main className=''>
      <div className='text-white custom-background-4 flex justify-center items-center flex-col text-center pt-40 w-full py-8'>
        <h1 className='text-4xl font-bold mb-6'>Announcements for {displayDate}</h1>
      </div>
      <div className='container mx-auto py-12'>
        <ul className='space-y-6'>
          {announcements.map((a) => (
            <li key={a._id.toString()} className='border p-4 rounded shadow'>
              <h2 className='text-2xl font-semibold'>{a.title}</h2>
              <ReactMarkdown>{a.description}</ReactMarkdown>
              <p className='text-sm text-gray-600'>Club: {a.club}</p>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}