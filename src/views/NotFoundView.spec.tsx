import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import NotFoundView from './NotFoundView'

describe('NotFoundView', () => {
  it('should display the not found message', () => {
    render(<NotFoundView />)

    expect(screen.getByText('Not found :c')).toBeInTheDocument()
  })
})
