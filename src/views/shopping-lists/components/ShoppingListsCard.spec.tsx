import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { ShoppingListsCard } from './ShoppingListsCard'
import { useNavigate } from '@tanstack/react-router'
import { ShoppingList } from '@/model/shoppingLists'
import { i18next } from '@/i18n/Translations'
import { I18nextProvider } from 'react-i18next'
import { t } from 'i18next'

vi.mock('@tanstack/react-router', () => ({
  useNavigate: vi.fn(),
}))

describe('ShoppingListsCard', () => {
  const mockNavigate = vi.fn()
  const mockHandleRemoveList = vi.fn()

  const mockList: ShoppingList = {
    id: '1',
    name: 'Groceries',
    products: [
      { name: 'Milk', quantity: 5, quantityType: 'a' },
      { name: 'Eggs', quantity: 2, quantityType: 'b' },
    ],
  }

  const setup = (list: ShoppingList = mockList) => {
    vi.mocked(useNavigate).mockReturnValue(mockNavigate)
    return render(
      <I18nextProvider i18n={i18next}>
        <ShoppingListsCard
          list={list}
          handleRemoveList={mockHandleRemoveList}
        />
      </I18nextProvider>,
    )
  }

  it('renders list name and products', () => {
    setup()

    expect(screen.getByText('Groceries')).toBeInTheDocument()
    expect(screen.getByText('Milk')).toBeInTheDocument()
    expect(screen.getByText('Eggs')).toBeInTheDocument()
  })

  it('shows "no products" message when the product list is empty', () => {
    const emptyList: ShoppingList = {
      id: '2',
      name: 'Empty List',
      products: [],
    }

    setup(emptyList)

    expect(screen.getByText('Empty List')).toBeInTheDocument()
    expect(screen.getByText(t('shoppingLists.noProducts'))).toBeInTheDocument()
  })

  it('calls handleRemoveList when delete button is clicked', () => {
    setup()

    const deleteButton = screen.getByTestId('delete-button')
    fireEvent.click(deleteButton)

    expect(mockHandleRemoveList).toHaveBeenCalledWith('1')
    expect(mockHandleRemoveList).toHaveBeenCalledTimes(1)
  })

  it('navigates to the correct URL when the edit button is clicked', () => {
    setup()

    const editButton = screen.getByTestId('edit-button')
    fireEvent.click(editButton)

    expect(mockNavigate).toHaveBeenCalledWith({
      to: '/shopping-list/$listId',
      params: { listId: '1' },
    })
    expect(mockNavigate).toHaveBeenCalledTimes(1)
  })
})
