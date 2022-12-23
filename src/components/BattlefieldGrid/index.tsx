import { FC, memo } from 'react'
import { Slot } from '../../types';
import Cell from '../Cell';
import './BattlefieldGrid.css'

type Props = {
  battleField: Array<Array<Slot>>
  onChange: (p: Array<number>) => void
}

const BattleFieldGrid: FC<Props> = ({ battleField, onChange }) => {
  return (
    <table>
      <tbody>
        {battleField.map((row: Array<Slot>, i: number) => (
          <tr key={i}>
            {row.map((cell) => (
              <td key={cell.id}>
                <Cell {...cell} onChange={onChange} />
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default memo(BattleFieldGrid)
