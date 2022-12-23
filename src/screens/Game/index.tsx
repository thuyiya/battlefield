import { useState, useEffect } from 'react'
import useApp from '../../hooks/useApp'
import { BattlefieldGrid, ScoreBoard, ShipStatusBoard } from '../../components'
import sampleData from '../../data/sample.json'
import { MainData, Ship, Slot } from '../../types'
import { GAME_BOARD } from '../../constants'

import './Game.css'

const SHIP_AND_POSITION: MainData = sampleData

const Game = () => {
  const appContext = useApp()
  const [battleField, setBattleField] = useState<Slot[][]>([])
  const [shipData, setShipData] = useState<Array<Ship>>([])

  const onChange = (position: Array<number>) => {
    console.log(position)
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
        count: 0
      },
    }
    const board = Array.from(Array(GAME_BOARD.ROWS), (_, r) =>
      Array.from({ length: GAME_BOARD.CELLS }, (_, c) => ({
        ...slot,
        id: `${r}-${c}`,
        position: [r, c],
      })),
    )

    for (let i = 0; i < shipAndPositionData.layout.length; i++) {
      const element = shipAndPositionData.layout[i]
      for (let p = 0; p < element.positions.length; p++) {
        const pos: Array<number> = element.positions[p]
        board[pos[0]][pos[1]].ship = {
          id: `${pos[0]}-${pos[1]}-${element.ship}`,
          color: 'transparent',
          name: element.ship,
        }
      }
    }
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
      <div className='item tablet-row'>
        <ScoreBoard />
        <ShipStatusBoard />
      </div>
      <div className='item'>
        <BattlefieldGrid battleField={battleField} onChange={onChange} />
      </div>
    </div>
  )
}

export default Game
