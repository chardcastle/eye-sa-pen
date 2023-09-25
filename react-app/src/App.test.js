import React from "react"
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders component title', () => {
  render(<App />);
  const linkElement = screen.getByText(/Fund applications]/i);
  expect(linkElement).toBeInTheDocument();
});
