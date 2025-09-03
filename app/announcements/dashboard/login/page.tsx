'use client'

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [accessCode, setAccessCode] = useState('');
  const [error, setError] = useState('');
  const [showAccessCode, setShowAccessCode] = useState(false); // <-- Add this
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
    <div className="max-w-sm mx-auto mt-36 p-6 bg-white shadow-md rounded-xl border border-gray-200 my-12">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Login</h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="relative">
          <input
            type={showAccessCode ? 'text' : 'password'}
            placeholder="Access Code"
            value={accessCode}
            onChange={(e) => setAccessCode(e.target.value)}
            required
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm w-full"
          />
          <button
            type="button"
            onClick={() => setShowAccessCode((v) => !v)}
            tabIndex={-1}
            className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
            aria-label={showAccessCode ? "Hide access code" : "Show access code"}
          >
            {showAccessCode ? '🙈' : '👁️'}
          </button>
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
        >
          Log In
        </button>
      </form>

      {error && (
        <p className="text-red-600 text-sm mt-4 text-center">{error}</p>
      )}
    </div>
  );
}