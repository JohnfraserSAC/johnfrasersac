import clientPromise from '@/lib/mongodb';

export async function PATCH(req) {
  const { accessCode, newUsername } = await req.json();
  if (!accessCode || !newUsername) {
    return new Response(JSON.stringify({ error: 'Missing fields' }), { status: 400 });
  }

  const client = await clientPromise;
  const db = client.db();
  const accounts = db.collection('accounts');

  const result = await accounts.updateOne(
    { accessCode }, 
    { $set: { username: newUsername } }
    );

    

  if (result.modifiedCount === 0) {
    return new Response(JSON.stringify({ error: 'User not found or not updated' }), { status: 404 });
  }

  return new Response(JSON.stringify({ message: 'Username updated successfully' }), { status: 200 });
}