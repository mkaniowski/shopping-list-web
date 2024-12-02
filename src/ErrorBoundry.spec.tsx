import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import ErrorBoundary from './ErrorBoundry'

const ThrowError = () => {
  throw new Error('Test error')
}

describe('ErrorBoundary', () => {
  it('should display error message when a child component throws an error', () => {
    render(
      <ErrorBoundary>
        <ThrowError />
      </ErrorBoundary>,
    )

    expect(screen.getByText('Something went wrong!')).toBeInTheDocument()
  })

  it('should render children when no error is thrown', () => {
    render(
      <ErrorBoundary>
        <div>Child component</div>
      </ErrorBoundary>,
    )

    expect(screen.getByText('Child component')).toBeInTheDocument()
  })
})
