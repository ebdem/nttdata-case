import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export const categorySlice = createSlice({
  name: 'category',
  initialState: {
    category:"art"
  },
  reducers: {
    setcategory: (state, action: PayloadAction<string>) => {
        state.category = action.payload
    }
  },
})

export const cartReducer = categorySlice.reducer
export const { setcategory } = categorySlice.actions
