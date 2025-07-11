import clientPromise from '@/lib/mongodb';

export async function GET() {
  const client = await clientPromise;
  const db = client.db();
  const users = await db.collection('accounts').find({}).toArray();
  return new Response(JSON.stringify(users), { status: 200 });
}