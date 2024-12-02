import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { RegisterCard } from './RegisterCard'
import { I18nextProvider } from 'react-i18next'
import { i18next } from '@/i18n/Translations'
import { vi } from 'vitest'

describe('RegisterCard Component', () => {
  it('should render RegisterCard component', () => {
    const handleSubmit = vi.fn().mockResolvedValue(undefined)

    render(
      <I18nextProvider i18n={i18next}>
        <RegisterCard handleSubmit={handleSubmit} />
      </I18nextProvider>,
    )

    expect(screen.getByTestId('register-card-title')).toBeInTheDocument()
    expect(screen.getByTestId('register-form')).toBeInTheDocument()
  })
})
