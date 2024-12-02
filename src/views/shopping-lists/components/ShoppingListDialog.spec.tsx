import { act, fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { I18nextProvider } from 'react-i18next'
import { ShoppingListDialogWrapper } from './ShoppingListDialogWrapper'
import { i18next } from '@/i18n/Translations'
import '@testing-library/jest-dom'

const handleSubmit = vi.fn().mockResolvedValue(undefined)

const renderShoppingListDialog = () => {
  return render(
    <I18nextProvider i18n={i18next}>
      <ShoppingListDialogWrapper onSubmit={handleSubmit} />
    </I18nextProvider>,
  )
}

describe('ShoppingListDialog', () => {
  it('renders dialog title and description', async () => {
    renderShoppingListDialog()
    fireEvent.click(screen.getByTestId('dialog-trigger'))
    expect(await screen.findByTestId('dialog-title')).toBeInTheDocument()
    expect(await screen.findByTestId('dialog-description')).toBeInTheDocument()
  })

  it('calls handleSubmit when form is submitted', async () => {
    renderShoppingListDialog()
    fireEvent.click(screen.getByTestId('dialog-trigger'))

    await act(async () => {
      fireEvent.change(screen.getByTestId('name-input'), {
        target: { value: 'New Shopping List' },
      })
      fireEvent.submit(screen.getByTestId('submit-button'))
    })

    expect(handleSubmit).toHaveBeenCalledWith('New Shopping List')
  })

  it('displays validation errors', async () => {
    renderShoppingListDialog()
    fireEvent.click(screen.getByTestId('dialog-trigger'))

    await act(async () => {
      fireEvent.change(screen.getByTestId('name-input'), {
        target: { value: '' },
      })
      fireEvent.submit(screen.getByTestId('submit-button'))
    })

    expect(screen.getByTestId('name-error')).toBeInTheDocument()
  })
})
