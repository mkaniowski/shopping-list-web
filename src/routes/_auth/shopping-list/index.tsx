import { createFileRoute } from '@tanstack/react-router'
import ShoppingLists from '@/views/shopping-lists'

export const Route = createFileRoute('/_auth/shopping-list/')({
  component: () => <ShoppingLists />,
})
