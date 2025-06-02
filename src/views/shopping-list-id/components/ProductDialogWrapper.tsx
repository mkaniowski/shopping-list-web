import { useTranslation } from 'react-i18next'
// ProductDialogWrapper.tsx
import { Dialog, DialogTrigger } from '@/components/ui/dialog'
import { IProductDialogProps, ProductDialog } from './ProductDialog'

export const ProductDialogWrapper = (props: IProductDialogProps) => {
  const { t } = useTranslation('views/shopping-list-id/components')

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button data-testid='dialog-trigger'>{t('open-dialog')}</button>
      </DialogTrigger>
      <ProductDialog {...props} />
    </Dialog>
  )
}
