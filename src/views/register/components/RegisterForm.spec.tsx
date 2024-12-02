import React from 'react'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import { RegisterForm } from '@/views/register/components/RegisterForm'
import { I18nextProvider } from 'react-i18next'
import { i18next } from '@/i18n/Translations'
import { expect, vi } from 'vitest'

describe('RegisterForm Component', () => {
  it('should mount the component', () => {
    render(
      <I18nextProvider i18n={i18next}>
        <RegisterForm handleSubmit={vi.fn().mockResolvedValue(undefined)} />
      </I18nextProvider>,
    )
  })

  it('should render RegisterForm component', () => {
    const handleSubmit = vi.fn().mockResolvedValue(undefined)

    render(
      <I18nextProvider i18n={i18next}>
        <RegisterForm handleSubmit={handleSubmit} />
      </I18nextProvider>,
    )

    expect(screen.getByTestId('register-form')).toBeInTheDocument()
    expect(screen.getByRole('textbox', { name: /first name/i })).toBeInTheDocument()
    expect(screen.getByRole('textbox', { name: /last name/i })).toBeInTheDocument()
    expect(screen.getByRole('textbox', { name: /username/i })).toBeInTheDocument()
    expect(screen.getByRole('textbox', { name: /email/i })).toBeInTheDocument()
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /register/i })).toBeInTheDocument()
  })

  it('should disable submit button when form is invalid', async () => {
    const handleSubmit = vi.fn().mockResolvedValue(undefined)

    render(
      <I18nextProvider i18n={i18next}>
        <RegisterForm handleSubmit={handleSubmit} />
      </I18nextProvider>,
    )

    fireEvent.blur(screen.getByRole('textbox', { name: /first name/i }))
    fireEvent.blur(screen.getByRole('textbox', { name: /last name/i }))
    fireEvent.blur(screen.getByRole('textbox', { name: /username/i }))
    fireEvent.blur(screen.getByRole('textbox', { name: /email/i }))
    fireEvent.blur(screen.getByLabelText(/password/i))

    await waitFor(() => {
      expect(screen.getByRole('button', { name: /register/i })).toBeDisabled()
    })
  })

  it('should enable submit button when form is valid', async () => {
    const handleSubmit = vi.fn().mockResolvedValue(undefined)

    render(
      <I18nextProvider i18n={i18next}>
        <RegisterForm handleSubmit={handleSubmit} />
      </I18nextProvider>,
    )

    fireEvent.change(screen.getByRole('textbox', { name: /first name/i }), {
      target: { value: 'John' },
    })
    fireEvent.change(screen.getByRole('textbox', { name: /last name/i }), {
      target: { value: 'Doe' },
    })
    fireEvent.change(screen.getByRole('textbox', { name: /username/i }), {
      target: { value: 'johndoe' },
    })
    fireEvent.change(screen.getByRole('textbox', { name: /email/i }), {
      target: { value: 'john.doe@example.com' },
    })
    fireEvent.change(screen.getByLabelText(/password/i), { target: { value: 'Password123@' } })

    await waitFor(() => {
      expect(screen.getByRole('button', { name: /register/i })).not.toBeDisabled()
    })
  })
})
