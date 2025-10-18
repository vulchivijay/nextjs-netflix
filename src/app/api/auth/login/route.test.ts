import { vi, describe, it, expect } from 'vitest';
import { POST } from './route';

function makeReq(body: unknown) {
  return new Request('http://localhost/api/auth/login', { method: 'POST', body: JSON.stringify(body) });
}

describe('login route', () => {
  it('returns 400 for missing fields', async () => {
    const req = makeReq({});
    const res = await POST(req);
    expect(res.status).toBe(400);
  });

  it('returns 503 when DB unavailable', async () => {
    vi.mock('../../../../lib/mongodb', () => ({ default: async () => { throw new Error('no db'); } }));
    const route = await import('./route');
    const req = makeReq({ email: 'test@example.com', password: 'password' });
    const res = await route.POST(req);
    const json = await res.json();
    expect(res.status).toBe(503);
    expect(json.error).toBe('Database unavailable');
  });
});
