import clientPromise from '@/lib/mongodb';
import { ObjectId } from 'mongodb';

export async function PATCH(req) {
  const { _id, username, accessCode, role, club } = await req.json();
  if (!_id) return new Response(JSON.stringify({ error: 'Missing _id' }), { status: 400 });

  const updateFields = {};
  if (username) updateFields.username = username;
  if (accessCode) updateFields.accessCode = accessCode;
  if (role) updateFields.role = role;
  if (club) updateFields.club = club;

  const client = await clientPromise;
  const db = client.db();

  const result = await db.collection('accounts').updateOne(
    { _id: new ObjectId(_id) },
    { $set: updateFields }
  );

  if (result.modifiedCount === 0) {
    return new Response(JSON.stringify({ error: 'No update occurred' }), { status: 400 });
  }

  return new Response(JSON.stringify({ message: 'User updated' }), { status: 200 });
}