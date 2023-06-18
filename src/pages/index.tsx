
import { createBrowserRouter } from 'react-router-dom'
import HomePage from './home'
import LoginPage from './login'
const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
])

export default router
