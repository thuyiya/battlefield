import { Slot, Layout } from '../types';

const generateSlotBoard = (slot: Slot, row: number, cells: number) => {
  return Array.from(Array(row), (_, r) =>
    Array.from({ length: cells }, (_, c) => ({
      ...slot,
      id: `${r}-${c}`,
      position: [r, c],
    })),
  )
}

const updateSlotWithShipData = (layout: Array<Layout>, slots: Slot[][]) => {

    let allPoints = 0
    const board = slots

    for (let i = 0; i < layout.length; i++) {
      const element = layout[i]
      for (let p = 0; p < element.positions.length; p++) {
        const pos: Array<number> = element.positions[p]
        allPoints++
        board[pos[0]][pos[1]].ship = {
          id: `${pos[0]}-${pos[1]}-${element.ship}`,
          color: 'transparent',
          name: element.ship,
        }
      }
    }

    return { allPoints, board }
}

export { generateSlotBoard, updateSlotWithShipData }