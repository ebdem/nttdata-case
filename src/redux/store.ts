import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { articleAPI } from './features/articleAPI'

export const store = configureStore({
  reducer: {
    [articleAPI.reducerPath]: articleAPI.reducer,
  },
  devTools: import.meta.env.MODE === 'development',
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({}).concat([articleAPI.middleware]),
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
