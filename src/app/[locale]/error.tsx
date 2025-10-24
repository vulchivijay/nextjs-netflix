"use client"

import Link from 'next/link';

// Global error boundary page. This renders when an error is thrown during
// rendering on the client or server for any root-level route.
export default function GlobalError({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white p-6">
      <div className="max-w-xl text-center">
        <h1 className="text-2xl font-bold mb-4">Something went wrong</h1>
        <p className="mb-4">{error?.message || 'An unexpected error occurred.'}</p>
        <div className="flex gap-4 justify-center">
          <button onClick={() => reset()} className="px-4 py-2 bg-red-600 rounded">Try again</button>
          <Link href="/" className="px-4 py-2 bg-gray-800 rounded">Back to home</Link>
        </div>
      </div>
    </div>
  );
}
