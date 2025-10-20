"use client"

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

import Logo from '../../../../public/assets/images/netflix-logo.png';

export default function LandingHeader() {
  const [open, setOpen] = useState(false);
  const { user, setUser } = useAuthState();
  const router = useRouter()
  

  return (
    <header>
      <div className="max-w-7xl mx-auto flex items-center justify-between py-2 px-4">
        <Link href="/" className="relative z-10 flex items-center gap-3">
          <Image src={Logo} width={200} alt="netflix" />
        </Link>

        {/* Desktop nav */}
        <nav className="relative z-10 hidden md:flex gap-4 items-center text-white">
          <select className="bg-black text-white border rounded-sm px-3 py-1">
            <option value="0">English</option>
            <option value="1">Hindi</option>
          </select>
          {user ? (
            <>
              <button onClick={async () => { await fetch('/api/auth/logout', { method: 'POST' }); setUser(null); router.push("/"); }} className="bg-gray-700 px-4 py-1 rounded-sm">Logout</button>
            </>
          ) : (
            <Link href="/login" className="bg-red-700 px-4 py-1 rounded-sm hover:bg-red-900">Sign In</Link>
          )}
        </nav>

        {/* Mobile toggle */}
        <div className="md:hidden">
          <button aria-label="toggle menu" onClick={() => setOpen((s) => !s)} className="text-white px-3 py-2">
            {open ? 'Close' : 'Menu'}
          </button>
        </div>

        {/* Mobile nav panel */}
        {open && (
          <div className="absolute right-4 top-16 bg-black rounded shadow-md p-4 z-20 md:hidden">
            {user ? (
              <button onClick={async () => { await fetch('/api/auth/logout', { method: 'POST' }); setUser(null); }} className="block text-white py-2">Logout</button>
            ) : (
              <Link href="/login" className="block text-white py-2">Sign in</Link>
            )}
            <select className="bg-black text-white border rounded-sm px-3 py-1 mt-2 w-full">
              <option value="0">English</option>
              <option value="1">Hindi</option>
            </select>
          </div>
        )}
      </div>
    </header>
  );
}

function useAuthState() {
  const [user, setUser] = useState<unknown | null>(null);
  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const res = await fetch('/api/auth/me');
        const json = await res.json();
        if (mounted && json?.ok) setUser(json.user);
      } catch {
        // ignore
      }
    })();
    return () => { mounted = false; };
  }, []);
  return { user, setUser };
}
