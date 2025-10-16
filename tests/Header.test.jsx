import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Header from '../components/Header'


test('renders header brand and links', () => {
render(<BrowserRouter><Header /></BrowserRouter>)
expect(screen.getByText(/The Voyage Vault/i)).toBeInTheDocument()
expect(screen.getByText(/Home/i)).toBeInTheDocument()
expect(screen.getByText(/Destinations/i)).toBeInTheDocument()
expect(screen.getByText(/Itinerary/i)).toBeInTheDocument()
})
