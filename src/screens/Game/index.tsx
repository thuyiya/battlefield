import { useState, useEffect } from 'react'
import useApp from '../../hooks/useApp'
import { BattlefieldGrid, ScoreBoard, ShipStatusBoard, GameMenu } from '../../components'
import sampleData from '../../data/sample.json'
import { MainData, Ship, Slot } from '../../types'
import { GAME_BOARD } from '../../constants'

import './Game.css'

const SHIP_AND_POSITION: MainData = sampleData

const Game = () => {
  const appContext = useApp()
  const [battleField, setBattleField] = useState<Slot[][]>([])
  const [shipData, setShipData] = useState<Array<Ship>>([])
  const [layout, setLayout] = useState<Array<any>>([])

  const hitCalculate = (hit: Array<number>) => {
    let hitAShip: any = null
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

    if (hitAShip) {
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
    const board = Array.from(Array(GAME_BOARD.ROWS), (_, r) =>
      Array.from({ length: GAME_BOARD.CELLS }, (_, c) => ({
        ...slot,
        id: `${r}-${c}`,
        position: [r, c],
      })),
    )

    let allPoints = 0

    for (let i = 0; i < shipAndPositionData.layout.length; i++) {
      const element = shipAndPositionData.layout[i]
      for (let p = 0; p < element.positions.length; p++) {
        const pos: Array<number> = element.positions[p]
        allPoints++
        board[pos[0]][pos[1]].ship = {
          id: `${pos[0]}-${pos[1]}-${element.ship}`,
          color: 'transparent',
          name: element.ship,
        }
      }
    }
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
    drawBattleFieldAndLayout(SHIP_AND_POSITION)
    setupShipData(SHIP_AND_POSITION)
  }

  useEffect(() => {
    setupGame()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className='container'>
      <div>
        <ScoreBoard />
        <ShipStatusBoard shipsData={shipData} />
      </div>
      <div>
        <BattlefieldGrid battleField={battleField} onChange={onChange} />
      </div>
      <GameMenu init={setupGame} />
    </div>
  )
}

export default Game
