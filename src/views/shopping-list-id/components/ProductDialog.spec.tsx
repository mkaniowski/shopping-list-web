// ProductDialog.spec.tsx
import { act, fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { ProductDialogWrapper } from './ProductDialogWrapper'
import { ShoppingListProduct } from '@/model/shoppingLists'
import { I18nextProvider } from 'react-i18next'
import { i18next } from '@/i18n/Translations'
import '@testing-library/jest-dom'
import { IProductDialogProps } from './ProductDialog'

const mockProduct: ShoppingListProduct = {
  id: '1',
  name: 'Test Product',
  quantity: 2,
  quantityType: 'pcs',
}

const handleSubmit = vi.fn().mockResolvedValue(undefined)

const renderProductDialog = (props: Partial<IProductDialogProps> = {}) => {
  return render(
    <I18nextProvider i18n={i18next}>
      <ProductDialogWrapper
        product={mockProduct}
        handleSubmit={handleSubmit}
        {...props}
      />
    </I18nextProvider>,
  )
}

describe('ProductDialog', () => {
  it('renders product name', async () => {
    renderProductDialog()
    fireEvent.click(screen.getByTestId('dialog-trigger'))
    expect(await screen.findByTestId('product-dialog-title')).toHaveTextContent('Test Product')
  })

  it('calls handleSubmit when form is submitted', async () => {
    renderProductDialog()
    fireEvent.click(screen.getByTestId('dialog-trigger'))

    await act(async () => {
      fireEvent.change(screen.getByTestId('name-input'), { target: { value: 'Updated Product' } })
      fireEvent.change(screen.getByTestId('quantity-input'), { target: { value: '5' } })
      fireEvent.change(screen.getByTestId('quantity-type-input'), { target: { value: 'kg' } })
      fireEvent.submit(screen.getByTestId('edit-button'))
    })

    expect(handleSubmit).toHaveBeenCalledWith({
      id: '1',
      name: 'Updated Product',
      quantity: 5,
      quantityType: 'kg',
    })
  })

  it('displays validation errors', async () => {
    renderProductDialog()
    fireEvent.click(screen.getByTestId('dialog-trigger'))

    await act(async () => {
      fireEvent.change(screen.getByTestId('name-input'), { target: { value: '' } })
      fireEvent.submit(screen.getByTestId('edit-button'))
    })

    expect(screen.getByTestId('name-error')).toBeInTheDocument()
    expect(screen.getByTestId('quantity-error')).toBeInTheDocument()
    expect(screen.getByTestId('quantity-type-error')).toBeInTheDocument()
  })
})
