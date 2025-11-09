import clientPromise from '@/lib/mongodb';

export async function POST(req) {
  try {
    // Debug: Check if environment variable is loaded
    console.log('MONGODB_URI exists:', !!process.env.MONGODB_URI);
    console.log('MONGODB_URI length:', process.env.MONGODB_URI?.length);
    
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
    return new Response(
      JSON.stringify({ error: 'Internal server error', details: error.message }), 
      { 
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }
}