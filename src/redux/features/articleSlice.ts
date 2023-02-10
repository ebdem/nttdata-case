// src/redux/cartSlice.js
import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state: any, action: any) => {
      const itemInCart = state.cart.find((item: any) => item.id === action.payload.id)
      if (itemInCart) {
        return
      }

      state.cart.push({ ...action.payload })
    },
    removeItem: (state, action) => {
      const removeItemByID = state.cart.filter((item: any) => item.id !== action.payload)
      state.cart = removeItemByID
    },
  },
})

export const cartReducer = cartSlice.reducer
export const { addToCart, removeItem } = cartSlice.actions
