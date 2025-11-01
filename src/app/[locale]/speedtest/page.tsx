"use client";


import { useState } from 'react';
import { logger } from '@/lib/logger';

export default function Page() {
  const [downloadSpeed, setDownloadSpeed] = useState<number | null>(null);
  const [uploadSpeed, setUploadSpeed] = useState<number | null>(null);
  const [ping, setPing] = useState<number | null>(null);
  const [testing, setTesting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const testSpeed = async () => {
    setTesting(true);
    setDownloadSpeed(null);
    setUploadSpeed(null);
    setPing(null);
    setError(null);

    try {
      // Ping test
      const pingStart = Date.now();
      await fetch('/api/ping', { method: 'GET' });
      const pingEnd = Date.now();
      setPing(pingEnd - pingStart);

      // Download test
      const downloadResponse = await fetch('/api/speed-test/download');
      const downloadData = await downloadResponse.json();
      if (downloadData.error) throw new Error(downloadData.error);
      setDownloadSpeed(downloadData.speed);

      // Upload test
      const uploadData = new ArrayBuffer(1000000); // 1MB
      const uploadResponse = await fetch('/api/speed-test/upload', {
        method: 'POST',
        body: uploadData,
      });
      const uploadResult = await uploadResponse.json();
      if (uploadResult.error) throw new Error(uploadResult.error);
      setUploadSpeed(uploadResult.speed);

    } catch (error) {
      logger.error('Speed test operation failed:', error);
      setError('Speed test operation failed. Please try again later.');
    } finally {
      setTesting(false);
    }
  };

  return (
    <>
      <div className="relative z-10 bg-black text-white p-8">
        <h1 className="text-3xl font-bold mb-8">Internet Speed Test</h1>
        <button
          onClick={testSpeed}
          disabled={testing}
          className="bg-red-600 hover:bg-red-700 disabled:bg-gray-600 px-6 py-3 rounded-lg text-lg font-semibold mb-8"
        >
          {testing ? 'Testing...' : 'Start Speed Test'}
        </button>

        {error && (
          <div className="mb-4 p-4 bg-red-600 rounded-lg text-white text-center">
            {error}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-800 p-6 rounded-lg text-center">
            <h2 className="text-xl font-semibold mb-2">Download Speed</h2>
            <p className="text-2xl font-bold text-green-400">
              {downloadSpeed !== null ? `${downloadSpeed} Mbps` : '--'}
            </p>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg text-center">
            <h2 className="text-xl font-semibold mb-2">Upload Speed</h2>
            <p className="text-2xl font-bold text-blue-400">
              {uploadSpeed !== null ? `${uploadSpeed} Mbps` : '--'}
            </p>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg text-center">
            <h2 className="text-xl font-semibold mb-2">Ping</h2>
            <p className="text-2xl font-bold text-yellow-400">
              {ping !== null ? `${ping} ms` : '--'}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
