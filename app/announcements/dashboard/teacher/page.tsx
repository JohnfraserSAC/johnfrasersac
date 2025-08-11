'use client';

import { useEffect, useState } from 'react';
import { requireRole } from '@/lib/checkAuth';
import ReactMarkdown from 'react-markdown';

export const dynamic = 'force-dynamic';

export default function TeacherDashboard() {
  const [accessCode, setAccessCode] = useState('');
  const [newUsername, setNewUsername] = useState('');
  const [status, setStatus] = useState('');
  const [club, setClub] = useState('');
  const [announcements, setAnnouncements] = useState([]);
  const [approvedAnnouncements, setApprovedAnnouncements] = useState<any[]>([]);
  const [username, setUsername] = useState(''); // <-- Add this line

  useEffect(() => {
    const user = requireRole('teacher');
    setAccessCode(user?.accessCode || '');
    setUsername(user?.username || ''); // <-- Add this line
    // Fetch the teacher's club using their access code
    if (user?.accessCode) {
      fetch(`/api/club/by-access-code?accessCode=${encodeURIComponent(user.accessCode)}`)
        .then(res => res.json())
        .then(data => setClub(data.club || ''));
    }
  }, []);

  useEffect(() => {
    const user = requireRole('teacher');
    setAccessCode(user?.accessCode || '');
    // Fetch the teacher's club using their access code
    if (user?.accessCode) {
      fetch(`/api/club/by-access-code?accessCode=${encodeURIComponent(user.accessCode)}`)
        .then(res => res.json())
        .then(data => setClub(data.club || ''));
    }
  }, []);

  useEffect(() => {
    if (club) {
      fetchAnnouncements();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [club]);

  const fetchAnnouncements = async () => {
    try {
      const res = await fetch('/api/announcements/all');
      const data = await res.json();
      setAnnouncements(data.filter((a: any) => a.club === club && a.approval !== true));
      setApprovedAnnouncements(data.filter((a: any) => a.club === club && a.approval === true));
    } catch (err) {
      setStatus('❌ Failed to fetch announcements.');
    }
  };

  const handleUnapprove = async (id: string) => {
    try {
      await fetch('/api/announcements/approve', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, approval: false }),
      });
      fetchAnnouncements();
    } catch (err) {
      setStatus('❌ Failed to unapprove announcement.');
    }
  };

  useEffect(() => {
  requireRole('teacher');
  // Fetch accessCode from user and set it
  const user = requireRole('teacher');
  setAccessCode(user?.accessCode || '');
}, []);

useEffect(() => {
  if (accessCode) {
    fetchAnnouncements();
  }
  // eslint-disable-next-line react-hooks/exhaustive-deps
}, [accessCode]);

  const handleApprove = async (id: string) => {
    try {
      await fetch('/api/announcements/approve', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, approval: true }), // <-- add approval: true
      });
      fetchAnnouncements();
    } catch (err) {
      setStatus('❌ Failed to approve announcement.');
    }
  };

  const handleApproveAll = async () => {
    try {
      await fetch('/api/announcements/approve', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ approval: true, accessCode }),
      });
      fetchAnnouncements();
    } catch (err) {
      setStatus('❌ Failed to approve all announcements.');
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
      if (res.ok) {
        setStatus('✅ Username updated!');
        // Fetch the latest username from the API
        const userRes = await fetch(`/api/user/by-access-code?accessCode=${encodeURIComponent(accessCode)}`);
        const userData = await userRes.json();
        setUsername(userData.username || newUsername); // fallback to newUsername if not returned
        setNewUsername('');
      } else {
        setStatus(`❌ ${result.error}`);
      }
    } catch (err) {
      setStatus('❌ Failed to update username.');
    }
  };

  return (
    <div className="w-full">
      {/* Settings Bar */}
      <div style={{
        position: 'fixed',
        top: 150,
        right: 24,
        background: '#f5f5f5',
        borderRadius: 8,
        padding: '1rem',
        boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
        minWidth: 220,
        zIndex: 10,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end'
      }}>
        <strong style={{ marginBottom: 8 }}>Settings</strong>
        <form onSubmit={handleUsernameChange} style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', width: '100%' }}>
          <input
            placeholder="New Username"
            value={newUsername}
            onChange={(e) => setNewUsername(e.target.value)}
            required
            style={{ width: '100%' }}
          />
          <button type="submit" style={{ alignSelf: 'flex-end' }}>Set Username</button>
        </form>
        {status && <p style={{ marginTop: 8, color: status.startsWith('✅') ? 'green' : 'red', fontSize: 13 }}>{status}</p>}
      </div>
      {/* <hr className='h-[200px] md:h-[100px] border-0'></hr> */}

      <div className="text-white custom-background-4 w-full gap-y-4 flex justify-center items-center flex-col text-center pt-40 py-8 mb-8">
        <h1 className="text-5xl font-bold mb-4">Teacher Dashboard</h1>
        <h2 className="text-2xl mb-6">Welcome <strong>{username}</strong>!</h2>
      </div>

      {status && <p className="mt-4 text-green-600">{status}</p>}

      <div className="w-full mb-8 px-2 gap-x-2 flex flex-col place-items-center">
      
      <h2 className="text-2xl text-center font-semibold mb-4">Unapproved Announcements</h2>
      {announcements.length > 0 ? (
        <div className="w-full flex justify-center">
          <button
            onClick={handleApproveAll}
            className="mb-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Approve All
          </button>
        </div>
        ): <></>}

        { announcements. length > 0 ? (
          <div className="w-full grid grid-cols-1 md:grid-cols-2 md:w-4/5 lg:grid-cols-3 xl:grid-cols-4 h-min gap-2">
            {announcements.map((a: any) => (
              <div
                key={a._id}
                className="border-[1px] border-gray-200 rounded overflow-hidden bg-red-50"
              >
                <div className='flex flex-col'>
                    <div className="flex place-items-start">
                        <p className=" p-2 h-full w-full font-bold text-red-800">{a.title}</p>
                        <div className="pr-2 pt-2">
                            <button
                                onClick={() => handleApprove(a._id)}
                                className="px-3 py-1 bg-green-500/80 text-white rounded hover:bg-green-600/80"
                            >
                                Approve
                            </button>
                        </div>
                    </div>
                  <div className="text-gray-700 p-2">
                    <ReactMarkdown>{a.description}</ReactMarkdown>
                  </div>
                  <p className='text-gray-400 text-sm p-2'>To be read on: {a.date}</p>
                </div>
                
              </div>
            ))}
          </div>
      ) : (
        <p className="text-gray-500">No pending announcements.</p>
      )}
      
      <h2 className="text-2xl text-center font-semibold my-4">Approved Announcements</h2>

      {approvedAnnouncements.length > 0 ? (
        <div className="w-full grid grid-cols-1 md:grid-cols-2 md:w-4/5 lg:grid-cols-3 xl:grid-cols-4 h-min gap-2">
          {approvedAnnouncements.map((a: any) => (
            <div
                key={a._id}
                className="border-[1px] border-gray-200 rounded overflow-hidden bg-green-50"
              >
                <div className='flex flex-col'>
                    <div className="flex place-items-start">
                  <p className=" p-2 h-full w-full font-bold text-green-800">{a.title}</p>
                        <div className="pr-2 pt-2">
                            <button
                        onClick={() => handleUnapprove(a._id)}
                        className="px-3 py-1 bg-red-600/80 text-white rounded hover:bg-red-700/80"
                    >
                        Unapprove
                    </button>
                        </div>
                    </div>
                  <div className="text-gray-700 p-2">
                    <ReactMarkdown>{a.description}</ReactMarkdown>
                  </div>
                  <p className='text-gray-400 text-sm p-2'>To be read on: {a.date}</p>
                </div>
                
              </div>
            
          ))}
        </div>
      ) : (
        <p className="text-gray-500">No approved announcements.</p>
      )}
      </div>
    </div>
  );
}