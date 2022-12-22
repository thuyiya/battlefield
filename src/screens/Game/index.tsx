import useApp from '../../hooks/useApp'
import { BattlefieldGrid, ScoreBoard, ShipStatusBoard } from '../../components'

import './game.css'

const Game = () => {
  const appContext = useApp()

  // console.log('appContext game ', appContext)

  return <div className='container'>
    <div className="item tablet-row">
        <ScoreBoard />
        <ShipStatusBoard />
    </div>
    <div className="item">
        <BattlefieldGrid />
    </div>
  </div>
}

export default Game
