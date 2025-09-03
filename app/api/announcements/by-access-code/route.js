import clientPromise from '@/lib/mongodb';

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const accessCode = searchParams.get('accessCode');
  if (!accessCode) {
    return Response.json({ error: 'Missing access code' }, { status: 400 });
  }

  try {
    const client = await clientPromise;
    const db = client.db();
    const announcements = await db
      .collection('announcements')
      .find({ accessCode })
      .toArray();

    // Each announcement will include its title if present in the DB
    return Response.json({ announcements });
  } catch (err) {
    return Response.json({ error: 'Server error' }, { status: 500 });
  }
}