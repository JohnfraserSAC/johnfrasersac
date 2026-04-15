import clientPromise from '@/lib/mongodb';

export async function POST(req) {
  const { username, accessCode, role, club } = await req.json();
  if (!accessCode || !role || !club) return new Response(JSON.stringify({ error: 'Missing fields' }), { status: 400 });

  const client = await clientPromise;
  const db = client.db('schoolPortal');

  const userToInsert = { accessCode, role, club };
  if (username) {
    userToInsert.username = username;
  }

  const result = await db.collection('accounts').insertOne(userToInsert);
  return new Response(JSON.stringify({ message: 'User created', id: result.insertedId }), { status: 201 });
}
