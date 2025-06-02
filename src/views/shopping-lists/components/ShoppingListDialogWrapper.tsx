import { useTranslation } from 'react-i18next'
import { Dialog, DialogTrigger } from '@/components/ui/dialog'
import { IShoppingListDialogProps, ShoppingListDialog } from './ShoppingListDialog'

export const ShoppingListDialogWrapper = (props: IShoppingListDialogProps) => {
  const { t } = useTranslation('views/shopping-lists/components')

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button data-testid='dialog-trigger'>{t('open-dialog')}</button>
      </DialogTrigger>
      <ShoppingListDialog {...props} />
    </Dialog>
  )
}
