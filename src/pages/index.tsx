
import { createBrowserRouter } from 'react-router-dom'
import HomePage from './home'
import LoginPage from './login'
import SignUpPage from './signup'
const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/signup',
    element: <SignUpPage />,
  },
])

export default router
