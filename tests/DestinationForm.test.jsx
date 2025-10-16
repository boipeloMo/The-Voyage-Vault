import { render, screen, fireEvent } from '@testing-library/react'
import DestinationForm from '../components/DestinationForm'


test('shows validation errors when submitting empty form', () => {
const handle = jest.fn()
render(<DestinationForm onCreate={handle} />)
fireEvent.click(screen.getByText(/Add Destination/i))
expect(screen.getByText(/Name must be at least 2 characters/i)).toBeInTheDocument()
expect(screen.getByText(/Country is required/i)).toBeInTheDocument()
})
