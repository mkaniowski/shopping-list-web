import '../index.css'

import { QueryClient } from '@tanstack/react-query'
import { createRootRouteWithContext, Outlet, ScrollRestoration } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { Toaster } from '@/components'
import { IAuthContext } from '@/shared/auth'

export const Route = createRootRouteWithContext<{
  queryClient: QueryClient
  auth: IAuthContext
}>()({
  component: RootComponent,
})

function RootComponent() {
  return (
    <>
      <title>Shopping-list</title>
      <Outlet />
      <Toaster />
      <ScrollRestoration />
      <TanStackRouterDevtools />
    </>
  )
}
