import '../index.css'

import { QueryClient } from '@tanstack/react-query'
import { createRootRouteWithContext, Outlet, ScrollRestoration } from '@tanstack/react-router'
// import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { Toaster } from '@/components/ui/toaster'
import Navbar from '@/components/navbar/Navbar'

export const Route = createRootRouteWithContext<{
  queryClient: QueryClient
}>()({
  component: RootComponent,
})

function RootComponent() {
  return (
    <>
      <title>Shopping-list</title>
      <Navbar />
      <Outlet />
      <Toaster />
      <ScrollRestoration />
    </>
  )
}
