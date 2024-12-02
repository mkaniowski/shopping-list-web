// ProductDialogWrapper.tsx
import { Dialog, DialogTrigger } from '@/components/ui/dialog'
import { IProductDialogProps, ProductDialog } from './ProductDialog'

export const ProductDialogWrapper = (props: IProductDialogProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button data-testid='dialog-trigger'>Open Dialog</button>
      </DialogTrigger>
      <ProductDialog {...props} />
    </Dialog>
  )
}
