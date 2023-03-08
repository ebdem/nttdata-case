import React from 'react'
import { render, screen } from '@testing-library/react'
import { Button } from './Button'

describe('Button', () => {
  it('should render the button', () => {
    render(<Button label='Test' />)
    expect(screen.getByText('Test')).toBeInTheDocument()
  })
})
