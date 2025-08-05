import clientPromise from '@/lib/mongodb';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db();
    const announcements = await db.collection('announcements').find({}).toArray();
    return new Response(JSON.stringify(announcements), {
      status: 200,
      headers: { 'Cache-Control': 'no-store' }
    });
  } catch (err) {
    console.error('GET /api/announcements/all error:', err);
    return new Response(JSON.stringify({ error: 'Server error' }), { status: 500 });
  }
}