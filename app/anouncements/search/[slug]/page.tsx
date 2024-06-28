import React from 'react';
import announcements from '../announcementData'; // Adjust the import path as necessary

export default function Page({ params }: { params: { slug: string } }) {
  // Find the announcement that matches the slug
  const announcement = announcements.find(announcement => announcement.slug === params.slug);

  // Render the announcement or a not found message
  return (
    <div>
      {announcement ? (
        <div>
          <h1>{announcement.title}</h1>
          <p>{announcement.content}</p>
          <small>Posted on: {announcement.date}</small>
        </div>
      ) : (
        <p>Announcement not found.</p>
      )}
    </div>
  );
}