import ScoreBoardItems from '../ScoreBoardItems'
import useApp from '../../hooks/useApp'
import './ScoreBoard.css'

const ScoreBoard = () => {
  const appContext = useApp()

  return (
    <div className='score_board'>
      <ScoreBoardItems
        bgColor='#f39c12'
        player={appContext?.user?.name}
        score={appContext?.user?.shoot}
      />
      <ScoreBoardItems bgColor='#1abc9c' />
    </div>
  )
}

export default ScoreBoard
