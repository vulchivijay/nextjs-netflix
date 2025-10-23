import { vi, describe, it, expect } from 'vitest';
import { POST } from './route';

function makeReq(body: ArrayBuffer) {
  return new Request('http://localhost/api/speed-test/upload', {
    method: 'POST',
    body: body
  });
}

describe('speed-test/upload route', () => {
  it('returns upload speed on successful post', async () => {
    const testData = new ArrayBuffer(1000000); // 1MB
    const req = makeReq(testData);

    const res = await POST(req);
    const json = await res.json();

    expect(res.status).toBe(200);
    expect(json).toHaveProperty('speed');
    expect(typeof json.speed).toBe('number');
    expect(json.speed).toBeGreaterThan(0);
  });

  it('returns 500 on error', async () => {
    // Create a request that will cause an error
    const req = new Request('http://localhost/api/speed-test/upload', {
      method: 'POST',
      body: null // This should cause an error
    });

    const res = await POST(req);
    const json = await res.json();

    expect(res.status).toBe(500);
    expect(json).toHaveProperty('error');
    expect(json.error).toBe('Upload test failed');
  });
});
