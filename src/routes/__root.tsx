import '../index.css'

import { QueryClient } from '@tanstack/react-query'
import { createRootRouteWithContext, Outlet, ScrollRestoration } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { Navbar, Toaster, Wrapper } from '@/components'

export const Route = createRootRouteWithContext<{
  queryClient: QueryClient
}>()({
  component: RootComponent,
})

function RootComponent() {
  return (
    <>
      <title>Shopping-list</title>
      <Wrapper>
        <Navbar />
        <Outlet />
      </Wrapper>
      <Toaster />
      <ScrollRestoration />
      <TanStackRouterDevtools />
    </>
  )
}
