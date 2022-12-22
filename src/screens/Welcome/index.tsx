import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useApp from '../../hooks/useApp'
import { STRINGS } from '../../constants'

import './welcome.css'

const Welcome = () => {
  const appContext = useApp()
  const navigate = useNavigate()

  const [text, setText] = useState<string>('')

  const submit = () => {
    appContext?.onLogin(text)
    navigate('/game')
  }

  const disabledButton = useMemo(() => () => text.trim().length < 2, [text])

  // console.log('appContext welcome ', appContext)

  return (
    <div className='container'>
      <h1>Welcome To BATTLEFIELD</h1>
      <input
        className='name_input'
        data-testid='player-name-input'
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder={STRINGS.WELCOME.INPUT_PLACEHOLDER}
      />
      <button
        disabled={disabledButton()}
        className='btn'
        onClick={submit}
        data-testid='lets-play-button'
      >
        {STRINGS.WELCOME.LOGIN_BUTTON}
      </button>
    </div>
  )
}

export default Welcome
