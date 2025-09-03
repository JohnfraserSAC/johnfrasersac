import clientPromise from '@/lib/mongodb';

export async function DELETE(req) {
  const { id } = await req.json();

  console.log('Received id for deletion:', id);

  if (!id || typeof id !== 'string') {
    return new Response(JSON.stringify({ error: 'Invalid or missing id' }), { status: 400 });
  }

  const client = await clientPromise;
  const db = client.db();

  const result = await db.collection('announcements').deleteOne({ _id: id });

  return new Response(JSON.stringify({ deleted: result.deletedCount }), { status: 200 });
}