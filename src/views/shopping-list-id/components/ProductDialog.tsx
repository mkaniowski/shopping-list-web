// ProductDialog.tsx
import { DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { ShoppingListProduct } from '@/model/shoppingLists'
import { useTranslation } from 'react-i18next'
import { ProductForm } from '@/views/shopping-list-id/components/ProductForm'

export interface IProductDialogProps {
  product?: ShoppingListProduct
  handleSubmit: (values: any) => Promise<void>
}

export const ProductDialog = ({ product, handleSubmit }: IProductDialogProps) => {
  const { t } = useTranslation()

  return (
    <DialogContent aria-describedby='product-dialog-description'>
      <DialogHeader>
        <DialogTitle
          aria-labelledby={'product-dialog-description'}
          id='product-dialog-title'
          data-testid='product-dialog-title'
        >
          {product?.name ?? t('shoppingLists.addProduct')}
        </DialogTitle>
        <DialogDescription id='product-dialog-description'>
          {t('shoppingLists.productDetails')}
        </DialogDescription>
      </DialogHeader>
      <ProductForm
        handleSubmit={handleSubmit}
        product={product}
      />
    </DialogContent>
  )
}
