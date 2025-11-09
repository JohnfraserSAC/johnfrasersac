import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;

if (!uri) {
  throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
}

const client = new MongoClient(uri);
const clientPromise = client.connect();

// Default export for the client promise
export default clientPromise;

export async function POST(req: { json: () => PromiseLike<{ accessCode: any; }> | { accessCode: any; }; }) {
  try {
    const { accessCode } = await req.json();
    
    if (!accessCode) {
      return new Response(
        JSON.stringify({ error: 'Access code is required' }), 
        { 
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    }

    // Use the shared client connection
    const client = await clientPromise;
    const db = client.db('schoolPortal');
    const user = await db.collection('accounts').findOne({ accessCode });

    if (!user) {
      return new Response(
        JSON.stringify({ error: 'Invalid access code' }), 
        { 
          status: 401,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    }

    return new Response(
      JSON.stringify({ 
        username: user.username, 
        role: user.role, 
        accessCode: user.accessCode 
      }),
      { 
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  } catch (error) {
    console.error('Login API error:', error);
    let errorMessage = 'Unknown error';
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    return new Response(
      JSON.stringify({ error: 'Internal server error', details: errorMessage }), 
      { 
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }
}