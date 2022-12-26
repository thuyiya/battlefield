import { render, screen, fireEvent } from '@testing-library/react'
import Welcome from '../screens/Welcome'

describe('Welcome', () => {
  test('Renders Welcome Page title', () => {
    render(<Welcome />)
    const linkElement = screen.getByText(/Welcome To BATTLEFIELD/i)
    expect(linkElement).toBeInTheDocument()
  })

  test('Name Input Check', async () => {
    render(<Welcome />)
    expect(screen.getByTestId('player-name-input')).toBeInTheDocument()
  })

  test('Lets Play Button Check', async () => {
    render(<Welcome />)
    expect(screen.getByTestId('lets-play-button')).toBeInTheDocument()
  })

  it('should have the "Let\'s Play" button disabled when initialized', () => {
    render(<Welcome />)
    expect(screen.getByTestId('lets-play-button')).toBeDisabled()
  })

  it('should enable the "Let\'s Play" button when a valid input is entered', () => {
    render(<Welcome />)

    expect(screen.getByTestId('lets-play-button')).toBeDisabled()

    const input = screen.getByTestId('player-name-input')
    fireEvent.change(input, { target: { value: 'Thusitha 1' } })

    expect(screen.getByTestId('lets-play-button')).toBeEnabled()
  })

  it('should have the "Add" button disabled if the input is less than 2 chars', () => {
    render(<Welcome />)

    const input = screen.getByTestId('player-name-input')
    fireEvent.change(input, { target: { value: 'T' } })

    expect(screen.getByTestId('lets-play-button')).toBeDisabled()
  })
})
