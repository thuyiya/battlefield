import { Ship } from './'

interface Slot {
  id: string
  hit: boolean
  miss: boolean
  position: Array<number>
  ship: Ship
}

export default Slot
