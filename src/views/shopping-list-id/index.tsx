import { Button, Dialog, Skeleton } from '@/components'
import { DialogTrigger } from '@/components/ui/dialog'
import { PlusIcon } from '@radix-ui/react-icons'
import { ShoppingListProduct } from '@/model/shoppingLists'
import {
  useAddProductToShoppingListMutation,
  useGetShoppingListById,
  useRemoveItemFromShoppingList,
  useUpdateProductInShoppingListMutation,
} from '@/shared/shoppingQueries'
import { Route } from '@/routes/_auth/shopping-list/$listId'
import { useTranslation } from 'react-i18next'
import { ProductCard } from '@/views/shopping-list-id/components/ProductCard'
import { ProductDialog } from './components/ProductDialog'
import { useToast } from '@/hooks/use-toast'

export const ShoppingListById = () => {
  const { t } = useTranslation()
  const { listId } = Route.useParams()
  const { data, isLoading, refetch } = useGetShoppingListById(listId)
  const { mutateAsync: addProduct } = useAddProductToShoppingListMutation()
  const { mutateAsync: removeProduct } = useRemoveItemFromShoppingList()
  const { mutateAsync: updateProduct } = useUpdateProductInShoppingListMutation()
  const { toast } = useToast()

  const handleUpdateList = async (values: ShoppingListProduct) => {
    if (!data?.products || !data) return
    const productToUpdate = data?.products?.find(
      (product: ShoppingListProduct) => product.id === values.id,
    )

    if (!productToUpdate) return

    const _products = [...data.products]
    const index = _products?.indexOf(productToUpdate)
    _products[index] = values

    return updateProduct({ listId, products: _products })
      .then(() => refetch())
      .then(() => {
        toast({
          title: t('shoppingLists.updateSuccess'),
        })
        refetch()
      })
      .catch((e) => {
        toast({
          title: t('shoppingLists.error'),
          description: e,
          variant: 'destructive',
        })
      })
  }

  const handleAddProduct = (values: ShoppingListProduct) => {
    return addProduct({ listId, product: values })
      .then(() => {
        toast({
          title: t('shoppingLists.addSuccess'),
        })
        refetch()
      })
      .catch((e) => {
        toast({
          title: t('shoppingLists.error'),
          description: e,
          variant: 'destructive',
        })
      })
  }

  const handleRemoveProduct = async (values: ShoppingListProduct) => {
    return removeProduct({ listId, product: values })
      .then(() => refetch())
      .then(() => {
        toast({
          title: t('shoppingLists.removeProductSuccess'),
        })
        refetch()
      })
      .catch((e) => {
        toast({
          title: t('shoppingLists.error'),
          description: e,
          variant: 'destructive',
        })
      })
  }

  const handleSubmit = async (values: ShoppingListProduct) => {
    const productExists = data?.products?.some(
      (product: ShoppingListProduct) => product.name === values.name,
    )
    if (productExists) {
      await handleUpdateList(values).then(() => refetch())
    } else {
      await handleAddProduct(values).then(() => refetch())
    }
  }

  if (isLoading) {
    return (
      <div className={'flex flex-col w-full p-8 gap-y-4'}>
        <Skeleton className={'w-full h-32'} />
        <Skeleton className={'w-full h-32'} />
        <Skeleton className={'w-full h-32'} />
        <Skeleton className={'w-full h-32'} />
      </div>
    )
  }

  return (
    <div className={'flex flex-col p-8 gap-y-8'}>
      <div className={'flex justify-between items-center '}>
        <h2 className={'text-2xl'}>{data?.name}</h2>
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <PlusIcon />
            </Button>
          </DialogTrigger>
          <ProductDialog handleSubmit={handleSubmit} />
        </Dialog>
      </div>
      <div className={'flex flex-col gap-y-4'}>
        {data?.products?.length === 0 && <span>{t('shoppingLists.noProducts')}</span>}
        {!!data?.products &&
          data.products?.map((product: ShoppingListProduct) => {
            return (
              <ProductCard
                key={product.name}
                product={product}
                handleRemoveProduct={handleRemoveProduct}
                handleUpdateProduct={handleUpdateList}
              />
            )
          })}
      </div>
    </div>
  )
}
