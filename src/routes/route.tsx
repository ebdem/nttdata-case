import { lazy } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import ErrorPage from '../pages/Error'
import Layout from '../Layout'

const App = lazy(() => import('../App'))
const Contact = lazy(() => import('../pages/Contact'))
const About = lazy(() => import('../pages/About'))

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Layout>
        <App />
      </Layout>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: '/contact',
    element: (
      <Layout>
        <Contact />
      </Layout>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: '/about',
    element: (
      <Layout>
        <About />
      </Layout>
    ),
    errorElement: <ErrorPage />,
  },
])
