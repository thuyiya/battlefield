import { FC } from 'react'

import IMAGE_HIT_SMALL from '../../assets/images/Hit small.png'
import IMAGE_MISS_SMALL from '../../assets/images/Miss small.png'

import './ShipStatus.css'

type PropsShip = {
  image?: string
  size?: number
  count?: number
}

const ShipStatus: FC<PropsShip> = ({ image, size, count = 0 }) => {
  return (
    <div className='ship_status_container'>
      <img src={image} className='img_ship' alt='hit' width='auto' height='auto' />
      <div className='dots'>
        {Array.from(Array(size), (_, r: number) => r + 1 <= count).map((item, key) =>
          item ? (
            <img
              className='img_status'
              key={key}
              src={IMAGE_HIT_SMALL}
              alt='hit'
              width='auto'
              height='auto'
            />
          ) : (
            <img
              className='img_status'
              key={key}
              src={IMAGE_MISS_SMALL}
              alt='hit'
              width='auto'
              height='auto'
            />
          ),
        )}
      </div>
    </div>
  )
}

export default ShipStatus
