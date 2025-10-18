"use client"

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

// Login page (client)
// - Sends credentials to /api/auth/login
// - On success navigates to /home where the logged-in UI lives
// - Note: this demo returns a basic alert on error; replace with better UI in prod
export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch('/api/auth/login', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email, password }) });
      const data = await res.json();
      setLoading(false);
      if (!res.ok) return alert(data.error || 'Login failed');
      // navigate to the authenticated home
      router.push('/home');
    } catch {
      setLoading(false);
      alert('Network error');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="max-w-md w-full p-6 bg-gray-900 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4">Sign in</h1>
  <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-sm">Email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" required className="w-full mt-1 px-3 py-2 rounded bg-white text-black" />
          </div>
          <div>
            <label className="text-sm">Password</label>
            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" required className="w-full mt-1 px-3 py-2 rounded bg-white text-black" />
          </div>
          <button type="submit" className="w-full bg-red-600 px-4 py-2 rounded" disabled={loading}>{loading ? 'Signing in...' : 'Sign in'}</button>
  </form>
  <p className="mt-4 text-sm">Don&apos;t have an account? <Link href="/signup" className="text-red-400">Create one</Link></p>
  <p className="mt-3 text-sm"><Link href="/" className="text-gray-400">← Back to home</Link></p>
      </div>
    </div>
  );
}