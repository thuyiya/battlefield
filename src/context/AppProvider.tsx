import { useState, FC } from 'react'
import AuthContext, { AppContextInterface } from './AppContext'
import User from '../types/User'

const AppProvider: FC<{ children: JSX.Element }> = ({ children }) => {
  const [user, setUser] = useState<User>({})

  const handleLogin = async (name: string) => {
    setUser({
      name,
      hit: 0,
      shoot: 0,
    })
  }

  const value: AppContextInterface = {
    user,
    onLogin: handleLogin,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export default AppProvider
