import Register from '@/views/register'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/register')({
  component: () => <Register />,
})
