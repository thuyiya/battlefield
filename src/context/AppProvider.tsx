import { useState, FC } from 'react'
import AuthContext, { AppContextInterface } from './AppContext'
import User from '../types/User'

const AppProvider: FC<{ children: JSX.Element }> = ({ children }) => {
  const [user, setUser] = useState<User>({})
  const [allPoints, setAllPoints] = useState<number>(0)

  const onLogin = async (name: string) => {
    setUser({
      name,
      hit: 0,
      shoot: 0,
    })
  }

  const updateShoot = () => {
    setUser((prevState: User) => ({
      ...prevState,
      shoot: prevState?.shoot ? prevState?.shoot + 1 : 1,
    }))
  }

  const updateHit = () => {
    setUser((prevState: User) => ({
      ...prevState,
      hit: prevState?.hit ? prevState?.hit + 1 : 1,
    }))
  }

  const resetScore = () => {
    setUser((prevState) => ({
      ...prevState,
      hit: 0,
      shoot: 0,
    }))
  }

  const value: AppContextInterface = {
    user,
    onLogin,
    updateShoot,
    updateHit,
    allPoints,
    pointUpdate: setAllPoints,
    resetScore,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export default AppProvider
