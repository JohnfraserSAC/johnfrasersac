import clientPromise from '@/lib/mongodb';

export async function POST(req) {
  const { accessCode } = await req.json();
  const client = await clientPromise;
  const db = client.db();
  const user = await db.collection('accounts').findOne({ accessCode });

  if (!user) {
    return new Response(JSON.stringify({ error: 'Invalid access code' }), { status: 401 });
  }

  return new Response(
    JSON.stringify({ username: user.username, role: user.role, accessCode: user.accessCode }),
    { status: 200 }
  );
}
