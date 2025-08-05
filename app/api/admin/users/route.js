import clientPromise from '@/lib/mongodb';

export const dynamic = 'force-dynamic';

export async function GET() {
  const client = await clientPromise;
  const db = client.db();
  const users = await db.collection('accounts').find({}).toArray();
  return new Response(JSON.stringify(users), {
    status: 200,
    headers: {
      'Cache-Control': 'no-store',
      'Content-Type': 'application/json'
    }
  });
}