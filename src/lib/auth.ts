import jwt from 'jsonwebtoken';
import { serialize } from 'cookie';

const TOKEN_NAME = 'nextjs_netflix_token';
const TOKEN_EXPIRES_IN = '7d';

const secret = process.env.JWT_SECRET || '';
if (!secret) {
  console.error('Environment variable JWT_SECRET is missing. Please check your .env file.');
  throw new Error('Environment variable JWT_SECRET must be defined.');
}

export function signToken(payload: object) {
  // Ensure secret is passed correctly to jwt.sign
  return jwt.sign(payload, secret as string, { expiresIn: TOKEN_EXPIRES_IN });
}

export function createSerializedSessionToken(token: string) {
  // Allow overriding sameSite in env for compatibility if needed
  const sameSite = (process.env.SESSION_SAMESITE as 'lax' | 'strict' | 'none') || 'lax';
  return serialize(TOKEN_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite,
    path: '/',
    maxAge: 60 * 60 * 24 * 7, // 7 days
  });
}

export function parseToken(token: string): unknown {
  // Ensure secret is passed correctly to jwt.verify
  return jwt.verify(token, secret as string) as unknown;
}

export function clearSessionCookie() {
  return serialize(TOKEN_NAME, '', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: (process.env.SESSION_SAMESITE as 'lax' | 'strict' | 'none') || 'lax',
    path: '/',
    maxAge: 0,
  });
}

export { TOKEN_NAME };
