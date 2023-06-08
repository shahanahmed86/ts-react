import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';
import { MemoryRouter } from 'react-router-dom';

import { App, WrappedApp } from './App';

describe('App', () => {
  it('Renders Hello world', () => {
    // ARRANGE
    render(<WrappedApp />);

    // ACT

    // EXPECT
    expect(screen.getByText('Hello world')).toBeInTheDocument();
  });
  it('Renders not found', () => {
    // ARRANGE
    render(
      <MemoryRouter initialEntries={['/this-route-does-not-exists']}>
        <App />
      </MemoryRouter>
    );

    // ACT

    // EXPECT
    expect(screen.getByText('Not Found')).toBeInTheDocument();
    expect(screen.getByText('Go Home')).toBeInTheDocument();
  });
});
