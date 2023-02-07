import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import { router } from './routes/route'
import { store } from './redux/store'
import './index.scss'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>,
)
