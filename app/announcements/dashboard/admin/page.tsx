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

  return (
    <div style={{ padding: '2rem', maxWidth: '1000px', margin: 'auto' }}>
      <h1>Admin Dashboard</h1>
      {status && <p style={{ margin: '1rem 0', color: 'green' }}>{status}</p>}
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th>Username</th>
            <th>Access Code</th>
            <th>Role</th>
            <th>Club</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user: any) => (
            <tr key={user._id}>
              <td>
                <input
                  defaultValue={user.username || ''}
                  onChange={(e) => handleChange(user._id, 'username', e.target.value)}
                />
              </td>
              <td>
                <input
                  defaultValue={user.accessCode}
                  onChange={(e) => handleChange(user._id, 'accessCode', e.target.value)}
                />
              </td>
              <td>
                <select
                  defaultValue={user.role}
                  onChange={(e) => handleChange(user._id, 'role', e.target.value)}
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
              </td>
            </tr>
          ))}
        </tbody>
      </table>

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

      <h2>Delete & Approve Announcements</h2>
      <button onClick={fetchAnnouncements}>Refresh Announcements</button>
      <ul>
        {announcements.map((a: any) => (
          <li key={a._id} style={{ margin: '1rem 0' }}>
            <b>{a.title}</b> — {a.description}
            <span style={{ marginLeft: '1rem' }}>
              {a.approval ? '✅ Approved' : '❌ Not Approved'}
            </span>
            <button
              style={{ marginLeft: '1rem' }}
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
              style={{ marginLeft: '1rem' }}
              onClick={() => handleDelete(a._id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}