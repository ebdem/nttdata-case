import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export const detailMenu = createSlice({
  name: 'detailMenu',
  initialState: {
    open: false,
  },
  reducers: {
    setOpen: (state, action: PayloadAction<boolean>) => {
      state.open = action.payload
    },
  },
})

export const cartReducer = detailMenu.reducer
export const { setOpen } = detailMenu.actions
