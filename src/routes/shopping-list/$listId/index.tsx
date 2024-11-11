import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/shopping-list/$listId/')({
  component: () => <div>Hello /shopping-list/$listId/!</div>,
})
