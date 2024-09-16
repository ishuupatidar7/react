import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  //new line added in the test case in feature-1234
  const linkElement = screen.getByText(/learn react/i);
  //New test added in new-feature branch
  expect(linkElement).toBeInTheDocument();
  expect(linkElement).toBeInTheDocument();
  expect(linkElement).toBeInTheDocument();
  expect(linkElement).toBeInTheDocument();
  // To do comment 
});
