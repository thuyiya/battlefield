import { useState, useEffect } from 'react'
import useApp from '../../hooks/useApp'
import { BattlefieldGrid, ScoreBoard, ShipStatusBoard, GameMenu } from '../../components'
import sampleData from '../../data/sample.json'
import { MainData, Ship, Slot, Layout } from '../../types'
import { GAME_BOARD } from '../../constants'
import { generateSlotBoard, updateSlotWithShipData } from '../../utils'

import './Game.css'

const Game = () => {
  const appContext = useApp()
  const [battleField, setBattleField] = useState<Slot[][]>([])
  const [shipData, setShipData] = useState<Array<Ship>>([])
  const [layout, setLayout] = useState<Array<Layout>>([])

  const hitCalculate = (hit: Array<number>) => {
    let hitAShip: Layout = { positions: [], ship: ''}
    for (let lay = 0; lay < layout.length; lay++) {
      const ship = layout[lay]
      for (let p = 0; p < ship.positions.length; p++) {
        if (JSON.stringify(ship.positions[p]) === JSON.stringify(hit)) {
          hitAShip = ship
          appContext?.updateHit()
          break
        }
      }
    }

    if (hitAShip.ship) {
      const newShipData = shipData.map((ship: Ship) => {
        if (ship.name === hitAShip.ship) {
          ship.count = (ship.count || 0) + 1
          return ship
        }

        return ship
      })
      setShipData(newShipData)
    }
  }

  const onChange = (position: Array<number>) => {
    const newBattleField = battleField
    if (!newBattleField[position[0]][position[1]].hit) {
      appContext?.updateShoot()
      newBattleField[position[0]][position[1]].hit = true
      setBattleField([...newBattleField])
      hitCalculate(position)
    }
  }

  const drawBattleFieldAndLayout = (shipAndPositionData: MainData) => {
    const slot: Slot = {
      id: '0',
      hit: false,
      miss: false,
      position: [],
      ship: {
        id: '',
        color: 'transparent',
        name: '',
        size: 0,
        count: 0,
      },
    }
    const slots = generateSlotBoard(slot, GAME_BOARD.ROWS, GAME_BOARD.CELLS)

    const {allPoints, board } = updateSlotWithShipData(shipAndPositionData.layout, slots)
    
    appContext?.pointUpdate(allPoints)
    setLayout(shipAndPositionData.layout)
    setBattleField(board)
  }

  const setupShipData = (shipAndPositionData: MainData) => {
    setShipData(
      Object.keys(shipAndPositionData.shipTypes).map((key) => ({
        id: key,
        size: shipAndPositionData.shipTypes[key].size,
        count: 0,
        name: key,
        color: 'transparent',
      })),
    )
  }

  const setupGame = () => {
    const shipAndPositionData: MainData = sampleData

    drawBattleFieldAndLayout(shipAndPositionData)
    setupShipData(shipAndPositionData)
  }

  useEffect(() => {
    setupGame()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  console.log('shipData ', shipData)

  return (
    <div className='game_container'>
      <div className='game_board'>
        <div className='score_board_details'>
          <ScoreBoard />
          <ShipStatusBoard shipsData={shipData} />
        </div>
        <div className='item'>
          <BattlefieldGrid battleField={battleField} onChange={onChange} />
        </div>
        <GameMenu init={setupGame} />
      </div>
    </div>
  )
}

export default Game
