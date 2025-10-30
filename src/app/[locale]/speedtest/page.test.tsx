import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';
import Page from './page';

// Mock fetch globally
global.fetch = vi.fn();

describe('SpeedTest Page', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders the speed test page with header and initial state', () => {
    render(<Page />);

    expect(screen.getByText('Internet Speed Test')).toBeInTheDocument();
    expect(screen.getByText('Start Speed Test')).toBeInTheDocument();
    expect(screen.getByText('Download Speed')).toBeInTheDocument();
    expect(screen.getByText('Upload Speed')).toBeInTheDocument();
    expect(screen.getByText('Ping')).toBeInTheDocument();

    // Check initial values are '--'
    expect(screen.getAllByText('--')).toHaveLength(3);
  });

  it('displays testing state when button is clicked', async () => {
    // Mock successful API responses with delay to show testing state
    (global.fetch as any)
      .mockImplementationOnce(() => new Promise(resolve => setTimeout(() => resolve({ ok: true }), 100))) // ping with delay
      .mockResolvedValueOnce({ json: () => Promise.resolve({ speed: 50 }) }) // download
      .mockResolvedValueOnce({ json: () => Promise.resolve({ speed: 10 }) }); // upload

    render(<Page />);

    const button = screen.getByText('Start Speed Test');
    await userEvent.click(button);

    // Check button is disabled and shows testing text
    expect(button).toBeDisabled();
    expect(button).toHaveTextContent('Testing...');
  });

  it('displays speed results after successful test', async () => {
    (global.fetch as any)
      .mockResolvedValueOnce(new Response(JSON.stringify({ message: 'pong' }), { status: 200 })) // ping
      .mockResolvedValueOnce(new Response(JSON.stringify({ speed: 100 }), { status: 200 })) // download
      .mockResolvedValueOnce(new Response(JSON.stringify({ speed: 20 }), { status: 200 })); // upload

    render(<Page />);

    const button = screen.getByText('Start Speed Test');
    await userEvent.click(button);

    await waitFor(() => {
      expect(screen.getByText('100 Mbps')).toBeInTheDocument();
      expect(screen.getByText('20 Mbps')).toBeInTheDocument();
      expect(screen.getByText(/ms/)).toBeInTheDocument(); // ping should be displayed
    });

    expect(screen.getByText('Start Speed Test')).toBeInTheDocument(); // button should be enabled again
  });

  it('handles download test error gracefully', async () => {
    const mockAlert = vi.spyOn(window, 'alert').mockImplementation(() => { });

    (global.fetch as any)
      .mockResolvedValueOnce({ ok: true }) // ping
      .mockResolvedValueOnce({ json: () => Promise.resolve({ error: 'Download failed' }) }); // download error

    render(<Page />);

    const button = screen.getByText('Start Speed Test');
    await userEvent.click(button);

    await waitFor(() => {
      expect(mockAlert).toHaveBeenCalledWith('Speed test failed. Please try again.');
    });

    mockAlert.mockRestore();
  });

  it('handles upload test error gracefully', async () => {
    const mockAlert = vi.spyOn(window, 'alert').mockImplementation(() => { });

    (global.fetch as any)
      .mockResolvedValueOnce({ ok: true }) // ping
      .mockResolvedValueOnce({ json: () => Promise.resolve({ speed: 50 }) }) // download
      .mockResolvedValueOnce({ json: () => Promise.resolve({ error: 'Upload failed' }) }); // upload error

    render(<Page />);

    const button = screen.getByText('Start Speed Test');
    await userEvent.click(button);

    await waitFor(() => {
      expect(mockAlert).toHaveBeenCalledWith('Speed test failed. Please try again.');
    });

    mockAlert.mockRestore();
  });

  it('handles network error gracefully', async () => {
    const mockAlert = vi.spyOn(window, 'alert').mockImplementation(() => { });

    (global.fetch as any).mockRejectedValueOnce(new Error('Network error'));

    render(<Page />);

    const button = screen.getByText('Start Speed Test');
    await userEvent.click(button);

    await waitFor(() => {
      expect(mockAlert).toHaveBeenCalledWith('Speed test failed. Please try again.');
    });

    mockAlert.mockRestore();
  });

  it('resets previous results when starting a new test', async () => {
    (global.fetch as any)
      .mockResolvedValueOnce({ ok: true }) // ping
      .mockResolvedValueOnce({ json: () => Promise.resolve({ speed: 100 }) }) // download
      .mockResolvedValueOnce({ json: () => Promise.resolve({ speed: 20 }) }); // upload

    render(<Page />);

    // First test
    await userEvent.click(screen.getByText('Start Speed Test'));

    await waitFor(() => {
      expect(screen.getByText('100 Mbps')).toBeInTheDocument();
    });

    // Start second test - results should reset to '--'
    (global.fetch as any)
      .mockImplementationOnce(() => new Promise(resolve => setTimeout(() => resolve({ ok: true }), 100))) // ping with delay
      .mockResolvedValueOnce({ json: () => Promise.resolve({ speed: 200 }) }) // download
      .mockResolvedValueOnce({ json: () => Promise.resolve({ speed: 40 }) }); // upload

    await userEvent.click(screen.getByText('Start Speed Test'));

    // Should show testing state and reset values
    expect(screen.getByText('Testing...')).toBeInTheDocument();
    expect(screen.getAllByText('--')).toHaveLength(3);
  });
});
