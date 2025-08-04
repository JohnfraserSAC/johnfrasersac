'use client';

import { useEffect, useState } from 'react';
import { requireRole } from '@/lib/checkAuth';
import clubs from '@/utils/clubs';

export default function AdminDashboard() {
  const [users, setUsers] = useState([]);
  const [status, setStatus] = useState('');
  const [editing, setEditing] = useState<Record<string, any>>({});
  const [announcements, setAnnouncements] = useState([]);
  const [newUser, setNewUser] = useState({ username: '', accessCode: '', role: 'student', club: '' });
  const [createStatus, setCreateStatus] = useState('');
  const [userSearch, setUserSearch] = useState('');
  const [announcementSearch, setAnnouncementSearch] = useState('');

  const fetchAnnouncements = async () => {
    const res = await fetch('/api/announcements/all');
    const data = await res.json();
    setAnnouncements(data);
  };

  const handleDelete = async (id: string) => {
    await fetch('/api/announcements/delete', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id }),
    });
    fetchAnnouncements();
  };

  useEffect(() => {
    requireRole('admin');
    fetchUsers();
    fetchAnnouncements();
  }, []);

  const fetchUsers = async () => {
    const res = await fetch('/api/admin/users');
    const data = await res.json();
    setUsers(data);
  };

  const handleChange = (id: string, field: string, value: string) => {
    setEditing((prev: any) => ({
      ...prev,
      [id]: { ...prev[id], [field]: value },
    }));
  };

  const handleSave = async (user: any) => {
    const changes = editing[user._id];
    if (!changes) return;

    const res = await fetch('/api/admin/update-user', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ _id: user._id, ...changes }),
    });

    const result = await res.json();
    if (res.ok) {
      setStatus(`✅ Updated ${user._id}`);
      fetchUsers(); 
    } else {
      setStatus(`❌ Error updating ${user._id}: ${result.error}`);
    }
  };

  const handleCreateUser = async (e: any) => {
    e.preventDefault();
    setCreateStatus('');
    const res = await fetch('/api/admin/create-user', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newUser),
    });
    const result = await res.json();
    if (res.ok) {
      setCreateStatus('✅ User created!');
      setNewUser({ username: '', accessCode: '', role: 'student', club: '' });
      fetchUsers();
    } else {
      setCreateStatus(`❌ ${result.error}`);
    }
  };

  const handleDeleteUser = async (id: string) => {
    if (!window.confirm('Are you sure you want to delete this user?')) return;
    const res = await fetch('/api/admin/delete-user', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id }),
    });
    if (res.ok) {
      setStatus(`✅ Deleted user ${id}`);
      fetchUsers();
    } else {
      const result = await res.json();
      setStatus(`❌ Error deleting user: ${result.error}`);
    }
  };

  // NEW: Filtered lists
  const filteredUsers = users.filter((u: any) =>
    u.username?.toLowerCase().includes(userSearch.toLowerCase())
  );
  const filteredAnnouncements = announcements.filter((a: any) =>
    a.title?.toLowerCase().includes(announcementSearch.toLowerCase())
  );

  return (
    <div style={{ padding: '2rem', maxWidth: '1100px', margin: 'auto' }}>
      <hr className='h-[200px] md:h-[100px] border-0'></hr>
      <h1>Admin Dashboard</h1>
      {status && <p style={{ margin: '1rem 0', color: 'green' }}>{status}</p>}

      {/* USERS TABLE */}
      <h2>Accounts</h2>
      <input
        type="text"
        placeholder="Search users by username..."
        value={userSearch}
        onChange={e => setUserSearch(e.target.value)}
        style={{ marginBottom: '0.5rem', width: 250 }}
      />
      <div style={{ maxHeight: 350, overflowY: 'auto', border: '1px solid #ccc', borderRadius: 6 }}>
        <table style={{ width: '100%', minWidth: 800, borderCollapse: 'collapse', tableLayout: 'fixed' }}>
          <thead style={{ background: '#f5f5f5', position: 'sticky', top: 0 }}>
            <tr>
              <th style={{ width: 180 }}>Username</th>
              <th style={{ width: 140 }}>Access Code</th>
              <th style={{ width: 120 }}>Role</th>
              <th style={{ width: 180 }}>Club</th>
              <th style={{ width: 180 }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user: any) => (
              <tr key={user._id}>
                <td>
                  <input
                    defaultValue={user.username || ''}
                    onChange={(e) => handleChange(user._id, 'username', e.target.value)}
                    style={{ width: '95%' }}
                  />
                </td>
                <td>
                  <input
                    defaultValue={user.accessCode}
                    onChange={(e) => handleChange(user._id, 'accessCode', e.target.value)}
                    style={{ width: '95%' }}
                  />
                </td>
                <td>
                  <select
                    defaultValue={user.role}
                    onChange={(e) => handleChange(user._id, 'role', e.target.value)}
                    style={{ width: '95%' }}
                  >
                    <option value="student">Student</option>
                    <option value="teacher">Teacher</option>
                    <option value="admin">Admin</option>
                  </select>
                </td>
                <td>
                  <select
                    defaultValue={user.club || ''}
                    onChange={(e) => handleChange(user._id, 'club', e.target.value)}
                    style={{ width: '95%' }}
                  >
                    <option value="">-- Select Club --</option>
                    {clubs.map((c) => (
                      <option key={c.id} value={c.name}>
                        {c.name}
                      </option>
                    ))}
                  </select>
                </td>
                <td>
                  <button onClick={() => handleSave(user)}>Save</button>
                  <button
                    style={{ marginLeft: '0.5rem', color: 'red' }}
                    onClick={() => handleDeleteUser(user._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {filteredUsers.length === 0 && (
              <tr>
                <td colSpan={5} style={{ textAlign: 'center', color: '#888' }}>
                  No users found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <h2 style={{ marginTop: '2rem' }}>Create User</h2>
      <form onSubmit={handleCreateUser} style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '2rem' }}>
        <input
          placeholder="Username"
          value={newUser.username}
          onChange={e => setNewUser({ ...newUser, username: e.target.value })}
          required
        />
        <input
          placeholder="Access Code"
          value={newUser.accessCode}
          onChange={e => setNewUser({ ...newUser, accessCode: e.target.value })}
          required
        />
        <select
          value={newUser.role}
          onChange={e => setNewUser({ ...newUser, role: e.target.value })}
        >
          <option value="student">Student</option>
          <option value="teacher">Teacher</option>
          <option value="admin">Admin</option>
        </select>
        <select
          value={newUser.club}
          onChange={e => setNewUser({ ...newUser, club: e.target.value })}
          required
        >
          <option value="">-- Select Club --</option>
          {clubs.map((c) => (
            <option key={c.id} value={c.name}>
              {c.name}
            </option>
          ))}
        </select>
        <button type="submit">Create</button>
      </form>
      {createStatus && <p style={{ color: createStatus.startsWith('✅') ? 'green' : 'red' }}>{createStatus}</p>}

      {/* ANNOUNCEMENTS TABLE */}
      <h2>Delete & Approve Announcements</h2>
      <button onClick={fetchAnnouncements}>Refresh Announcements</button>
      <input
        type="text"
        placeholder="Search announcements by title..."
        value={announcementSearch}
        onChange={e => setAnnouncementSearch(e.target.value)}
        style={{ margin: '0.5rem 0', width: 300 }}
      />
      <div style={{ maxHeight: 350, overflowY: 'auto', border: '1px solid #ccc', borderRadius: 6 }}>
        <table style={{ width: '100%', minWidth: 800, borderCollapse: 'collapse', tableLayout: 'fixed' }}>
          <thead style={{ background: '#f5f5f5', position: 'sticky', top: 0 }}>
            <tr>
              <th style={{ width: 220 }}>Title</th>
              <th>Description</th>
              <th style={{ width: 120 }}>Status</th>
              <th style={{ width: 220 }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredAnnouncements.map((a: any) => (
              <tr key={a._id}>
                <td style={{ wordBreak: 'break-word' }}>{a.title}</td>
                <td style={{ wordBreak: 'break-word' }}>{a.description}</td>
                <td>
                  {a.approval ? '✅ Approved' : '❌ Not Approved'}
                </td>
                <td>
                  <button
                    onClick={async () => {
                      await fetch('/api/announcements/approve', {
                        method: 'PATCH',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ id: a._id, approval: !a.approval }),
                      });
                      fetchAnnouncements();
                    }}
                  >
                    {a.approval ? 'Unapprove' : 'Approve'}
                  </button>
                  <button
                    style={{ marginLeft: '1rem', color: 'red' }}
                    onClick={() => handleDelete(a._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {filteredAnnouncements.length === 0 && (
              <tr>
                <td colSpan={4} style={{ textAlign: 'center', color: '#888' }}>
                  No announcements found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}