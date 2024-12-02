import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import ErrorView from './ErrorView'

describe('ErrorView', () => {
  it('should display the error message', () => {
    render(<ErrorView />)

    expect(screen.getByText('Ooops! An error has occurred')).toBeInTheDocument()
  })
})
