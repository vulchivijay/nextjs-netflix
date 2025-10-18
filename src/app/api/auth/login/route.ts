import clientPromise from '../../../../lib/mongodb';
import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import { validateEmail, validatePassword, normalizeEmail } from '../../../../../src/lib/validators';

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

    const client = await clientPromise;
    const db = client.db();
    const users = db.collection('users');

  const user = await users.findOne({ email: normalizedEmail });
  if (!user) return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });

    // Compare the provided password to the stored bcrypt hash
  const ok = await bcrypt.compare(password, user.password);
    if (!ok) return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });

    // For demo return minimal user info. In production issue JWT or session.
    return NextResponse.json({ ok: true, user: { email: user.email } });
  } catch (err) {
    return NextResponse.json({ error: (err as Error).message }, { status: 500 });
  }
}
