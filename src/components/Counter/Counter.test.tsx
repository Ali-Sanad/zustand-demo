import { render, screen, fireEvent } from '@testing-library/react'
import { Counter } from './Counter'

describe('Counter', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('renders correctly', () => {
    render(<Counter />)

    expect(screen.getByTestId('count')).toHaveTextContent('0')
  })

  describe('when the user clicks on the increment button', () => {
    it('it increases the count value', () => {
      render(<Counter />)

      fireEvent.click(screen.getByTestId('increment'))
      expect(screen.getByTestId('count')).toHaveTextContent('1')
    })
  })

  describe('when the user clicks on the decrement button', () => {
    it('it decreases the count value', () => {
      render(<Counter />)

      fireEvent.click(screen.getByTestId('decrement'))
      expect(screen.getByTestId('count')).toHaveTextContent('0')
    })
  })
})
