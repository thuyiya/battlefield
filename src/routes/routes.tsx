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

const Root = () => <RouterProvider router={router} />

export default Root
