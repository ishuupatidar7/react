import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  console.log("Console log 1 added in feature-2222")
  console.log("Console log 2 added in feature-2222")

  //new line added in the test case in feature-1234
  const linkElement = screen.getByText(/learn react/i);
  //New test added in new-feature branch
  expect(linkElement).toBeInTheDocument();
  expect(linkElement).toBeInTheDocument();
  expect(linkElement).toBeInTheDocument();
  expect(linkElement).toBeInTheDocument();
  console.log("Console log 3 added in feature-2222")
  console.log("Console log 4 added in feature-2222")
  // To do comment 
});
