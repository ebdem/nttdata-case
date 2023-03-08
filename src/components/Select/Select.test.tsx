import { fireEvent, render, screen } from '@testing-library/react'
import SelectComponent from './index'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import { setcategory } from '../../redux/features/categorySlice'

const mockStore = configureStore([])

describe('SelectComponent', () => {
  let store: any
  beforeEach(() => {
    store = mockStore({
      category: {
        category: '',
      },
    })
  })

  test('renders SelectComponent with default value', () => {
    render(
      <Provider store={store}>
        <SelectComponent />
      </Provider>,
    )

    expect(screen.getByText('Categories')).toBeInTheDocument()
  })

  test('renders SelectComponent with options', () => {
    render(
      <Provider store={store}>
        <SelectComponent />
      </Provider>,
    )

    expect(screen.getByText('art')).toBeInTheDocument()
    expect(screen.getByText('design')).toBeInTheDocument()
    expect(screen.getByText('fashion')).toBeInTheDocument()
    expect(screen.getByText('nature')).toBeInTheDocument()
    expect(screen.getByText('science')).toBeInTheDocument()
    expect(screen.getByText('education')).toBeInTheDocument()
    expect(screen.getByText('feelings')).toBeInTheDocument()
    expect(screen.getByText('health')).toBeInTheDocument()
    expect(screen.getByText('people')).toBeInTheDocument()
    expect(screen.getByText('cars')).toBeInTheDocument()
  })

  test('changes selected category when an option is clicked', () => {
    render(
      <Provider store={store}>
        <SelectComponent />
      </Provider>,
    )

    const option = screen.getByText('art')
    fireEvent.click(option)

    expect(screen.getByText('art')).toHaveAttribute('aria-selected', 'true')
    expect(store.getActions()).toContainEqual(setcategory('art'))
  })
})
