import getClientPromise from '../../../../lib/mongodb';
import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import { validateEmail, validatePassword, normalizeEmail } from '../../../../lib/validators';
import { signToken, createSerializedSessionToken } from '../../../../lib/auth';

// Signup API
// - Expects JSON body: { email: string, password: string }
// - Returns 200 { ok: true } on success
// - Validation: ensures both fields are present, and email is unique
// - Security note: passwords are hashed with bcrypt before storage
// - Production note: add rate-limiting, email verification, and stronger validation
export async function POST(req: Request) {
  try {
  const body = await req.json();
  const { email, password } = body;

  // Server-side validation of inputs
  const emailErr = validateEmail(email);
  if (emailErr) return NextResponse.json({ error: emailErr }, { status: 400 });
  const passwordErr = validatePassword(password);
  if (passwordErr) return NextResponse.json({ error: passwordErr }, { status: 400 });

  const normalizedEmail = normalizeEmail(email);

  let client;
  try {
    client = await getClientPromise();
  } catch {
    // DB not configured or unreachable — respond 503 Service Unavailable
    return NextResponse.json({ error: 'Database unavailable' }, { status: 503 });
  }
  const db = client.db();
    const users = db.collection('users');

    // Prevent duplicate accounts
  const existing = await users.findOne({ email: normalizedEmail });
    if (existing) return NextResponse.json({ error: 'User exists' }, { status: 409 });

    // Hash password before inserting
  const hash = await bcrypt.hash(password, 10);
  const insert = await users.insertOne({ email: normalizedEmail, password: hash, createdAt: new Date() });
  // Issue JWT and set cookie
  const token = signToken({ sub: insert.insertedId.toString(), email: normalizedEmail });
  const cookie = createSerializedSessionToken(token);
  const res = NextResponse.json({ ok: true });
  res.headers.set('Set-Cookie', cookie);
  return res;
  } catch (err) {
    // Return a generic 500 with message for debugging; do not leak sensitive info
    return NextResponse.json({ error: (err as Error).message }, { status: 500 });
  }
}
