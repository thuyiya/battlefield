import { useEffect, useState, FC } from 'react'
import Modal from '../Modal'
import useApp from '../../hooks/useApp'

const GameMenu: FC<{ init?: () => void }> = ({ init }) => {
  const appContext = useApp()
  const [showModal, setShowModal] = useState(false)

  const playAgain = () => {
    setShowModal(false)
    appContext?.resetScore()
  }

  useEffect(() => {
    if (appContext?.allPoints !== 0 && appContext?.user?.hit === appContext?.allPoints) {
      setShowModal(true)
      init && init()
    }
  }, [appContext?.allPoints, appContext?.user?.hit])

  useEffect(() => {
    if (appContext?.user?.shoot === 10 * 10) {
      setShowModal(true)
      init && init()
    }
  }, [appContext?.user?.shoot])

  return (
    <Modal open={showModal}>
      <div
        style={{
          display: 'flex',
          placeItems: 'center',
          height: 200,
          width: 400,
          background: 'rgba(0,0,0,0.1)',
          zIndex: 99,
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          textAlign: 'center',
        }}
      >
        <h1>Game Over</h1>
        <button className='btn' onClick={() => playAgain()}>
          Play Again
        </button>
      </div>
    </Modal>
  )
}

export default GameMenu
