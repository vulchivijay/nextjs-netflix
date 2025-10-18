import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from './index';

describe('Button', () => {
  it('renders children', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });
});
