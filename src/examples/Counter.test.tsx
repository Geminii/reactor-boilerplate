import { describe, it } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import Counter from './Counter'

describe('Counter', () => {
  it('render button', () => {
    // Arrange
    render(<Counter />)

    // Act
    fireEvent.click(screen.getByRole('button'))

    // Assert
    expect(screen.getByRole('button')).toHaveTextContent('count is 1')
  })
})
