import { ShoppingListsCard } from '@/views/shopping-lists/components/ShoppingListsCard'
import {
  useCreateShoppingListMutation,
  useGetShoppingLists,
  useRemoveShoppingListMutation,
} from '@/shared/shoppingQueries'
import { ShoppingList } from '@/model/shoppingLists'
import { useTranslation } from 'react-i18next'
import { PlusIcon } from '@radix-ui/react-icons'
import { Button, Dialog, Skeleton } from '@/components'
import { DialogTrigger } from '@/components/ui/dialog'
import { ShoppingListDialog } from '@/views/shopping-lists/components/ShoppingListDialog'
import { useToast } from '@/hooks/use-toast'

const ShoppingLists = () => {
  const { t } = useTranslation()
  const { data, isLoading, refetch } = useGetShoppingLists()
  const { mutateAsync: createList } = useCreateShoppingListMutation()
  const { mutateAsync: removeList } = useRemoveShoppingListMutation()
  const { toast } = useToast()

  const handleCreateList = async (name: string) => {
    await createList(name)
      .then(() => {
        toast({
          title: t('shoppingLists.createSuccess'),
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

  const handleRemoveList = async (listId: string) => {
    await removeList(listId).then(() => {
      toast({
        title: t('shoppingLists.removeSuccess'),
      })
      refetch()
    })
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
        <h2 className={'text-2xl'}>
          {t('shoppingLists.listsCount')}: {data?.length}
        </h2>
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <PlusIcon />
            </Button>
          </DialogTrigger>
          <ShoppingListDialog onSubmit={handleCreateList} />
        </Dialog>
      </div>
      <div className={'flex flex-col gap-y-4'}>
        {!data?.length && <span>{t('shoppingLists.noLists')}</span>}
        {!!data?.length &&
          data.map((list: ShoppingList) => {
            return (
              <ShoppingListsCard
                key={list.id}
                list={list}
                handleRemoveList={handleRemoveList}
              />
            )
          })}
      </div>
    </div>
  )
}

export default ShoppingLists
