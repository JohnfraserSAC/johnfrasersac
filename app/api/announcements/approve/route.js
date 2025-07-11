import clientPromise from '@/lib/mongodb';
import { ObjectId } from 'mongodb';

export async function PATCH(req) {
  try {
    const { id, approval = true } = await req.json();

    if (!id || !ObjectId.isValid(id)) {
      return new Response(JSON.stringify({ error: 'Invalid or missing id' }), { status: 400 });
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