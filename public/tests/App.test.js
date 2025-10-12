import { render, screen } from '@testing-library/react';
import App from '../src/App';

test('renders the app without crashing', () => {
  render(<App />);
  const linkElement = screen.getByText(/Travel Planner/i);
  expect(linkElement).toBeInTheDocument();
});
