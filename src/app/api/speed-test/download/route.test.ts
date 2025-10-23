import { vi, describe, it, expect } from 'vitest';
import { GET } from './route';

// Mock fetch globally
global.fetch = vi.fn();

describe('speed-test/download route', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('returns download speed on successful fetch', async () => {
    const mockResponse = new Response('x'.repeat(10000000)); // 10MB response
    (global.fetch as any).mockResolvedValue(mockResponse);

    const res = await GET();
    const json = await res.json();

    expect(res.status).toBe(200);
    expect(json).toHaveProperty('speed');
    expect(typeof json.speed).toBe('number');
    expect(json.speed).toBeGreaterThan(0);
  });

  it('returns 500 on fetch failure', async () => {
    (global.fetch as any).mockRejectedValue(new Error('Network error'));

    const res = await GET();
    const json = await res.json();

    expect(res.status).toBe(500);
    expect(json).toHaveProperty('error');
    expect(json.error).toBe('Download test failed');
  });

  it('returns 500 on non-ok response', async () => {
    const mockResponse = new Response('Not found', { status: 404 });
    (global.fetch as any).mockResolvedValue(mockResponse);

    const res = await GET();
    const json = await res.json();

    expect(res.status).toBe(500);
    expect(json).toHaveProperty('error');
    expect(json.error).toBe('Failed to fetch download test file');
  });
});
