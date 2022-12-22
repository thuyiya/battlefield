import { FC } from 'react'
import { Navigate } from 'react-router-dom'
import useApp from '../hooks/useApp'

const PublicRoute: FC<{ children: JSX.Element }> = ({ children }) => {
  const appContext = useApp()

  if (appContext?.user?.name) {
    return <Navigate to='/game' replace />
  }

  return children
}

export default PublicRoute
