import clientPromise from '@/lib/mongodb';

function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-')           // Replace spaces with -
    .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
    .replace(/\-\-+/g, '-')         // Replace multiple - with single -
    .replace(/^-+/, '')             // Trim - from start of text
    .replace(/-+$/, '');            // Trim - from end of text
}

export async function POST(req) {
  const { accessCode, title, description, dates } = await req.json();
  if (!accessCode || !title || !description || !Array.isArray(dates) || dates.length === 0) {
    return new Response(JSON.stringify({ error: 'Missing fields' }), { status: 400 });
  }

  const client = await clientPromise;
  const db = client.db();

  // Look up the user's club using the access code
  const user = await db.collection('accounts').findOne({ accessCode });
  if (!user || !user.club) {
    return new Response(JSON.stringify({ error: 'User or club not found' }), { status: 404 });
  }

  const club = user.club;

  const docs = dates.map((date) => {
    const customId = `${club}_${date}_${Math.random().toString(36).substr(2, 9)}`;
    const slug = slugify(`${title} ${club} ${date}`);
    return {
      _id: customId,
      title,
      description,
      date,
      club,
      slug,
      approval: false,
      accessCode,
    };
  });

  await db.collection('announcements').insertMany(docs);

  return new Response(JSON.stringify({ message: 'Announcement(s) submitted' }), { status: 201 });
}