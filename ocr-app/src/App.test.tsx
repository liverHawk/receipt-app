import { render, screen } from '@testing-library/react';
import App from './App';
import React from 'react';

test('renders another element', () => {
  render(<App />);
  const anotherElement = screen.getByText(/another text/i);
  expect(anotherElement).toBeInTheDocument();
});
