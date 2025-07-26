'use client';

import { useEffect, useState } from 'react';
import { requireRole } from '@/lib/checkAuth';

export default function StudentDashboard() {
  const [accessCode, setAccessCode] = useState('');
  const [newUsername, setNewUsername] = useState('');
  const [status, setStatus] = useState('');
  const [description, setDescription] = useState('');
  const [announcementAccessCode, setAnnouncementAccessCode] = useState('');
  const [dateInput, setDateInput] = useState('');
  const [dates, setDates] = useState<string[]>([]);
  const [pastAnnouncements, setPastAnnouncements] = useState<any[]>([]);
  const [showPast, setShowPast] = useState(false);
  const [loadingPast, setLoadingPast] = useState(false);
  const [pastAccessCode, setPastAccessCode] = useState('');

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

  const handleAddDate = () => {
    if (dateInput && !dates.includes(dateInput)) {
      setDates([...dates, dateInput]);
      setDateInput('');
    }
  };

  const handleRemoveDate = (date: string) => {
    setDates(dates.filter(d => d !== date));
  };

  // Open the modal for past announcements
  const handleUsePastAnnouncement = () => {
    setShowPast(true);
    setPastAnnouncements([]);
    setPastAccessCode('');
  };

  // Fetch past announcements for the entered access code
  const fetchPastAnnouncements = async () => {
    if (!pastAccessCode) return;
    setLoadingPast(true);
    const res = await fetch(`/api/announcements/by-access-code?accessCode=${encodeURIComponent(pastAccessCode)}`);
    const result = await res.json();
    if (res.ok && Array.isArray(result.announcements)) {
      setPastAnnouncements(result.announcements);
    } else {
      setPastAnnouncements([]);
      alert(result.error || 'Could not fetch announcements.');
    }
    setLoadingPast(false);
  };

  const handleSelectPast = (announcement: any) => {
    setAnnouncementAccessCode(announcement.accessCode || '');
    setDescription(announcement.description || '');
    setDates(Array.isArray(announcement.dates) ? announcement.dates : (announcement.date ? [announcement.date] : []));
    setShowPast(false);
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
          if (dates.length === 0) {
            alert('Please add at least one date.');
            return;
          }
          const res = await fetch('/api/announcements/create', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              accessCode: announcementAccessCode,
              description,
              dates,
            }),
          });
          const result = await res.json();
          alert(res.ok ? '✅ Announcement(s) submitted' : `❌ ${result.error}`);
          setAnnouncementAccessCode('');
          setDescription('');
          setDates([]);
        }}
        style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
      >
        <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
          <input
            placeholder="Your Access Code"
            value={announcementAccessCode}
            onChange={(e) => setAnnouncementAccessCode(e.target.value)}
            required
          />
          <button type="button" onClick={handleUsePastAnnouncement}>
            Use Past Announcement
          </button>
        </div>
        <textarea
          placeholder="Announcement"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
          <input
            type="date"
            value={dateInput}
            onChange={(e) => setDateInput(e.target.value)}
          />
          <button type="button" onClick={handleAddDate}>Add Date</button>
        </div>
        <div>
          {dates.map(date => (
            <span key={date} style={{ marginRight: 8 }}>
              {date} <button type="button" onClick={() => handleRemoveDate(date)}>x</button>
            </span>
          ))}
        </div>
        <button type="submit">Submit Announcement</button>
      </form>
      {showPast && (
        <div style={{
          position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
          background: 'rgba(0,0,0,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center',
          zIndex: 1000
        }}>
          <div style={{ background: 'white', padding: 24, borderRadius: 8, maxHeight: 500, overflowY: 'auto', minWidth: 350 }}>
            <h3>View Past Announcements</h3>
            <div style={{ marginBottom: 16 }}>
              <input
                placeholder="Enter your access code"
                value={pastAccessCode}
                onChange={e => setPastAccessCode(e.target.value)}
                style={{ marginRight: 8 }}
              />
              <button type="button" onClick={fetchPastAnnouncements} disabled={loadingPast || !pastAccessCode}>
                {loadingPast ? 'Loading...' : 'View'}
              </button>
            </div>
            {pastAnnouncements.length === 0 && !loadingPast && (
              <p style={{ color: '#888' }}>No announcements found.</p>
            )}
            <ul style={{ padding: 0, listStyle: 'none' }}>
              {pastAnnouncements.map((a, i) => (
                <li key={i} style={{ marginBottom: 16, borderBottom: '1px solid #eee', paddingBottom: 8 }}>
                  <div>
                    <strong>{a.description}</strong>
                    <div style={{ fontSize: 13, color: '#666', margin: '4px 0' }}>
                      Dates: {Array.isArray(a.dates) ? a.dates.join(', ') : (a.date || '')}
                    </div>
                    <button type="button" onClick={() => handleSelectPast(a)}>
                      Use This
                    </button>
                  </div>
                </li>
              ))}
            </ul>
            <button type="button" onClick={() => setShowPast(false)} style={{ marginTop: 12 }}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}