import DestroyerShape from '../assets/images/Carrier Shape.png'
import CarrierShape from '../assets/images/Aircraft Shape.png'
import BattleshipShape from '../assets/images/Battleship Shape.png'
import CruiserShape from '../assets/images/Cruiser Shape.png'
import SubmarineShape from '../assets/images/Submarine Shape.png'

const STRINGS = {
  WELCOME: {
    TITLE: 'Welcome To BATTLEFIELD',
    LOGIN_BUTTON: "Let's Play",
    INPUT_PLACEHOLDER: 'Player Name',
  },
}

const GAME_BOARD = {
  ROWS: 10,
  CELLS: 10,
}

const SHIP_IMAGES = (key: string) => {
  switch (key) {
    case 'carrier':
      return CarrierShape
    case 'battleship':
      return BattleshipShape
    case 'cruiser':
      return CruiserShape
    case 'submarine':
      return SubmarineShape
    case 'destroyer':
      return DestroyerShape
    default:
      return ''
  }
}

export { STRINGS, GAME_BOARD, SHIP_IMAGES }
