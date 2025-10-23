import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  // Simulate upload by reading the body
  const body = await request.arrayBuffer();
  return NextResponse.json({ size: body.byteLength });
}
