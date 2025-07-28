import clientPromise from '@/lib/mongodb';
import { ObjectId } from 'mongodb';

export async function DELETE(req) {
  const { id } = await req.json();
  console.log('Received delete id:', id);

  if (!id || typeof id !== 'string') {
    console.log('Invalid or missing id');
    return new Response(JSON.stringify({ error: 'Invalid or missing id' }), { status: 400 });
  }

  const client = await clientPromise;
  const db = client.db();

  // Try ObjectId delete first
  let result = await db.collection('accounts').deleteOne({ _id: new ObjectId(id) });
  console.log('Tried ObjectId delete, deletedCount:', result.deletedCount);

  // If not found, try string delete
  if (result.deletedCount === 0) {
    result = await db.collection('accounts').deleteOne({ _id: id });
    console.log('Tried string delete, deletedCount:', result.deletedCount);
  }

  return new Response(JSON.stringify({ deleted: result.deletedCount }), { status: 200 });
}