import React from 'react';
import { render, screen } from '@testing-library/react';
import TrendingNow from './index';

describe('TrendingNow', () => {
  it('renders the trending heading', () => {
    render(<TrendingNow />);
    expect(screen.getByText(/Trending now/i)).toBeInTheDocument();
  });
});
