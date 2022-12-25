import ShipTypes from './ShipTypes'

type Layout = {
  ship: string
  positions: Array<Array<number>>
}

type MainData = {
  shipTypes: ShipTypes
  layout: Array<Layout>
}

export default MainData
