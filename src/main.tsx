/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { createRouter, RouterProvider } from '@tanstack/react-router'
import ReactDOM from 'react-dom/client'

import ErrorBoundary from './ErrorBoundry'
import Translations from './i18n/Translations'
import { routeTree } from './routeTree.gen'
import ErrorView from './views/ErrorView'
import NotFoundView from './views/NotFoundView'

const queryClient = new QueryClient()

// Set up a Router instance
export const router = createRouter({
  routeTree,
  defaultNotFoundComponent: NotFoundView,
  defaultPendingComponent: () => <>TODO</>,
  defaultErrorComponent: ErrorView,
  defaultPreload: 'intent',
  defaultPreloadStaleTime: 0,
  defaultPendingMinMs: 500,
  context: {
    queryClient,
  },
})

// Register things for typesafety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

const InnerApp = () => {
  return (
    <RouterProvider
      router={router}
      notFoundMode='fuzzy'
      defaultPreload='intent'
      defaultPendingMinMs={500}
    />
  )
}

const App = () => {
  return (
    <ErrorBoundary>
      <InnerApp />
    </ErrorBoundary>
  )
}

const rootElement = document.getElementById('root')!

if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <Translations>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </Translations>,
  )
}
