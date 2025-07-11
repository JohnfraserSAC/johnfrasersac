'use client'

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [accessCode, setAccessCode] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setError('');

    const res = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ accessCode }),
    });


    const data = await res.json();

    if (res.ok) {
      localStorage.setItem('user', JSON.stringify(data));
      router.push(`/announcements/dashboard/${data.role}`);
    } else {
      setError(data.error || 'Login failed');
    }
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '400px', margin: '100px' }}>
      <hr className='h-[100px]'></hr>
      <h2>Login</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <input
          placeholder="Access Code"
          type="password"
          value={accessCode}
          onChange={(e) => setAccessCode(e.target.value)}
          required
        />
        <button type="submit">Log In</button>
      </form>
      {error && <p style={{ color: 'red', marginTop: '1rem' }}>{error}</p>}
    </div>
  );
}