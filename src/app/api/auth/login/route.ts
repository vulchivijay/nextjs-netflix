import getClientPromise from '../../../../lib/mongodb';
import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import { validateEmail, validatePassword, normalizeEmail } from '../../../../lib/validators';
import { signToken, createSerializedSessionToken } from '../../../../lib/auth';

// Login API
// - Expects JSON body: { email: string, password: string }
// - Returns 200 { ok: true, user: { email } } on success (demo only)
// - Validates credentials by comparing bcrypt hash
// - Production note: replace this with session/JWT issuance and secure cookies
export async function POST(req: Request) {
  try {
  const { email, password } = await req.json();

  // Server-side validation
  const emailErr = validateEmail(email);
  if (emailErr) return NextResponse.json({ error: emailErr }, { status: 400 });
  const passwordErr = validatePassword(password);
  if (passwordErr) return NextResponse.json({ error: passwordErr }, { status: 400 });

  const normalizedEmail = normalizeEmail(email);

  let client;
  try {
    client = await getClientPromise();
  } catch {
    return NextResponse.json({ error: 'Database unavailable' }, { status: 503 });
  }
  const db = client.db();
    const users = db.collection('users');

  const user = await users.findOne({ email: normalizedEmail });
  if (!user) return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });

    // Compare the provided password to the stored bcrypt hash
  const ok = await bcrypt.compare(password, user.password);
    if (!ok) return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });

  // Issue JWT and set HttpOnly cookie
  const token = signToken({ sub: user._id.toString(), email: user.email });
  const cookie = createSerializedSessionToken(token);
  const res = NextResponse.json({ ok: true, user: { email: user.email } });
  res.headers.set('Set-Cookie', cookie);
  return res;
  } catch (err) {
    return NextResponse.json({ error: (err as Error).message }, { status: 500 });
  }
}
