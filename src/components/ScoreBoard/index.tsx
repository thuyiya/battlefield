import ScoreBoardItems from '../ScoreBoardItems'
import useApp from '../../hooks/useApp'

const ScoreBoard = () => {
  const appContext = useApp()

  return (
    <div className='flex_center_row t-me-20'>
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
