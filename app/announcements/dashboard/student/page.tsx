'use client';

import { useEffect, useState } from 'react';
import { requireRole } from '@/lib/checkAuth';

export default function StudentDashboard() {
  const [accessCode, setAccessCode] = useState('');
  const [newUsername, setNewUsername] = useState('');
  const [status, setStatus] = useState('');
  const [club, setClub] = useState('');
  const [description, setDescription] = useState('');


  useEffect(() => {
    const user = requireRole('student');
    setAccessCode(user?.accessCode || '');
    }, []);


  const handleUsernameChange = async (e: any) => {
    e.preventDefault();
    const res = await fetch('/api/user/update-username', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ accessCode, newUsername }),
    });


    const result = await res.json();
    setStatus(res.ok ? '✅ Username updated!' : `❌ ${result.error}`);
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '500px', margin: 'auto' }}>
        <hr className='h-[100px]'></hr>
        <h1>Student Dashboard</h1>
        <form onSubmit={handleUsernameChange} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <input
            placeholder="New Username"
            value={newUsername}
            onChange={(e) => setNewUsername(e.target.value)}
            required
            />
            <button type="submit">Set Username</button>
        </form>
        {status && <p style={{ marginTop: '1rem' }}>{status}</p>}

        <h2 style={{ marginTop: '2rem' }}>Submit Announcement</h2>
        <form
        onSubmit={async (e) => {
            e.preventDefault();
            const res = await fetch('/api/announcements/create', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ club, description, date: new Date().toISOString().slice(0, 10) }),
            });
            const result = await res.json();
            alert(res.ok ? '✅ Announcement submitted' : `❌ ${result.error}`);
            setClub('');
            setDescription('');
        }}
        style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
        >
        <input placeholder="Club Name" value={club} onChange={(e) => setClub(e.target.value)} required />
        <textarea placeholder="Announcement" value={description} onChange={(e) => setDescription(e.target.value)} required />
        <button type="submit">Submit Announcement</button>
        </form>

    </div>
  );
}

