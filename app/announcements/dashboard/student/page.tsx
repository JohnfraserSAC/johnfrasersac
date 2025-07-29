'use client';

import { useEffect, useState } from 'react';
import { requireRole } from '@/lib/checkAuth';
import ReactMarkdown from 'react-markdown';

export default function StudentDashboard() {
  const [accessCode, setAccessCode] = useState('');
  const [newUsername, setNewUsername] = useState('');
  const [status, setStatus] = useState('');
  const [description, setDescription] = useState('');
  const [dateInput, setDateInput] = useState('');
  const [dates, setDates] = useState<string[]>([]);
  const [pastAnnouncements, setPastAnnouncements] = useState<any[]>([]);
  const [showPast, setShowPast] = useState(false);
  const [loadingPast, setLoadingPast] = useState(false);
  const [approvedAnnouncements, setApprovedAnnouncements] = useState<any[]>([]);
  const [pendingAnnouncements, setPendingAnnouncements] = useState<any[]>([]);

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
        accessCode, // from state
        description,
        dates,
      }),
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
    setDescription(announcement.description || '');
    setDates(Array.isArray(announcement.dates) ? announcement.dates : (announcement.date ? [announcement.date] : []));
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
      setStatus('❌ Failed to fetch announcements.');
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
        {status && <p style={{ marginTop: 8, color: status.startsWith('✅') ? 'green' : 'red', fontSize: 13 }}>{status}</p>}
      </div>
      {/* Main Content */}
      <hr className='h-[100px]'></hr>
      <div className='max-w-2xl mx-auto p-6 space-y-6'>
        <h1 className="text-2xl font-bold text-gray-800">Student Dashboard</h1>
    
        {status && <p style={{ marginTop: '1rem' }}>{status}</p>}
        <div className='bg-white p-5 rounded-2xl shadow space-y-4 border border-gray-200'>
          <h2 className='text-lg font-semibold text-gray-700'>Submit Announcement</h2>
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
                  accessCode, // always use the logged-in user's accessCode
                  description,
                  dates,
                }),
              });
              const result = await res.json();
              alert(res.ok ? '✅ Announcement(s) submitted' : `❌ ${result.error}`);
              setDescription('');
              setDates([]);
            }}
            style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
          >
            <button type="button" onClick={handleUsePastAnnouncement} className='text-sm text-blue-600 hover:underline'>
              Use Past Announcement
            </button>
            <textarea
              placeholder="Announcement"
              className='w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500'
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              onKeyDown={e => {
                if ((e.metaKey || e.ctrlKey) && (e.key === 'b' || e.key === 'i')) {
                  e.preventDefault();
                  const textarea = e.target as HTMLTextAreaElement;
                  const start = textarea.selectionStart;
                  const end = textarea.selectionEnd;
                  const selected = description.slice(start, end);
                  let before = description.slice(0, start);
                  let after = description.slice(end);
                  let newText = '';
                  if (e.key === 'b') {
                    newText = before + '**' + selected + '**' + after;
                    setDescription(newText);
                    setTimeout(() => {
                      textarea.selectionStart = start + 2;
                      textarea.selectionEnd = end + 2;
                    }, 0);
                  }
                  if (e.key === 'i') {
                    newText = before + '_' + selected + '_' + after;
                    setDescription(newText);
                    setTimeout(() => {
                      textarea.selectionStart = start + 1;
                      textarea.selectionEnd = end + 1;
                    }, 0);
                  }
                }
              }}
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
                className="border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <button
                type="button"
                onClick={handleAddDate}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition-colors"
              >
                Add Date
              </button>
            </div>

            <div>
              {dates.map(date => (
                <span key={date} style={{ marginRight: 8 }}>
                  {date} <button type="button" onClick={() => handleRemoveDate(date)}>x</button>
                </span>
              ))}
            </div>
            <button className='bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition' type="submit">Submit Announcement</button>
          </form>
        </div>
        {showPast && (
          <div style={{
            position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
            background: 'rgba(0,0,0,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center',
            zIndex: 1000
          }}>
            <div style={{ background: 'white', padding: 24, borderRadius: 8, maxHeight: 500, overflowY: 'auto', minWidth: 350 }}>
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