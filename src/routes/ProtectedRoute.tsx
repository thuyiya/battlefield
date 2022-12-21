import { FC } from 'react'
import { Navigate } from 'react-router-dom'
import useApp from '../hooks/useApp'

const ProtectedRoute: FC<{ children: JSX.Element }> = ({ children }) => {
  const appContext = useApp()

  if (!appContext?.user?.name) {
    return <Navigate to='/' replace />
  }

  return children
}

export default ProtectedRoute
