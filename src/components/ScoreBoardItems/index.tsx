import { FC } from 'react'

type PropsScoreBoardItems = {
  bgColor?: string
  score?: number
  player?: string
}

const ScoreBoardItems: FC<PropsScoreBoardItems> = ({ bgColor, score, player }) => {
  return (
    <div
      style={{
        backgroundColor: bgColor || 'gray',
      }}
    >
      <h1>{score || '00'}</h1>
      <div className='line' />
      <h3 style={{ display: 'inline' }}>{player || 'player _'}</h3>
    </div>
  )
}

export default ScoreBoardItems
