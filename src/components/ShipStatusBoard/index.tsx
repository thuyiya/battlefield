import { FC } from 'react'
import { SHIP_IMAGES } from '../../constants'
import { Ship } from '../../types'
import ShipStatus from '../ShipStatus'

type PropsShipStatus = {
  shipsData: Array<Ship>
}

const ShipStatusBoard: FC<PropsShipStatus> = ({ shipsData }) => {
  return (
    <div className='ship-wrapper'>
      {shipsData.map((ship, i) => (
        <ShipStatus key={`${i}`} image={SHIP_IMAGES(ship.name)} {...ship} />
      ))}
    </div>
  )
}

export default ShipStatusBoard
