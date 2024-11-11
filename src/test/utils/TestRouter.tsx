import { routeTree } from '@/routeTree.gen'
import { QueryClient } from '@tanstack/react-query'
import { RouterProvider, createRouter } from '@tanstack/react-router'

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

const queryClient = new QueryClient()

/**
 * Test router provider for testing components that use the router.
 */
export function TestRouter({ children }: Readonly<{ children: JSX.Element[] | JSX.Element }>) {
  const router = createRouter({
    routeTree,
    defaultPreload: 'intent',
    context: {
      queryClient,
    },
    defaultComponent: () => children,
  })

  return (
    <RouterProvider
      router={router}
      notFoundMode='fuzzy'
      defaultPreload='intent'
      defaultPendingMinMs={500}
    />
  )
}
