import { fireEvent, getByText, render } from '@testing-library/react'
import TestExample from './TestExample'

it('Click the button', () => {
  const wrapper = render(<TestExample />)
  const button = wrapper.container.querySelector('button') as HTMLButtonElement

  // button mounts with count in 0
  expect(button.textContent).toBe('count is 0')

  fireEvent(
    getByText(button, 'count is 0'),
    new MouseEvent('click', {
      bubbles: true,
    }),
  )

  // The count hook is working
  expect(button.textContent).toBe('count is 1')
})
