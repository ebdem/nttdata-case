import { lazy } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import ErrorPage from '../pages/Error'

const App = lazy(() => import('../App'))
const Contact = lazy(() => import('../pages/Contact'))
const About = lazy(() => import('../pages/About'))

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/contact',
    element: <Contact />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/about',
    element: <About />,
    errorElement: <ErrorPage />,
  },
])
