import React from 'react';
import { render, screen } from '@testing-library/react';
import Ribbon from './index';

describe('Ribbon', () => {
  it('renders the headline', () => {
    render(<Ribbon />);
    expect(screen.getByText(/The Netflix you love/i)).toBeInTheDocument();
  });
});
