import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { I18nextProvider } from 'react-i18next'
import { i18next } from '@/i18n/Translations'
import { ShoppingListsCard } from './ShoppingListsCard'
import '@testing-library/jest-dom'

const mockShoppingList = {
  id: '1',
  name: 'Test Shopping List',
  items: [
    { id: '1', name: 'Item 1', quantity: 1 },
    { id: '2', name: 'Item 2', quantity: 2 },
  ],
}

const handleDelete = vi.fn()
const handleEdit = vi.fn()

const renderShoppingListsCard = () => {
  return render(
    <I18nextProvider i18n={i18next}>
      <ShoppingListsCard
        list={mockShoppingList}
        handleRemoveList={handleDelete}
      />
    </I18nextProvider>,
  )
}

describe('ShoppingListsCard', () => {
  it('renders shopping list name', () => {
    renderShoppingListsCard()
    expect(screen.getByText('Test Shopping List')).toBeInTheDocument()
  })

  it('renders shopping list items', () => {
    renderShoppingListsCard()
    expect(screen.getByText('Item 1')).toBeInTheDocument()
    expect(screen.getByText('Item 2')).toBeInTheDocument()
  })

  it('calls handleEdit when edit button is clicked', () => {
    renderShoppingListsCard()
    fireEvent.click(screen.getByTestId('edit-button'))
    expect(handleEdit).toHaveBeenCalledWith(mockShoppingList.id)
  })

  it('calls handleRemoveList when delete button is clicked', () => {
    renderShoppingListsCard()
    fireEvent.click(screen.getByTestId('delete-button'))
    expect(handleDelete).toHaveBeenCalledWith(mockShoppingList.id)
  })
})
