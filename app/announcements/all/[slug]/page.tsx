import clientPromise from '@/lib/mongodb';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';

export default async function SingleAnnouncementPage({ params }: { params: { slug: string } }) {
  const client = await clientPromise;
  const db = client.db();

  const announcement = await db
    .collection('announcements')
    .findOne({ slug: params.slug });

  if (!announcement) return notFound();

  return (
    <main className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-4">{announcement.title}</h1>
      <div className="text-lg mb-4">
        <ReactMarkdown >{announcement.description}</ReactMarkdown>
      </div>
      <p className="text-gray-600 text-sm">Date: {announcement.date}</p>
      <p className="text-gray-600 text-sm">Club: {announcement.club}</p>
    </main>
  );
}