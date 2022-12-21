import { useState, FC } from 'react'
import AuthContext, { AppContextInterface } from './AppContext'
import User from '../types/User'

const AppProvider: FC<{ children: JSX.Element }> = ({ children }) => {
  const [user, setUser] = useState<User>({})

  const value: AppContextInterface = {
    user,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export default AppProvider
