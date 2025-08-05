'use client';

import { useEffect, useState } from 'react';
import { requireRole } from '@/lib/checkAuth';
import ReactMarkdown from 'react-markdown';

export const dynamic = 'force-dynamic';

export default function StudentDashboard() {
  const [accessCode, setAccessCode] = useState('');
  const [newUsername, setNewUsername] = useState('');
  const [usernameStatus, setUsernameStatus] = useState('');
  const [announcementStatus, setAnnouncementStatus] = useState('');
  const [dateStatus, setDateStatus] = useState('');
  const [description, setDescription] = useState('');
  const [dateInput, setDateInput] = useState('');
  const [dates, setDates] = useState<string[]>([]);
  const [pastAnnouncements, setPastAnnouncements] = useState<any[]>([]);
  const [showPast, setShowPast] = useState(false);
  const [loadingPast, setLoadingPast] = useState(false);
  const [approvedAnnouncements, setApprovedAnnouncements] = useState<any[]>([]);
  const [pendingAnnouncements, setPendingAnnouncements] = useState<any[]>([]);
  const [username, setUsername] = useState('');
  const [title, setTitle] = useState('');
  const [missingField, setMissingField] = useState<string | null>(null);
  const [submitDisabled, setSubmitDisabled] = useState(false);

  useEffect(() => {
    if (!accessCode) return;
    const fetchAnnouncements = async () => {
      try {
        const res = await fetch(`/api/announcements/by-access-code?accessCode=${encodeURIComponent(accessCode)}`);
        const result = await res.json();
        if (Array.isArray(result.announcements)) {
          setApprovedAnnouncements(result.announcements.filter((a: any) => a.approval === true));
          setPendingAnnouncements(result.announcements.filter((a: any) => a.approval !== true));
        }
      } catch (err) {
        // handle error if needed
      }
    };
    fetchAnnouncements();
  }, [accessCode]);

  useEffect(() => {
    const user = requireRole('student');
    setAccessCode(user?.accessCode || '');
    setUsername(user?.username || '');
  }, []);

  useEffect(() => {
    if (showPast && accessCode) {
      setLoadingPast(true);
      fetch(`/api/announcements/by-access-code?accessCode=${encodeURIComponent(accessCode)}`)
        .then(res => res.json())
        .then(result => {
          if (Array.isArray(result.announcements)) {
            setPastAnnouncements(result.announcements);
          } else {
            setPastAnnouncements([]);
          }
          setLoadingPast(false);
        })
        .catch(() => {
          setPastAnnouncements([]);
          setLoadingPast(false);
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showPast, accessCode]);

  const handleUsernameChange = async (e: any) => {
    e.preventDefault();
    const res = await fetch('/api/user/update-username', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        accessCode,
        newUsername,
      }),
    });
    const result = await res.json();
    if (res.ok) {
      setUsername(newUsername);
      setUsernameStatus('✅ Username updated!');
    } else {
      setUsernameStatus(`❌ ${result.error}`);
    }
  };

  const handleAddDate = () => {
    if (!dateInput) return;
    const today = new Date();
    const maxDate = new Date();
    maxDate.setDate(today.getDate() + 14);

    const inputDate = new Date(dateInput);
    // Only allow dates within the next 14 days
    if (inputDate < today || inputDate > maxDate) {
      setMissingField('dates');
      setDateStatus('❌ Date must be within the next 14 days.');
      return;
    }
    setDateStatus('');
    if (!dates.includes(dateInput)) {
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
  };

  const handleSelectPast = (announcement: any) => {
    setTitle(announcement.title || '');
    setDescription(announcement.description || '');
    setShowPast(false);
  };

  const refreshAnnouncements = async () => {
    if (!accessCode) return;
    try {
      const res = await fetch(`/api/announcements/by-access-code?accessCode=${encodeURIComponent(accessCode)}`);
      const result = await res.json();
      if (Array.isArray(result.announcements)) {
        setApprovedAnnouncements(result.announcements.filter((a: any) => a.approval === true));
        setPendingAnnouncements(result.announcements.filter((a: any) => a.approval !== true));
      }
    } catch (err) {
      setAnnouncementStatus('❌ Failed to fetch announcements.');
    }
  };

  useEffect(() => {
    refreshAnnouncements();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [accessCode]);

  return (
    <div style={{ padding: '2rem', maxWidth: '500px', margin: 'auto' }}>
      {/* Settings Bar */}
      <div style={{
        position: 'absolute',
        top: 100,
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
        {usernameStatus && <p style={{ marginTop: 8, color: status.startsWith('✅') ? 'green' : 'red', fontSize: 13 }}>{usernameStatus}</p>}
      </div>
      {/* Main Content */}
      <hr className='h-[200px] md:h-[100px] border-0'></hr>
      <div className='max-w-2xl mx-auto p-6 space-y-6'>
        <h1 className="text-5xl font-bold text-gray-800">Student Dashboard</h1>

        <h2 className="text-2xl text-gray-800">Welcome <strong>{username}!</strong></h2>
    
        {announcementStatus && <p style={{ marginTop: '1rem' }}>{announcementStatus}</p>}
        <div className='bg-white p-5 rounded-2xl shadow space-y-4 border border-gray-200'>
          <h2 className='text-lg font-semibold text-gray-700'>Create an Announcement</h2>
          <form
            onSubmit={async (e) => {
              e.preventDefault();
              if (!title.trim()) {
                setMissingField('title');
                setAnnouncementStatus('❌ Title is required.');
                return;
              }
              if (!description.trim()) {
                setMissingField('description');
                setAnnouncementStatus('❌ Description is required.');
                return;
              }
              if (dates.length === 0) {
                setMissingField('dates');
                setAnnouncementStatus('❌ At least one date is required.');
                return;
              }
              setMissingField(null);
              setAnnouncementStatus('');
              setSubmitDisabled(true);
              const res = await fetch('/api/announcements/create', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                  accessCode,
                  title,
                  description,
                  dates,
                }),
              });
              const result = await res.json();
              setAnnouncementStatus(res.ok ? '✅ Announcement(s) submitted' : `❌ ${result.error}`);
              setTitle('');
              setDescription('');
              setDates([]);
              if (res.ok) {
                await refreshAnnouncements(); // <-- Add this line to refresh the list
              }
              setTimeout(() => setSubmitDisabled(false), 5000);
            }}
            style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
          >
            <input
              type="text"
              placeholder="Title"
              className={`w-full border ${missingField === 'title' ? 'border-red-500' : 'border-gray-300'} rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500`}
              value={title}
              onChange={e => setTitle(e.target.value)}
              required
            />
            <button type="button" onClick={handleUsePastAnnouncement} className='text-sm text-blue-600 hover:underline'>
              Use Past Announcement
            </button>
            <textarea
              placeholder="Write your announcement here..."
              className={`w-full border ${missingField === 'description' ? 'border-red-500' : 'border-gray-300'} rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500`}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
            <div className="flex items-center gap-3">
              <input
                type="date"
                value={dateInput}
                onChange={(e) => setDateInput(e.target.value)}
                min={new Date().toISOString().split('T')[0]}
                max={(() => {
                  const d = new Date();
                  d.setDate(d.getDate() + 14);
                  return d.toISOString().split('T')[0];
                })()}
                onFocus={() => {
                  if (!dateInput) {
                    setDateInput(new Date().toISOString().split('T')[0]);
                  }
                }}
                className={`border ${missingField === 'dates' ? 'border-red-500' : 'border-gray-300'} rounded-lg px-3 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500`}
              />
              <button
                type="button"
                onClick={handleAddDate}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition-colors"
              >
                Add Date
              </button>
            </div>
            {missingField === 'dates' && dateStatus && (
              <div style={{ color: 'red', fontSize: 13, marginBottom: 4 }}>{dateStatus}</div>
            )}
            <div className="flex flex-wrap gap-2 mt-2">
              {dates.map((date) => (
                <span
                  key={date}
                  className="flex items-center bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                >
                  {date}
                  <button
                    type="button"
                    onClick={() => handleRemoveDate(date)}
                    className="ml-2 text-blue-500 hover:text-red-600 font-bold"
                    title="Remove date"
                  >
                    ×
                  </button>
                </span>
              ))}
            </div>

            <button
              className='bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition'
              type="submit"
              disabled={submitDisabled}
              style={submitDisabled ? { opacity: 0.6, cursor: 'not-allowed' } : {}}
            >
              Submit Announcement
            </button>
          </form>
        </div>
        {showPast && (
          <div
            style={{
              position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
              background: 'rgba(0,0,0,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center',
              zIndex: 1000
            }}
            onClick={() => setShowPast(false)} // <-- overlay click closes modal
          >
            <div
              style={{
                background: 'white',
                padding: 24,
                borderRadius: 8,
                maxHeight: 500,
                overflowY: 'auto',
                minWidth: 350,
                position: 'relative'
              }}
              onClick={e => e.stopPropagation()} // <-- prevent modal click from closing
            >
              {/* Close button in top right */}
              <button
                type="button"
                onClick={() => setShowPast(false)}
                style={{
                  position: 'absolute',
                  top: 8,
                  right: 8,
                  background: 'transparent',
                  border: 'none',
                  fontSize: 22,
                  cursor: 'pointer',
                  color: '#888',
                  zIndex: 2, // <-- add this for extra safety
                }}
                aria-label="Close"
              >
                ×
              </button>
              <h3>View Past Announcements</h3>
              {loadingPast ? (
                <p>Loading...</p>
              ) : pastAnnouncements.length === 0 ? (
                <p style={{ color: '#888' }}>No announcements found.</p>
              ) : (
                <ul style={{ padding: 0, listStyle: 'none' }}>
                  {pastAnnouncements.map((a, i) => (
                    <li key={i} style={{ marginBottom: 16, borderBottom: '1px solid #eee', paddingBottom: 8 }}>
                      <div>
                        <strong>{a.title || 'No Title'}</strong>
                        <div style={{ fontSize: 13, color: '#666', margin: '4px 0' }}>
                          Dates: {Array.isArray(a.dates) ? a.dates.join(', ') : (a.date || '')}
                        </div>
                        <div style={{ fontSize: 13, color: '#666', margin: '4px 0' }}>
                          {a.description}
                        </div>
                        <button type="button" onClick={() => handleSelectPast(a)}>
                          Use This
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
              <button type="button" onClick={() => setShowPast(false)} style={{ marginTop: 12 }}>Close</button>
            </div>
          </div>
        )}
        <div className="my-8 text-center">
          <button
            type="button"
            onClick={refreshAnnouncements}
            className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:underline hover:text-blue-700 transition-colors"
          >
            <span role="img" aria-label="refresh">🔄</span> Refresh Announcements
          </button>
        </div>

        {/* Approved Announcements Section */}
        <div className="mt-10">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Approved Announcements</h2>
          {approvedAnnouncements.length === 0 ? (
            <p className="text-gray-500 italic">No approved announcements.</p>
          ) : (
            <ul className="space-y-4">
              {approvedAnnouncements.map((a, i) => (
                <li
                  key={i}
                  className="border border-green-200 bg-green-50 rounded-xl p-4 shadow-sm"
                >
                  <div className="text-lg font-bold text-green-800 mb-1">
                    {a.title || <span className="italic text-gray-400">No Title</span>}
                  </div>
                  <div className="text-gray-700 text-sm">
                    <ReactMarkdown>{a.description}</ReactMarkdown>
                  </div>
                  <div className="text-xs text-gray-500 mt-2">
                    Date: {Array.isArray(a.dates) ? a.dates.join(', ') : (a.date || '')}
                  </div>
                  <div className="mt-3 text-green-600 font-semibold text-sm flex items-center gap-1">
                    ✅ <span>Approved</span>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Pending Announcements Section */}
        <div className="mt-10">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Announcements Waiting for Approval</h2>
          {pendingAnnouncements.length === 0 ? (
            <p className="text-gray-500 italic">No announcements waiting for approval.</p>
          ) : (
            <ul className="space-y-4">
              {pendingAnnouncements.map((a, i) => (
                <li
                  key={i}
                  className="border border-red-200 bg-red-50 rounded-xl p-4 shadow-sm"
                >
                  <div className="text-lg font-bold text-red-800 mb-1">
                    {a.title || <span className="italic text-gray-400">No Title</span>}
                  </div>
                  <div className="text-gray-700 text-sm">
                    <ReactMarkdown>{a.description}</ReactMarkdown>
                  </div>
                  <div className="text-xs text-gray-500 mt-2">
                    Date: {Array.isArray(a.dates) ? a.dates.join(', ') : (a.date || '')}
                  </div>
                  <div className="mt-3 text-red-600 font-semibold text-sm flex items-center gap-1">
                    ❌ <span>Not Approved</span>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

      </div>
    </div>
  );
}