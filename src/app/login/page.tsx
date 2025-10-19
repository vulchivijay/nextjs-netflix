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
    <div className="relative z-10 flex justify-center">
      <div className="max-w-md w-full p-12 bg-[rgba(0,0,0,.4)] text-white">
        <h1 className="text-2xl font-bold mb-4">Sign in</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email or Mobile number" required className="w-full mb-5 px-5 py-4 text-md rounded-sm border border-white bg-black text-white" />
          </div>
          <div>
            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" required className="w-full mb-5 px-5 py-4 text-md rounded-sm border border-white bg-black text-white" />
          </div>
          <button type="submit" className="w-full bg-red-600 px-4 py-2 rounded" disabled={loading}>{loading ? 'Signing in...' : 'Sign in'}</button>
        </form>
        <div className="my-5 text-center">
          <Link href="/forgot" className="underline">Forgot Password?</Link>
        </div>
        <div>
          <input type="checkbox" /> Remember me
        </div>
        <p className="my-2">New to Netflix?<Link href="/signup" className="font-bold underline">Sign up now.</Link></p>
        <p className="my-2">This page is protected by Google reCAPTCHA to ensure you are not a bot. <Link href="/learnmore" className="underline">Learn more.</Link></p>
        <p className="my-2"><Link href="/" className="text-gray-400">← Back to home</Link></p>
      </div>
    </div>
  );
}