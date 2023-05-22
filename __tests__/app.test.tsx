import { fireEvent, render, screen } from '@testing-library/react'
import Home from '@/app/page'

describe('Home', () => {
  it('renders a home page', () => {
    render(<Home />)
  })
})
