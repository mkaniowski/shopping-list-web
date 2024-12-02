import { createFileRoute } from '@tanstack/react-router'
import { ShoppingListById } from '@/views/shopping-list-id'

export const Route = createFileRoute('/_auth/shopping-list/$listId/')({
  component: () => <ShoppingListById />,
})
