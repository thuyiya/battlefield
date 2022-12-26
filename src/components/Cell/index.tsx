import { FC, memo } from 'react'
import IMAGE_HIT from '../../assets/images/Hit.png'
import IMAGE_MISS from '../../assets/images/Miss.png'

import './Cell.css'

type PropsCells = {
  miss: boolean
  hit: boolean
  ship: { color: string }
  position: Array<number>
  onChange: (data: Array<number>) => void
}

const Cell: FC<PropsCells> = ({ miss, hit, position, onChange, ship }) => {
  return (
    <button
      className='table_btn'
      style={{ backgroundColor: ship.color || 'gray' }}
      onClick={() => onChange(position)}
    >
      {miss && <img src={IMAGE_MISS} className='img_cell' alt='miss' width='auto' height='auto' />}
      {hit && <img src={IMAGE_HIT} className='img_cell' alt='hit' width='auto' height='auto' />}
    </button>
  )
}

export default memo(Cell)
