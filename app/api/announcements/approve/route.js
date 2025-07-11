import clientPromise from '@/lib/mongodb';
import { ObjectId } from 'mongodb';

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const role = searchParams.get('role');
    const club = searchParams.get('club');

    const client = await clientPromise;
    const db = client.db();

    const filter = { approval: false };

    if (role === 'teacher' && club) {
      filter.club = club;
    }

    const data = await db.collection('announcements').find(filter).toArray();
    return new Response(JSON.stringify(data), { status: 200 });
  } catch (err) {
    console.error('GET /api/announcements/approve error:', err);
    return new Response(JSON.stringify({ error: 'Server error' }), { status: 500 });
  }
}

export async function PATCH(req) {
  try {
    const { id, approval = true } = await req.json();

    if (!id) {
      return new Response(JSON.stringify({ error: 'Missing id' }), { status: 400 });
    }

    const client = await clientPromise;
    const db = client.db();

    const result = await db.collection('announcements').updateOne(
      { _id: new ObjectId(id) },
      { $set: { approval } }
    );

    return new Response(JSON.stringify({ updated: result.modifiedCount }), { status: 200 });
  } catch (err) {
    console.error('PATCH /api/announcements/approve error:', err);
    return new Response(JSON.stringify({ error: 'Server error' }), { status: 500 });
  }
}