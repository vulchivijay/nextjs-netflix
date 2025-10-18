import jwt from 'jsonwebtoken';
import { serialize } from 'cookie';

const TOKEN_NAME = 'nextjs_netflix_token';
const TOKEN_EXPIRES_IN = '7d';

export function signToken(payload: object) {
  const secret = process.env.JWT_SECRET;
  if (!secret) throw new Error('JWT_SECRET not set');
  return jwt.sign(payload, secret, { expiresIn: TOKEN_EXPIRES_IN });
}

export function createSerializedSessionToken(token: string) {
  return serialize(TOKEN_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 24 * 7, // 7 days
  });
}

export function parseToken(token: string): unknown {
  const secret = process.env.JWT_SECRET;
  if (!secret) throw new Error('JWT_SECRET not set');
  return jwt.verify(token, secret) as unknown;
}

export function clearSessionCookie() {
  return serialize(TOKEN_NAME, '', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: 0,
  });
}

export { TOKEN_NAME };
