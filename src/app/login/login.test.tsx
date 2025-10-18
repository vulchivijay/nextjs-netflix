import React from 'react';
import { render, screen } from '@testing-library/react';
import Login from '../login/page';

describe('Login page', () => {
  it('renders sign in heading', () => {
    render(<Login />);
    expect(screen.getByText(/Sign in/i)).toBeInTheDocument();
  });
});
