// Small helper validators for request input validation

export function validateEmail(email: unknown): string | null {
  if (typeof email !== 'string') return 'Email must be a string';
  const s = email.trim();
  if (!s) return 'Email is required';
  // simple RFC-ish email check
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!re.test(s)) return 'Email is invalid';
  return null;
}

export function validatePassword(password: unknown): string | null {
  if (typeof password !== 'string') return 'Password must be a string';
  if (!password) return 'Password is required';
  if (password.length < 6) return 'Password must be at least 6 characters';
  return null;
}

export function normalizeEmail(email: string) {
  return email.trim().toLowerCase();
}
