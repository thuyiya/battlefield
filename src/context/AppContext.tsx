import { createContext } from 'react'
import User from '../types/User'

interface AppContextInterface {
  user: User | null
  allPoints: number
  onLogin: (user: string) => void
  updateHit: () => void
  updateShoot: () => void
  pointUpdate: (p: number) => void
  resetScore: () => void
}

const AppContext = createContext<AppContextInterface | null>(null)

export default AppContext
export type { AppContextInterface }
