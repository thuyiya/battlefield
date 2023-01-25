import { generateSlotBoard, updateSlotWithShipData } from "../utils"
import { Slot, MainData } from '../types'
import sampleData from '../data/sample.json'

describe('Utils', () => {
  test('generateSlotBoard Should return 2-D Slot array', () => {
    const slot: Slot = {
      id: '0',
      hit: false,
      miss: false,
      position: [],
      ship: {
        id: '',
        color: 'transparent',
        name: '',
        size: 0,
        count: 0,
      },
    }
    const slots = generateSlotBoard(slot, 10, 10)
    expect(slots).toBeInstanceOf(Array<Array<Slot>>)
  })
  test('generateSlotBoard Should have 10 rows and 10 cells', () => {
    const slot: Slot = {
      id: '0',
      hit: false,
      miss: false,
      position: [],
      ship: {
        id: '',
        color: 'transparent',
        name: '',
        size: 0,
        count: 0,
      },
    }
    const rows = 10
    const cells = 10
    const slots = generateSlotBoard(slot, rows, cells)
    expect(slots.length).toBe(rows)
  })
  test('updateSlotWithShipData Should return Object', () => {
    const slot: Slot = {
      id: '0',
      hit: false,
      miss: false,
      position: [],
      ship: {
        id: '',
        color: 'transparent',
        name: '',
        size: 0,
        count: 0,
      },
    }
    const shipAndPositionData: MainData = sampleData
    const slots = generateSlotBoard(slot, 10, 10)
    const updatedObject = updateSlotWithShipData(shipAndPositionData.layout, slots)
    expect(updatedObject).toBeInstanceOf(Object)
  })

  test('updateSlotWithShipData Should return Object', () => {
    const slot: Slot = {
      id: '0',
      hit: false,
      miss: false,
      position: [],
      ship: {
        id: '',
        color: 'transparent',
        name: '',
        size: 0,
        count: 0,
      },
    }
    const shipAndPositionData: MainData = sampleData
    const slots = generateSlotBoard(slot, 10, 10)
    const actual = updateSlotWithShipData(shipAndPositionData.layout, slots)
    const expected = { allPoints: 17, board: slots }

    expect(actual).toMatchObject(expected)
  })
})

export {}