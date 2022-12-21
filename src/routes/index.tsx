import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { Welcome, Game } from '../screens'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Welcome />,
  },
  {
    path: '/game',
    element: <Game />,
  },
])

const AppNavigator = () => <RouterProvider router={router} />

export default AppNavigator
