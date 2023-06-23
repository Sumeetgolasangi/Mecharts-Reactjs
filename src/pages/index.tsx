
import { createBrowserRouter } from 'react-router-dom'
import HomePage from './home'
import LoginPage from './login'
import SignUpPage from './signup'
import Auth from "../middleware"
const router = createBrowserRouter([
  {
    path: '/',
    element: <Auth components={<HomePage/>}/>,
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
