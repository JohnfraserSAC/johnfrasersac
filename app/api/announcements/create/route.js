import clientPromise from '@/lib/mongodb';

export async function POST(req) {
  const { accessCode, description, date } = await req.json();
  if (!accessCode || !description || !date) {
    return new Response(JSON.stringify({ error: 'Missing fields' }), { status: 400 });
  }

  const client = await clientPromise;
  const db = client.db();

  // Look up the user's club using the access code
  const user = await db.collection('accounts').findOne({ accessCode });
  if (!user || !user.club) {
    return new Response(JSON.stringify({ error: 'User or club not found' }), { status: 404 });
  }

  const club = user.club;
  const title = `${date}, ${club}`;
  const customId = `${club}_${date}_${Math.random().toString(36).substr(2, 9)}`;

  await db.collection('announcements').insertOne({
    _id: customId,
    title,
    description,
    date,
    club,
    approval: false
  });

  return new Response(JSON.stringify({ message: 'Announcement submitted' }), { status: 201 });
}