import clientPromise from '@/lib/mongodb';
import { notFound } from 'next/navigation';
import { format, parseISO } from 'date-fns';

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
    <main className='container mx-auto py-12'>
      <h1 className='text-4xl font-bold mb-6'>Announcements for {displayDate}</h1>
      <ul className='space-y-6'>
        {announcements.map((a) => (
          <li key={a._id} className='border p-4 rounded shadow'>
            <h2 className='text-2xl font-semibold'>{a.title}</h2>
            <p>{a.description}</p>
            <p className='text-sm text-gray-600'>Club: {a.club} | Access Code: {a.accessCode}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}