// ProductCard.tsx
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { ShoppingListProduct } from '@/model/shoppingLists'
import { Button, Dialog } from '@/components'
import { EditIcon } from 'lucide-react'
import { TrashIcon } from '@radix-ui/react-icons'
import { DialogTrigger } from '@/components/ui/dialog'
import { ProductDialog } from '@/views/shopping-list-id/components/ProductDialog'

export interface IProductCardProps {
  product: ShoppingListProduct
  handleRemoveProduct: (product: ShoppingListProduct) => Promise<void>
  handleUpdateProduct: (product: ShoppingListProduct) => Promise<any>
}

export const ProductCard = ({
  product,
  handleRemoveProduct,
  handleUpdateProduct,
}: IProductCardProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{product.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>
          {product.quantity} {product.quantityType}
        </p>
      </CardContent>
      <CardFooter className={'flex gap-x-2 justify-end'}>
        <Dialog>
          <DialogTrigger asChild>
            <Button aria-label='edit'>
              <EditIcon />
            </Button>
          </DialogTrigger>
          <ProductDialog
            handleSubmit={handleUpdateProduct}
            product={product}
          />
        </Dialog>

        <Button
          aria-label='trash'
          onClick={() => handleRemoveProduct(product)}
        >
          <TrashIcon />
        </Button>
      </CardFooter>
    </Card>
  )
}
