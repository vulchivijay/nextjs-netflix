import { describe, it, expect } from 'vitest';
import { GET } from './route';

describe('ping route', () => {
  it('returns pong message', async () => {
    const res = await GET();
    const json = await res.json();

    expect(res.status).toBe(200);
    expect(json).toHaveProperty('message');
    expect(json.message).toBe('pong');
  });
});
