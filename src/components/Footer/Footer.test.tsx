import React from 'react'
import { render } from '@testing-library/react'
import Footer from './index'

describe('Footer', () => {
  const mockText = 'Truster Global Innovator'

  it('renders with given props', () => {
    const { getByText } = render(<Footer text={mockText} />)
    expect(getByText(`${mockText}`)).toBeInTheDocument()
  })
})
