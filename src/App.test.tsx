import { render, screen } from '@testing-library/react';
import App from "@/App"; // Ensure App is exported as a React component in './App'

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
