import { render, screen } from '@testing-library/react';
import SampleComponent from '../../src/components/SampleComponent';

test('renders SampleComponent', () => {
  render(<SampleComponent />);
  expect(screen.getByText(/Sample Component/i)).toBeInTheDocument();
});
