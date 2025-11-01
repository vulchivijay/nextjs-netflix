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
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirm) return setError('Passwords do not match');
    setLoading(true);
    // Call signup API with JSON body and explicit Content-Type header
    try {
      const res = await fetch('/../api/auth/signup', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email, password }) });
      const data = await res.json();
      setLoading(false);
      if (!res.ok) return setError(data.error || 'Signup failed');
      // Navigate to the authenticated home page after signup
      router.push('/home');
    } catch {
      setLoading(false);
      setError('Network error');
    }
  };

  return (
    <>
      <div className="relative z-10 flex justify-center">
        <div className="max-w-md w-full p-12 bg-[rgba(0,0,0,.4)] text-white">
          <h1 className="text-2xl font-bold mb-4">Create account</h1>
          <form onSubmit={handleSubmit}>
            <div>
              <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter email address" required className="w-full mb-5 px-5 py-4 text-md rounded-sm border border-white bg-black text-white" />
            </div>
            <div>
              <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Enter password" required className="w-full mb-5 px-5 py-4 text-md rounded-sm border border-white bg-black text-white" />
            </div>
            <div>
              <input value={confirm} onChange={(e) => setConfirm(e.target.value)} type="password" placeholder="Enter confirm password" required className="w-full mb-5 px-5 py-4 text-md rounded-sm border border-white bg-black text-white" />
            </div>
            <button type="submit" className="w-full bg-red-600 px-4 py-2 rounded" disabled={loading}>{loading ? 'Creating...' : 'Create account'}</button>
          </form>
          {error && <div className="mt-4 text-red-400">{error}</div>}
          <div className="my-5">
            <input type="checkbox" /> Remember me
          </div>
          <p className="my-2">Already have an account?<Link href="/login" className="font-bold underline">Sign in</Link></p>
          <p className="my-2">This page is protected by Google reCAPTCHA to ensure you are not a bot. <Link href="/learnmore" className="underline">Learn more.</Link></p>
          <p className="mt-2 text-sm"><Link href="/" className="text-gray-400">← Back to home</Link></p>
        </div>
      </div>
    </>
  );
}

