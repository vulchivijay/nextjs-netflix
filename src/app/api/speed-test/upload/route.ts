import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const start = Date.now();
    const body = await request.arrayBuffer();
    const end = Date.now();
    const time = (end - start) / 1000; // seconds
    const bits = body.byteLength * 8; // bits
    const speedMbps = bits / time / 1000000; // Mbps
    return NextResponse.json({ speed: Math.round(speedMbps) });
  } catch (error) {
    console.error('Upload speed test error:', error);
    return NextResponse.json({ error: 'Upload test failed' }, { status: 500 });
  }
}
