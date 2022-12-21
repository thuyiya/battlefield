import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Welcome, Game } from '../screens'
import ProtectedRoute from './ProtectedRoute'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Welcome />,
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
