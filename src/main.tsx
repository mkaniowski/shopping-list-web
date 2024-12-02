/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { createRouter, RouterProvider } from '@tanstack/react-router'
import ReactDOM from 'react-dom/client'

import ErrorBoundary from './ErrorBoundry'
import Translations from './i18n/Translations'
import { routeTree } from './routeTree.gen'
import ErrorView from './views/ErrorView'
import NotFoundView from './views/NotFoundView'
import { ThemeProvider } from '@/context/ThemeContext'
import { ReactKeycloakProvider } from '@react-keycloak/web'
import { keycloak } from '@/shared/keycloak'
import { AuthProvider, useAuth } from '@/shared/auth'
import { TooltipProvider } from './components/ui/tooltip'

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
    auth: undefined!,
  },
})

// Register things for typesafety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

const InnerApp = () => {
  const auth = useAuth()

  return (
    <RouterProvider
      router={router}
      notFoundMode='fuzzy'
      defaultPreload='intent'
      defaultPendingMinMs={500}
      context={{ auth }}
    />
  )
}

const App = () => {
  const eventHandler = (event: string, error: unknown) => {
    console.log('onKeycloakEvent', event, error)

    if (event === 'onReady') {
      console.log('Keycloak is ready')
    }

    if (event === 'onAuthSuccess') {
      console.log('Authentication successful')
    }

    if (event === 'onAuthError') {
      console.error('Authentication error:', error)
    }

    if (event === 'onAuthLogout') {
      console.log('User logged out')
    }
  }

  return (
    <ReactKeycloakProvider
      authClient={keycloak}
      onEvent={eventHandler}
    >
      <AuthProvider>
        <QueryClientProvider client={queryClient}>
          <ErrorBoundary>
            <TooltipProvider>
              <InnerApp />
            </TooltipProvider>
          </ErrorBoundary>
        </QueryClientProvider>
      </AuthProvider>
    </ReactKeycloakProvider>
  )
}

const rootElement = document.getElementById('root')!

if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <Translations>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </Translations>,
  )
}
