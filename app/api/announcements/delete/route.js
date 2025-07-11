import clientPromise from '@/lib/mongodb';
import { ObjectId } from 'mongodb';

export async function DELETE(req) {
  const { id } = await req.json();
  const client = await clientPromise;
  const db = client.db();

  const result = await db.collection('announcements').deleteOne({ _id: new ObjectId(id) });

  return new Response(JSON.stringify({ deleted: result.deletedCount }), { status: 200 });
}