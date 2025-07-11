import clientPromise from '@/lib/mongodb';

export async function POST(req) {
  const { accessCode, role, club } = await req.json();
  if (!accessCode || !role || !club) return new Response(JSON.stringify({ error: 'Missing fields' }), { status: 400 });

  const client = await clientPromise;
  const db = client.db();

  const result = await db.collection('accounts').insertOne({ accessCode, role, club });
  return new Response(JSON.stringify({ message: 'User created', id: result.insertedId }), { status: 201 });
}