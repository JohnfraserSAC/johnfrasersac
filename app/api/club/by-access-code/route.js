import clientPromise from '@/lib/mongodb';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const accessCode = searchParams.get('accessCode');

  if (!accessCode) {
    return new Response(JSON.stringify({ error: 'Missing accessCode' }), { status: 400 });
  }

  try {
    const client = await clientPromise;
    const db = client.db();
    const user = await db.collection('accounts').findOne({ accessCode });
    console.log('User found:', user); // Add this line

    if (!user || !user.club) {
      return new Response(JSON.stringify({ error: 'Club not found' }), { status: 404 });
    }

    return new Response(JSON.stringify({ club: user.club }), { status: 200 });
  } catch (err) {
    console.error('GET /api/club/by-access-code error:', err);
    return new Response(JSON.stringify({ error: 'Server error' }), { status: 500 });
  }
}