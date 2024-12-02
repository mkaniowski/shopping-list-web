import React from 'react'
import { act, fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { ProductForm } from './ProductForm'
import { I18nextProvider } from 'react-i18next'
import { i18next } from '@/i18n/Translations'
import { vi } from 'vitest'

describe('ProductForm Component', () => {
  const handleSubmit = vi.fn().mockResolvedValue(undefined)

  it('should render ProductForm component', () => {
    render(
      <I18nextProvider i18n={i18next}>
        <ProductForm handleSubmit={handleSubmit} />
      </I18nextProvider>,
    )

    expect(screen.getByTestId('name-input')).toBeInTheDocument()
    expect(screen.getByTestId('quantity-input')).toBeInTheDocument()
    expect(screen.getByTestId('quantity-type-input')).toBeInTheDocument()
    expect(screen.getByTestId('submit-button')).toBeInTheDocument()
  })

  it('should call handleSubmit when form is submitted', async () => {
    render(
      <I18nextProvider i18n={i18next}>
        <ProductForm handleSubmit={handleSubmit} />
      </I18nextProvider>,
    )

    await act(async () => {
      fireEvent.change(screen.getByTestId('name-input'), { target: { value: 'Test Product' } })
      fireEvent.change(screen.getByTestId('quantity-input'), { target: { value: '10' } })
      fireEvent.change(screen.getByTestId('quantity-type-input'), { target: { value: 'kg' } })
      fireEvent.submit(screen.getByTestId('submit-button'))
    })

    expect(handleSubmit).toHaveBeenCalledWith({
      id: '',
      name: 'Test Product',
      quantity: 10,
      quantityType: 'kg',
    })
  })

  it('should display validation errors', async () => {
    render(
      <I18nextProvider i18n={i18next}>
        <ProductForm handleSubmit={handleSubmit} />
      </I18nextProvider>,
    )

    await act(async () => {
      fireEvent.submit(screen.getByTestId('submit-button'))
    })

    expect(screen.getByTestId('name-error')).toBeInTheDocument()
    expect(screen.getByTestId('quantity-error')).toBeInTheDocument()
    expect(screen.getByTestId('quantity-type-error')).toBeInTheDocument()
  })
})
