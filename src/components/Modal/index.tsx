import { FC, ReactNode, useRef, useEffect } from 'react'
import ReactDom from 'react-dom'

const modalRoot = document.querySelector('#modal-root') as HTMLElement

type Props = {
  open: boolean
  children: ReactNode
  onClose?: () => void
}

const Modal: FC<Props> = ({ open, children, onClose }) => {
  const elRef = useRef<HTMLDivElement | null>(null)
  if (!elRef.current) elRef.current = document.createElement('div')

  useEffect(() => {
    const el = elRef.current! // non-null assertion because it will never be null
    modalRoot.appendChild(el)
    return () => {
      modalRoot.removeChild(el)
    }
  }, [])

  if (!open) return null

  return ReactDom.createPortal(
    <>
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, .7)',
          zIndex: 1000,
        }}
      />
      <div
        style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: '#FFF',
          padding: '8px',
          zIndex: 1000,
        }}
      >
        {children}
      </div>
    </>,
    elRef.current,
  )
}

export default Modal
