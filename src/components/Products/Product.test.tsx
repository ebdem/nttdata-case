import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { ToastContainer } from 'react-toastify'
import Products from './index'
import { Store, AnyAction } from '@reduxjs/toolkit'

const mockStore = configureStore([thunk])

describe('Products', () => {
  let store: any
  let initialState: any

  beforeEach(() => {
    initialState = {
      cart: {
        cart: [
          {
            id: 1,
            title: 'Product 1',
            price: 10,
            quantity: 1,
          },
        ],
      },
    }
    store = mockStore(initialState)
  })

  it('renders the products header', () => {
    render(
      <Provider store={store}>
        <Products />
        <ToastContainer />
      </Provider>,
    )

    expect(screen.getByText(/Content title goes here/i)).toBeInTheDocument()
  })

  it('renders the products list', () => {
    render(
      <Provider store={store}>
        <Products />
        <ToastContainer />
      </Provider>,
    )

    expect(screen.getAllByRole('article')).toHaveLength(1)
  })

  it('renders the loading indicator', () => {
    const state = {
      ...initialState,
      cart: {
        ...initialState.cart,
        cart: [],
      },
    }
    store = mockStore(state)

    render(
      <Provider store={store}>
        <Products />
        <ToastContainer />
      </Provider>,
    )

    expect(screen.getByTestId('loading-indicator')).toBeInTheDocument()
  })

  it('adds a product to the cart when clicking the "Add to Cart" button', () => {
    const state = {
      ...initialState,
      cart: {
        ...initialState.cart,
        cart: [],
      },
    }
    store = mockStore(state)

    render(
      <Provider store={store}>
        <Products />
        <ToastContainer />
      </Provider>,
    )

    const addToCartButton = screen.getAllByText(/Add to Cart/i)[0]
    userEvent.click(addToCartButton)

    const actions = store.getActions()
    expect(actions).toEqual([
      {
        type: 'cart/addToCart',
        payload: {
          id: 1,
          title: 'Product 1',
          price: 10,
        },
      },
    ])
  })

  it('removes a product from the cart when clicking the "Remove" button', () => {
    render(
      <Provider store={store}>
        <Products />
        <ToastContainer />
      </Provider>,
    )

    const removeButton = screen.getByLabelText(/Remove/i)
    userEvent.click(removeButton)

    const actions = store.getActions()
    expect(actions).toEqual([
      {
        type: 'cart/removeItem',
        payload: 1,
      },
    ])
  })
})
