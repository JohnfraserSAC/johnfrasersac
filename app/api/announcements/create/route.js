import clientPromise from '@/lib/mongodb';

export async function POST(req) {
  const { club, description, date } = await req.json();
  if (!club || !description || !date) {
    return new Response(JSON.stringify({ error: 'Missing fields' }), { status: 400 });
  }

  const title = `${date}, ${club}`;
  const client = await clientPromise;
  const db = client.db();

  await db.collection('announcements').insertOne({
    title,
    description,
    date,
    approval: false
  });

  return new Response(JSON.stringify({ message: 'Announcement submitted' }), { status: 201 });
}