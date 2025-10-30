import React from 'react';
import { render, screen } from '@testing-library/react';
import Login from '../login/page';

describe('Login page', () => {
  it('renders sign in heading', () => {
    render(<Login />);
    // target the heading element specifically (there is also a button with the same text)
    expect(screen.getByRole('heading', { name: /Sign in/i })).toBeInTheDocument();
  });
});
