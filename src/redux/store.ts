import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { articleAPI } from './features/articleAPI'
import { cartReducer, cartSlice } from './features/articleSlice'
import { counterReducer, counterSlice } from './features/counterslice'

const reducer = combineReducers({})

export const store = configureStore({
  reducer: {
    [articleAPI.reducerPath]: articleAPI.reducer,
    [cartSlice.name]: cartReducer,
    [counterSlice.name]: counterReducer,
  },
  devTools: import.meta.env.MODE === 'development',
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({}).concat([articleAPI.middleware]),
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
