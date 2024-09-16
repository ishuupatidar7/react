import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  //New test added in new-feature branch
  expect(linkElement).toBeInTheDocument();
  expect(linkElement).toBeInTheDocument();
  expect(linkElement).toBeInTheDocument();
  expect(linkElement).toBeInTheDocument();
  // To do comment 
});
