"use client"

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

// Signup page (client)
// - Sends { email, password } to /api/auth/signup
// - On success navigates to /home for the demo
// - TODO: replace alerts with better UI and add email verification
export default function Signup() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirm) return alert('Passwords do not match');
    setLoading(true);
    // Call signup API with JSON body and explicit Content-Type header
    try {
      const res = await fetch('/api/auth/signup', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email, password }) });
      const data = await res.json();
      setLoading(false);
      if (!res.ok) return alert(data.error || 'Signup failed');
      // Navigate to the authenticated home page after signup
      router.push('/home');
    } catch {
      setLoading(false);
      alert('Network error');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="max-w-md w-full p-6 bg-gray-900 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4">Create account</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-sm">Email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" required className="w-full mt-1 px-3 py-2 rounded bg-white text-black" />
          </div>
          <div>
            <label className="text-sm">Password</label>
            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" required className="w-full mt-1 px-3 py-2 rounded bg-white text-black" />
          </div>
          <div>
            <label className="text-sm">Confirm</label>
            <input value={confirm} onChange={(e) => setConfirm(e.target.value)} type="password" required className="w-full mt-1 px-3 py-2 rounded bg-white text-black" />
          </div>
          <button type="submit" className="w-full bg-red-600 px-4 py-2 rounded" disabled={loading}>{loading ? 'Creating...' : 'Create account'}</button>
  </form>
  <p className="mt-4 text-sm">Already have an account? <Link href="/login" className="text-red-400">Sign in</Link></p>
  <p className="mt-3 text-sm"><Link href="/" className="text-gray-400">← Back to home</Link></p>
      </div>
    </div>
  );
}

