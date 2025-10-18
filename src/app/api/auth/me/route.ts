import { NextResponse } from 'next/server';
import { TOKEN_NAME, parseToken } from '../../../../lib/auth';

export async function GET(req: Request) {
  try {
    const cookieHeader = req.headers.get('cookie') || '';
    const cookies = Object.fromEntries(cookieHeader.split(';').map(s => {
      const [k, ...v] = s.split('=');
      return [k?.trim(), v.join('=')];
    }).filter(Boolean));

    const token = cookies[TOKEN_NAME];
    if (!token) return NextResponse.json({ ok: false, user: null }, { status: 200 });

    const payload = parseToken(token);
    // Minimal response — return sub and email if present
    return NextResponse.json({ ok: true, user: payload });
  } catch {
    return NextResponse.json({ ok: false, user: null }, { status: 401 });
  }
}
