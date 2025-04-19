import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

// 模擬 window.alert
beforeAll(() => {
  global.alert = jest.fn();
});

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
