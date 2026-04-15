import clientPromise from '@/lib/mongodb';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db('schoolPortal');
    const users = await db.collection('accounts').find({}).toArray();
    return new Response(JSON.stringify(users), {
      status: 200,
      headers: {
        'Cache-Control': 'no-store',
        'Content-Type': 'application/json'
      }
    });
  } catch (err) {
    console.error('GET /api/admin/users error:', err);
    return new Response(JSON.stringify({ error: 'Database connection failed' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
