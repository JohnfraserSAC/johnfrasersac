import clientPromise from '@/lib/mongodb';
import { ObjectId } from 'mongodb';

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const accessCode = searchParams.get('accessCode'); // teacher's access code

    const client = await clientPromise;
    const db = client.db();

    let filter = { approval: false };

    if (accessCode) {
      // Find the teacher's club
      const teacher = await db.collection('accounts').findOne({ accessCode });
      if (teacher && teacher.club) {
        filter.club = teacher.club;
      } else {
        return new Response(JSON.stringify({ error: 'Teacher or club not found' }), { status: 404 });
      }
    }

    const announcements = await db.collection('announcements').find(filter).toArray();
    return new Response(JSON.stringify(announcements), { status: 200 });
  } catch (err) {
    console.error('GET /api/announcements/approve error:', err);
    return new Response(JSON.stringify({ error: 'Server error' }), { status: 500 });
  }
}

export async function PATCH(req) {
  try {
    const body = await req.json();
    console.log('PATCH body:', body); // <-- This will print the JSON you send
    const { id, approval } = body;
    if (!id || typeof approval !== 'boolean') {
      return new Response(JSON.stringify({ error: 'Missing id or approval' }), { status: 400 });
    }


    const client = await clientPromise;
    const db = client.db();

  const result = await db.collection('announcements').updateOne(
    { _id: id }, // Use string id directly
    { $set: { approval } }
  );
    if (result.matchedCount === 0) {
      return new Response(JSON.stringify({ error: 'Announcement not found' }), { status: 404 });
    }

    return new Response(JSON.stringify({ updated: result.modifiedCount }), { status: 200 });
  } catch (err) {
    console.error('PATCH /api/announcements/approve error:', err);
    return new Response(JSON.stringify({ error: 'Server error' }), { status: 500 });
  }
}