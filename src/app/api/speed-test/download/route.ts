import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const start = Date.now();
    const response = await fetch('https://speed.cloudflare.com/__down?bytes=10000000');
    if (!response.ok) {
      throw new Error('Failed to fetch download test file');
    }
    await response.arrayBuffer(); // Consume the response
    const end = Date.now();
    const time = (end - start) / 1000; // seconds
    const bits = 10 * 8 * 1000000; // 10MB in bits
    const speedMbps = bits / time / 1000000; // Mbps
    return NextResponse.json({ speed: Math.round(speedMbps) });
  } catch (error) {
    console.error('Download speed test error:', error);
    return NextResponse.json({ error: 'Download test failed' }, { status: 500 });
  }
}
