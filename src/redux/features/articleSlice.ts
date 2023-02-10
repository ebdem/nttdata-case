import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { IArticle } from '../types'

export interface ICart {
  cart: IArticle[]
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state: ICart, action: PayloadAction<IArticle>) => {
      const itemInCart = state.cart.find((item: IArticle) => item.id === action.payload.id)
      if (itemInCart) {
        return
      }

      state.cart.push({ ...action.payload })
    },
    removeItem: (state, action) => {
      const removeItemByID = state.cart.filter((item: IArticle) => item.id !== action.payload)
      state.cart = removeItemByID
    },
  },
})

export const cartReducer = cartSlice.reducer
export const { addToCart, removeItem } = cartSlice.actions
