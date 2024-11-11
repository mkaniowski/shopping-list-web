import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/shopping-list/')({
  component: () => <div>shopping lsit</div>,
})
