import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">Page not found</h1>
  <p className="mb-6">We couldn&apos;t find the page you were looking for.</p>
        <Link href="/" className="px-4 py-2 bg-red-600 rounded">Back to home</Link>
      </div>
    </div>
  );
}
