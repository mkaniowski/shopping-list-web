import { DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
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
    <DialogContent>
      <DialogHeader>
        <DialogTitle>{product?.name ?? t('shoppingLists.addProduct')}</DialogTitle>
      </DialogHeader>
      <ProductForm
        handleSubmit={handleSubmit}
        product={product}
      />
    </DialogContent>
  )
}
