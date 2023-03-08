import React from 'react'
import { render } from '@testing-library/react'
import Logo from './index'

describe('<Logo />', () => {
  it('should render Logo component without props', () => {
    const { container } = render(<Logo />)
    expect(container).toBeInTheDocument()
  })

  it('should render Logo component with fill prop', () => {
    const { container } = render(<Logo fill='red' />)
    expect(container).toBeInTheDocument()
  })

  it('should render Logo component with isHeader prop', () => {
    const { container } = render(<Logo isHeader={true} />)
    expect(container).toBeInTheDocument()
  })
})
