import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Welcome, Game } from '../screens'
import ProtectedRoute from './ProtectedRoute'
import PublicRoute from './PublicRoute'

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <PublicRoute>
        <Welcome />
      </PublicRoute>
    ),
  },
  {
    path: '/game',
    element: (
      <ProtectedRoute>
        <Game />
      </ProtectedRoute>
    ),
  },
])

const AppNavigator = () => <RouterProvider router={router} />

export default AppNavigator
