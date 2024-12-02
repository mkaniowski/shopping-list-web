import { Dialog, DialogTrigger } from '@/components/ui/dialog'
import { IShoppingListDialogProps, ShoppingListDialog } from './ShoppingListDialog'

export const ShoppingListDialogWrapper = (props: IShoppingListDialogProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button data-testid='dialog-trigger'>Open Dialog</button>
      </DialogTrigger>
      <ShoppingListDialog {...props} />
    </Dialog>
  )
}
