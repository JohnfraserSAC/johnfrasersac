'use client';

import { useEffect, useState } from 'react';
import { requireRole } from '@/lib/checkAuth';

export default function TeacherDashboard() {
  const [accessCode, setAccessCode] = useState('');
  const [newUsername, setNewUsername] = useState('');
  const [status, setStatus] = useState('');
  const [announcements, setAnnouncements] = useState([]);
  const [role, setRole] = useState('');
  const [club, setClub] = useState('');

  useEffect(() => {
    const user = requireRole('teacher');
    setAccessCode(user?.accessCode || '');
    const localUser = JSON.parse(localStorage.getItem('user') || '{}');
    setRole(localUser.role || '');
    setClub(localUser.club || '');

    fetchAnnouncements(localUser.role, localUser.club);
  }, []);

  const fetchAnnouncements = async (role: string, club: string) => {
    try {
      const res = await fetch(`/api/announcements/approve?role=${role}&club=${club}`);
      const data = await res.json();
      setAnnouncements(data);
    } catch (err) {
      setStatus('❌ Failed to fetch announcements.');
    }
  };

  const handleApprove = async (id: string) => {
    try {
      await fetch('/api/announcements/approve', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id }),
      });
      fetchAnnouncements(role, club);
    } catch (err) {
      setStatus('❌ Failed to approve announcement.');
    }
  };

  const handleUsernameChange = async (e: any) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/user/update-username', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ accessCode, newUsername }),
      });
      const result = await res.json();
      setStatus(res.ok ? '✅ Username updated!' : `❌ ${result.error}`);
    } catch (err) {
      setStatus('❌ Failed to update username.');
    }
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '500px', margin: 'auto' }}>
      <hr className='h-[100px]'></hr>
      <h1>Teacher Dashboard</h1>
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
      <h1>Teacher Dashboard – Pending Announcements</h1>
      {announcements.length === 0 && <p>No pending announcements.</p>}
      <ul>
        {announcements.map((a: any) => (
          <li key={a._id} style={{ marginBottom: '1rem' }}>
            <b>{a.title}</b>
            <p>{a.description}</p>
            <button onClick={() => handleApprove(a._id)}>Approve</button>
          </li>
        ))}
      </ul>
    </div>
  );
}