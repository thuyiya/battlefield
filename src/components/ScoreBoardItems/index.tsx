import { FC } from 'react'
import './ScoreBoardItems.css'

type PropsScoreBoardItems = {
  bgColor?: string
  score?: number
  player?: string
}

const ScoreBoardItems: FC<PropsScoreBoardItems> = ({ bgColor, score, player }) => {
  return (
    <div
      className='score_board_items'
      style={{
        backgroundColor: bgColor || 'gray',
      }}
    >
      <h1>{score || '00'}</h1>
      <div className='line' />
      <h3 className='player_name'>{player || 'player _'}</h3>
    </div>
  )
}

export default ScoreBoardItems
