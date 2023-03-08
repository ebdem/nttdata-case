import React from 'react'

import { render, screen } from '@testing-library/react'

import Drawer from './index'

// give me a drwaver component unit test

describe('Drawer', () => {
  it('should render the drawer', () => {
    render(<Drawer />)
    expect(screen.findAllByAltText)
  })
})
