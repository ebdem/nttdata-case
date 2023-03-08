import React from 'react'
import { render, screen } from '@testing-library/react'
import Card from './index'

describe('Card', () => {
  it('should render the card', () => {
    render(<Card images='#' title='Card' price={100} />)
    expect(screen.getByText('Card')).toBeInTheDocument()
  })
})
