import { render, screen } from '@testing-library/react';
import ScoreBoard from '../components/ScoreBoard';
import AuthContext, { AppContextInterface} from '../context/AppContext';

const value: AppContextInterface = {
  user: {},
  allPoints: 0,
  onLogin: function (user: string): void {
    throw new Error('Function not implemented.');
  },
  updateHit: function (): void {
    throw new Error('Function not implemented.');
  },
  updateShoot: function (): void {
    throw new Error('Function not implemented.');
  },
  pointUpdate: function (p: number): void {
    throw new Error('Function not implemented.');
  },
  resetScore: function (): void {
    throw new Error('Function not implemented.');
  }
}

describe('ScoreBoard', () => {
  value.user = {
    name: 'Thusitha',
    hit: 0,
    shoot: 23,
  }

  test('ScoreBoard render player name', () => {
    render(
      <AuthContext.Provider value={value}>
        <ScoreBoard />
      </AuthContext.Provider>,
    )
    const nameElement = screen.getByText(/Thusitha/i)
    expect(nameElement).toBeInTheDocument()
  })
  test('ScoreBoard render player shoot count', () => {
    render(
      <AuthContext.Provider value={value}>
        <ScoreBoard />
      </AuthContext.Provider>,
    )
    const shootElement = screen.getByText(/23/i)
    expect(shootElement).toBeInTheDocument()
  })
})
