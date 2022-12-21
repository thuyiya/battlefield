import { createContext } from 'react'
import User from '../types/User'

interface AppContextInterface {
  user: User | null
  onLogin: (user: string) => void
}

const AppContext = createContext<AppContextInterface | null>(null)

export default AppContext
export type { AppContextInterface }
