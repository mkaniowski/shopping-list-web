import Home from '@/views/home'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_auth/')({
  component: Home,
})