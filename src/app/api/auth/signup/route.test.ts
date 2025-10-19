import { vi, describe, it, expect, beforeEach } from 'vitest';
import { POST } from './route';

// Mock request helper
function makeReq(body: unknown) {
  return new Request('http://localhost/api/auth/signup', { method: 'POST', body: JSON.stringify(body) });
}

describe('signup route', () => {
  beforeEach(() => {
    vi.resetModules();
  });

  it('returns 400 for invalid email', async () => {
    const req = makeReq({ email: 'bad', password: 'password' });
    const res = await POST(req);
    const json = await res.json();
    expect(res.status).toBe(400);
    expect(json.error).toBeDefined();
  });

  it('returns 503 when DB unavailable', async () => {
    // mock mongodb helper to throw
    vi.mock('../../../../lib/mongodb', () => ({ default: async () => { throw new Error('no db'); } }));
    const req = makeReq({ email: 'test@example.com', password: 'password' });
    // reload route with mocks
    const route = await import('./route');
    const res = await route.POST(req);
    const json = await res.json();
    expect(res.status).toBe(503);
    expect(json.error).toBe('Database unavailable');
  });
});
