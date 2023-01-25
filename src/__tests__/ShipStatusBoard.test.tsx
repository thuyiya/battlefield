import { render, screen } from '@testing-library/react'
import { MainData } from '../types'
import ShipStatusBoard from '../components/ShipStatusBoard'
import sampleData from '../data/sample.json'

const shipAndPositionData: MainData = sampleData

describe('ShipStatusBoard', () => {
  test('Should return correct image size', async () => {

    const shipData = Object.keys(shipAndPositionData.shipTypes).map((key) => ({
      id: key,
      size: shipAndPositionData.shipTypes[key].size,
      count: 0,
      name: key,
      color: 'transparent',
    }))

    const imageCount = shipData.reduce((acc, curr) => acc + curr.size, 0)

    render(<ShipStatusBoard shipsData={shipData} />)
    const imageAlt = screen.getAllByTestId('miss_small_img_status')

    expect(imageAlt).toHaveLength(imageCount)
  })
})
