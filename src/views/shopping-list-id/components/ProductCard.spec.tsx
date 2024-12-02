// ProductCard.spec.tsx
import { act, fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { IProductCardProps, ProductCard } from './ProductCard'
import { ShoppingListProduct } from '@/model/shoppingLists'
import { I18nextProvider } from 'react-i18next'
import { i18next } from '@/i18n/Translations'
import '@testing-library/jest-dom'

const mockProduct: ShoppingListProduct = {
  id: '1',
  name: 'Test Product',
  quantity: 2,
  quantityType: 'pcs',
}

const mockHandleRemoveProduct = vi.fn()
const mockHandleUpdateProduct = vi.fn()

const renderProductCard = (props: Partial<IProductCardProps> = {}) => {
  return render(
    <I18nextProvider i18n={i18next}>
      <ProductCard
        product={mockProduct}
        handleRemoveProduct={mockHandleRemoveProduct}
        handleUpdateProduct={mockHandleUpdateProduct}
        {...props}
      />
    </I18nextProvider>,
  )
}

describe('ProductCard', () => {
  it('renders product name', () => {
    renderProductCard()
    expect(screen.getByText('Test Product')).toBeInTheDocument()
  })

  it('renders product quantity and type', () => {
    renderProductCard()
    expect(screen.getByText('2 pcs')).toBeInTheDocument()
  })

  it('calls handleRemoveProduct when remove button is clicked', () => {
    renderProductCard()
    act(() => {
      fireEvent.click(screen.getByRole('button', { name: /trash/i }))
    })
    expect(mockHandleRemoveProduct).toHaveBeenCalledWith(mockProduct)
  })

  it('opens dialog when edit button is clicked', () => {
    renderProductCard()
    act(() => {
      fireEvent.click(screen.getByRole('button', { name: /edit/i }))
    })
    expect(screen.getByRole('dialog')).toBeInTheDocument()
  })
})
