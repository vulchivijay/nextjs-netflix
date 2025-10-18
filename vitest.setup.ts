// Setup for Vitest + Testing Library
// - Provide global mocks for Next.js specific modules used in components
import React from 'react';
import '@testing-library/jest-dom';

// `vi` is provided by Vitest as a global in the test environment
// Mock next/image to render a simple img in tests
(global as any).vi?.mock?.('next/image', () => ({
  default: (props: any) => {
    return React.createElement('img', props);
  },
}));

// Mock next/navigation's useRouter where components call router.push
(global as any).vi?.mock?.('next/navigation', () => ({
  useRouter: () => ({ push: () => {} }),
}));
