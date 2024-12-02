import { Button, Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components'
import { useTranslation } from 'react-i18next'
import { ShoppingList } from '@/model/shoppingLists'
import { ArrowBigRight } from 'lucide-react'
import { useNavigate } from '@tanstack/react-router'
import { TrashIcon } from '@radix-ui/react-icons'

export interface IShoppingListsCard {
  list: ShoppingList
  handleRemoveList: (listId: string) => Promise<void>
}

export const ShoppingListsCard = ({ list, handleRemoveList }: IShoppingListsCard) => {
  const { t } = useTranslation()

  const navigate = useNavigate({ from: '/shopping-list' })

  return (
    <Card className='w-full h-full'>
      <CardHeader>
        <CardTitle>{list.name}</CardTitle>
      </CardHeader>
      <CardContent>
        {list.products?.length && list.products?.length > 0 ?
          <p>{list.products?.map((product) => <p key={product.name}>{product.name}</p>)}</p>
        : <p>{t('shoppingLists.noProducts')}</p>}
      </CardContent>
      <CardFooter className={'w-full flex justify-end gap-x-2'}>
        <Button
          data-testid='delete-button'
          onClick={() => handleRemoveList(list.id)}
        >
          <TrashIcon />
        </Button>
        <Button
          data-testid='edit-button'
          onClick={() => {
            navigate({ to: `/shopping-list/$listId`, params: { listId: list.id } })
          }}
        >
          <ArrowBigRight />
        </Button>
      </CardFooter>
    </Card>
  )
}
