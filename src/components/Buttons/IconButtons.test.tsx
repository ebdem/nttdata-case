import React from 'react'
import { render, screen } from '@testing-library/react'
import IconButton from './IconButtons'

it.todo('should render a button with the icon of search')

it('should render a button with the icon of search', () => {
  render(<IconButton />)
  const button = screen.getByRole('button')
  expect(button).toHaveClass('icon__button')
})
